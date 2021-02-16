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
                    </div>
                    <!-- <vue-good-table ref="selectableTable" :columns="columns" :rows="rows" :fixed-header="true" theme="black-rhino" styleClass="vgt-table" max-height="600px" :row-style-class="rowStyleClassFn"
                                    @on-row-mouseenter="onRowMouseover" @on-row-mouseleave="onRowMouseleave" @on-row-click="onRowClick"
                                    :group-options="{
                                        enabled: true,
                                        collapsable: true
                                    }"
                                    :select-options="{
                                        enabled: true,
                                        disableSelectInfo:true
                                    }">
                        <template slot="table-row" slot-scope="props">
                            <img v-if="props.column.field == 'info'" src="../assets/info.png" width="20" height="20" v-b-popover.hover.top="'bla bla bla' ">
                        </template>
                    </vue-good-table> -->
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
        items: JSON.parse(localStorage.getItem('items')),
        //for table
        fields: [ 
            {key: "item_name", label: 'Item',sortable: true ,class:"text-center"},
            { key: "item_value", label: 'Price (pounds)',sortable: true,class:"text-center" },
            { key: "info",label:'' },
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
        //new table
        columns: [
            {label: 'Item',field: 'item_name',sortable: true,},
            {label: 'Price (pounds)',field: 'item_value',sortable: true,},
            {label: '',field: 'info',sortable: false,},
        ],
        rows: this.getGroupedRows()

      }
    
  },
  mounted(){
    },
  methods: {
    // second table
    rowStyleClassFn(){
        return 'VGT-row';
    },
    getGroupedRows(){
        let finals=[];
        let groups={};
        let items =JSON.parse(localStorage.getItem('items'));
        items.forEach(item => {
            groups[item.item_group]=[];
        });
        for(var group in groups){
            items.forEach(item => {
                if(item.item_group==group) groups[group].push(item);
            });
        }
        for(group in groups){
            finals.push({label:group,mode:'span',html:false,children:groups[group]});
        }
        return finals;
    },
    onRowMouseover(params){
        // console.log(params.row);
        this.$refs.map.$refs[params.row.item_name][0].style.opacity=1;
    },
    onRowMouseleave(params){
        if(!this.$refs['selectableTable'].selectedRows.some(cell => cell.item_name == params.row.item_name))
            this.$refs.map.$refs[params.row.item_name][0].style.opacity=0.3;
    },
    onRowClick(params){
        // params.row.vgtSelected=false;
        // if(params.row.item_value>this.budget-this.money_spent && !params.row.vgtSelected){
        //     // alert('ff');
        //     params.row.vgtSelected=false;
        //     this.$refs.selectableTable.selectRow(index);
        //     this.$refs.moneyLabel.classList.add('run-animation');
        //     console.log(this.$refs['moneyLabel'])
        //     var self = this;
        //     setTimeout(function(){
        //             self.$refs.moneyLabel.classList.remove('run-animation');
        //     }, 500);
        // }
        // else{
        //     if(!this.$refs.selectableTable.isRowSelected(index))
        //         this.$refs.map.$refs[item.item_name][0].style.opacity=1;
        //     else this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
        // }
    },
    //first teble
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
    .VGT-row:hover {
        background-color: #B1BDDB;
    }
    @keyframes change {
            /* from { color: red; font-size: 140%; }
            to   { color: black } */
            0% { color: black; }
            50%   { color: red; font-size: 140%; }
            100%   { color: black }
        }
</style>