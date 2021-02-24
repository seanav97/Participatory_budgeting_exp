<template>

    <div id='app'>
        <div v-if='this.id!=null'>
            <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column1'>
                    <apexchart  type="pie" width="300" :options="chartOptions" :series="series[0].data"></apexchart>
                    <p style="position:relative;left:5%;" >
                       <b>Money spent:</b> {{money_spent.toLocaleString({ style: 'currency'})}}
                       <br><br>
                       <span ref="moneyLabel"><b>Budget left:</b> {{(budget-money_spent).toLocaleString({ style: 'currency'})}}</span>
                    </p>
                    <div style="text-align:center;position:absolute;border-radius: 25px; border: 3px solid #555; background-color:lightblue; width:250px; margin-left:10px; margin-top:40px;padding:10px">
                        <u><b> What you need to do</b></u>
                        <br>
                        <a> You need to select which projects to build based on the budget of {{(budget).toLocaleString({ style: 'currency'})}} pounds.</a>
                        <br><br>
                        <b-button @click="$bvModal.show('instructions_modal')" variant="outline-primary">Show instructions</b-button>

                    </div>
                </div>
                <div class='column2'>
                    <filter-group/>
                    <b-table sticky-header="500px" striped hover table-variant='light' head-variant="dark" :items="items" :fields="fields"
                             :select-mode="selectMode" ref="selectableTable" responsive="sm" @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                        <template #cell(arrow)="row">
                            <img style="cursor: pointer;display: inline;float:left" src="../assets/arrow.png" width="20" height="10" @click="row.toggleDetails">
                        </template>
                        <template #cell(group)="row">
                            <img :src="$parent.getImageURL(row.item.item_group)" alt="" width="30" height="30" v-b-tooltip.hover :title="row.item.item_group"/>
                        </template>
                        <template slot="cell(select)" slot-scope="row">
                            <b-form-checkbox size="lg" v-model="row.item.selected" @change="update($event,row)"></b-form-checkbox>
                        </template>
                        <template #row-details="row">
                            <b-card>
                                {{row.item.item_name}}
                            </b-card>
                        </template>
                    </b-table>
                    <b-alert style="text-align:center" v-if="!somethingSelected" show variant="danger">You must select some projects.</b-alert>
                    <div style="float: right">
                        <b-button variant="outline-primary" @click="resetTable">reset</b-button>
                        <b-button variant="outline-primary" @click="submit">Submit</b-button>
                    </div>
                </div>
                <div class="column3">
                    <Map ref="map"/>
                </div>
            </div>
        </div>
        <div v-else style="width:80%;padding-left: 25%;font-size: 50px;">
            <br><br>
            <b-alert show variant="danger">Please complete all the necessary steps</b-alert>
        </div>
        <b-modal size="lg" id="instructions_modal" hide-footer>
            <instructions/>
            <b-button variant="outline-primary" block @click="$bvModal.hide('instructions_modal')">Close</b-button>
        </b-modal>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Map from './Map.vue';
import FilterGroup from './FilterGroup.vue';
import Instructions from './Instructions.vue';

export default {
    components: { apexchart:VueApexCharts,Map, FilterGroup, Instructions, },
  data() {
      return{
        id:JSON.parse(localStorage.getItem("participant_ID")),
        budget: 500000,
        money_spent: 0,
        items: JSON.parse(localStorage.getItem('items')).map(v => ({...v, selected: false})),
        //for table
        fields: [ 
            {key: "arrow", label: ''},
            {key: "group", label: ''},
            {key: "item_name", label: 'Item',sortable: true ,class:"text-center"},
            { key: "item_value", label: 'Price (pounds)',sortable: true,class:"text-center",
                formatter: (value, key, item) => {
                    return value.toLocaleString({ style: 'currency'});
                }
            },
            // { key: "info",label:'' },
            { key: "select",label:'',class:"text-center" }
        ],
        //for chart
        chartOptions: {
            dataLabels: {
                enabled: false
            },
            labels: ['Left', 'Used'],
            legend: {
                  position: 'top'
                },
            colors: ['#F6F6F6', '#BFC0C2']
        },
        series: [{data:[500000,0]}] ,
        somethingSelected:true
      }
    
  },
  mounted(){
    },
  methods: {
    update(e,row) {
        if(e){
            if(row.item.item_value>this.budget-this.money_spent){
                let self=this;
                setTimeout(function(){
                    self.items.forEach(item => {
                        if(item.item_name==row.item.item_name){ item.selected=false;console.log(item.selected);}
                    });
                }, 5);
                this.$refs.moneyLabel.classList.add('run-animation');
                setTimeout(function(){
                        self.$refs.moneyLabel.classList.remove('run-animation');
                }, 500);
                

            }
            else{
                this.$refs.map.$refs[row.item.item_name][0].style.opacity=1;
                this.money_spent+=row.item.item_value;
                this.somethingSelected=true;
                // this.selected.push(row.item);
            }

        }
        else{
            this.$refs.map.$refs[row.item.item_name][0].style.opacity=0.3;
            this.money_spent-=row.item.item_value;
            // this.selected=this.selected.filter(item => item.item_name != row.item.item_name);
        }
        // console.log(this.selected);
        this.series=[{data:[this.budget-this.money_spent,this.money_spent]}];
    },
    rowHovered(item){
        this.$refs.map.$refs[item.item_name][0].style.opacity=1;
    },
    rowUnHovered(item,index){
        let isSelected=this.items.filter(obj => {return obj.item_name == item.item_name})[0].selected;
        if(!isSelected)
            this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
    },
    resetTable(){
        this.money_spent=0;
        this.series=[{data:[this.budget,this.money_spent]}];
        this.items.forEach(item => {
            item.selected=false;
            this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
        });
    },
    submit(){
        let final_items=[];
        let itemsSelected=0;
        this.items.forEach(item => {
            if(item.selected){
                final_items.push({item_name:item.item_name,item_value:1,item_price:item.item_value});
                itemsSelected++;
            }
            else{
                final_items.push({item_name:item.item_name,item_value:0,item_price:item.item_value});
            }
        });
        // console.log(final_items);
        if(itemsSelected==0){
            this.somethingSelected=false;
            return;
        }
        let time=new Date().getTime();
        localStorage.setItem('budgeting_finish',JSON.stringify(time));
        localStorage.setItem('final_items',JSON.stringify(final_items));
        this.$router.push("/Consistency");

    }
  }
};
</script>

<style>
    .column1 {
        float: left;
        width: 20%;
        padding: 10px;
    }
    .column2 {
        float: left;
        width: 40%;
        padding: 10px;
    }
    .column3 {
        float: left;
        width: 40%;
        padding: 10px;
    }
    .row {
        content: "";
    display: table;
    clear: both;  
    }
    html {
    overflow-y: scroll; 
    }
    .run-animation{
        animation:change 0.5s;
    }

    @keyframes change {
            /* from { color: red; font-size: 140%; }
            to   { color: black } */
            0% { color: black; }
            50%   { color: red; font-size: 140%; }
            100%   { color: black }
        }
</style>