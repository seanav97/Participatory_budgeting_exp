<template>

    <div id='app'>
        <div v-if='this.id!=null'>
            <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column1'>
                    <apexchart  type="pie" width="300" :options="chartOptions" :series="series[0].data"></apexchart>
                    <p style="position:relative;left:5%;" >
                       <b>Money spent:</b> {{money_spent}}
                       <br><br>
                       <span ref="moneyLabel"><b>Budget left:</b> {{budget-money_spent}}</span>
                    </p>
                </div>
                <div class='column2'>
                    <b-dropdown text="view defferent categories" variant="primary" class="m-2">
                        <!-- <div  v-for="group in this.groups" :key='group'>
                            <b-form-checkbox>{{group}}</b-form-checkbox>
                        </div> -->
                        <b-form-checkbox-group
                            id="groups"
                            :options="groups"
                            class="ml-4"
                            stacked>
                        </b-form-checkbox-group>
                    </b-dropdown>
                    <b-table sticky-header="90%" striped hover table-variant='light' head-variant="dark" :items="items" :fields="fields"
                             :select-mode="selectMode" ref="selectableTable" responsive="sm" @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                        <template #cell(arrow)="row">
                            <img src="../assets/arrow.png" width="20" height="10" @click="row.toggleDetails">
                        </template>
                        <template slot="cell(select)" slot-scope="row">
                            <b-form-checkbox size="lg" v-model="row.item.selected" :ref="row.item.item_name+'_check'" :id="'a'+row.index" @change="update($event,row)"></b-form-checkbox>
                        </template>
                        <template #row-details="row">
                            <b-card>
                                {{row.item.item_name}}
                            </b-card>
                        </template>
                    </b-table>
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
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Map from './Map.vue';

export default {
    components: { apexchart:VueApexCharts,Map, },
  data() {
      return{
        id:JSON.parse(localStorage.getItem("participant_ID")),
        budget: 500000,
        money_spent: 0,
        items: JSON.parse(localStorage.getItem('items')).map(v => ({...v, selected: false})),
        //for table
        fields: [ 
            {key: "arrow", label: ''},
            {key: "item_name", label: 'Item',sortable: true ,class:"text-center"},
            { key: "item_value", label: 'Price (pounds)',sortable: true,class:"text-center" },
            // { key: "info",label:'' },
            { key: "select",label:'',class:"text-center" }
        ],
        selectMode: 'multi',
        selected: [],
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
        groups: this.getGroupedItems()

      }
    
  },
  mounted(){
    },
  methods: {
    // second table
    getGroupedItems(){
        let groups=[];
        let groupedItems=[];
        let items =JSON.parse(localStorage.getItem('items'));
        items.forEach(item => {
            groups.push(item.item_group);
        });
        groups=[...new Set(groups)];
        // groups.forEach(group => {
        //     groups.push(item.item_group);
        // });
        // items.forEach(item => {
        //     groups[item.item_group]=[];
        // });
        // for(var group in groups){
        //     items.forEach(item => {
        //         // item.text=item.item_name;
        //         if(item.item_group==group) groups[group].push({text:item.item_name,value:item});
        //     });
        // }
        return groups;
    },
    getItemsOfGroup(group_name){
        let return_items=[];
        this.items.forEach(item => {
            if(item.group_name==group_name)
                return_items.push(item);
        });
        return return_items;
    },
    //first teble
    update(e,row) {
        let currBudget=this.budget;
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
        let time=new Date().getTime();
        localStorage.setItem('budgeting_finish',JSON.stringify(time));
        let final_items=[];
        this.items.forEach(item => {
            if(item.selected){
                final_items.push({item_name:item.item_name,item_value:1,item_price:item.item_value});
            }
            else{
                final_items.push({item_name:item.item_name,item_value:0,item_price:item.item_value});
            }
        });
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