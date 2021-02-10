<template>

    <div id='app'>
        <div v-if='this.id!=null'>
            <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div >
                    <apexchart  type="pie" width="350" :options="chartOptions" :series="series[0].data"></apexchart>
                    <p style="display: inline;position:absolute;left:25%;" >
                       <b>Money spent:</b> {{money_spent}}
                       <br><br>
                       <span ref="moneyLabel"><b>Budget left:</b> {{budget-money_spent}}</span>
                    </p>
                </div>
                <div class='column'>
                    <b-table sticky-header="90%" striped hover table-variant='light' head-variant="dark" :items="items" :fields="fields"
                             :select-mode="selectMode" ref="selectableTable" responsive="sm" selectable @row-selected="onRowSelected"
                             @row-clicked='onRowClicked' @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                        <template slot="cell(info)">
                            <img src="../assets/info.png" width="20" height="20" v-b-popover.hover.top="'bla bla bla'">
                        </template>
                        <template #cell(select)="{ rowSelected }">
                            <template v-if="rowSelected">
                                <span aria-hidden="true">&check;</span>
                                <span class="sr-only">Selected</span>
                            </template>
                            <template v-else>
                                <span aria-hidden="true">&nbsp;</span>
                                <span class="sr-only">Not selected</span>
                            </template>
                        </template>
                    </b-table>
                    <div style="float: right">
                        <b-button variant="outline-primary" @click="resetTable">reset</b-button>
                        <b-button variant="outline-primary" @click="submit">Submit</b-button>
                        <!-- <p>
                            Selected Rows:<br>
                            {{ selected }}
                        </p> -->
                    </div>

                </div>
                <Map ref="map"/>
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
        items: JSON.parse(localStorage.getItem('items')),
        //for table
        fields: [ 
            {key: "item_name", label: 'Item',sortable: true ,class:"text-center"},
            { key: "item_value", label: 'Price (pounds)',sortable: true,class:"text-center" },
            { key: "info",label:'' },
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
        selectMode: 'multi',
        selected: []

      }
    
  },
  mounted(){
    },
  methods: {
    onRowClicked(item,index){
        if(item.item_value>this.budget-this.money_spent && !this.$refs.selectableTable.isRowSelected(index)){
            // alert('ff');
            this.$refs.selectableTable.selectRow(index);
            this.$refs.moneyLabel.classList.add('run-animation');
            console.log(this.$refs['moneyLabel'])
            var self = this;
            setTimeout(function(){
                    self.$refs.moneyLabel.classList.remove('run-animation');
            }, 500);
        }
        else{
            if(!this.$refs.selectableTable.isRowSelected(index))
                this.$refs.map.$refs[item.item_name][0].style.opacity=1;
            else this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
        }
    },
    onRowSelected(items) {
        let currItem=null;
        // console.log(items);
        items.forEach(item => {
            // console.log(item.item_name);
            if(!this.selected.some(cell => cell.item_name === item.item_name)){
                currItem=item;
            }
        });

        this.selected = items;
        let currBudget=this.budget;
        this.money_spent=0;
        items.forEach(item => {
            currBudget-=item.item_value;
            this.money_spent+=item.item_value;
        });
        this.series=[{data:[currBudget,this.money_spent]}];
      },
    rowHovered(item){
        this.$refs.map.$refs[item.item_name][0].style.opacity=1;
    },
    rowUnHovered(item,index){
        if(!this.$refs.selectableTable.isRowSelected(index))
            this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
    },
    resetTable(){
        this.$refs.selectableTable.clearSelected();
        this.selected = [];
        this.items.forEach(item => {
            this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
        });
    },
    submit(){
        let time=new Date().getTime();
        localStorage.setItem('budgeting_finish',JSON.stringify(time));
        let final_items=[];
        this.items.forEach(item => {
            // console.log(item.item_name);
            if(this.selected.some(cell => cell.item_name === item.item_name)){
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
.column {
  /* float: left;  */
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