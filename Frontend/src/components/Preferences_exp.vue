<template>
    <div>
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
        <div class='row'>
            <div class='column1'>
                <apexchart  type="pie" width="300" :options="chartOptions" :series="series[0].data"></apexchart>
                <p style="position:relative;left:5%;" >
                    <b>Money spent:</b> {{currSum.toLocaleString({ style: 'currency'})}}
                    <br><br>
                    <span ref="moneyLabel"><b>Budget left:</b> {{(budget-currSum).toLocaleString({ style: 'currency'})}}</span>
                </p>
                <div style="text-align:center;position:absolute;border-radius: 25px; border: 3px solid #555; background-color:lightblue; width:250px; margin-left:10px; margin-top:40px;padding:10px">
                    <u><b> What you need to do</b></u>
                    <br>
                    <a> You need to select which projects to build based on the budget.</a>
                    <br><br>
                    <b-button @click="$bvModal.show('instructions_modal')" variant="outline-primary">Show instructions</b-button>

                </div>
            </div>
            <div class='column2'>
                <filter-group/>
                <b-table sticky-header="500px" striped hover table-variant='light' head-variant="dark" :items="items" :fields="fields"
                            ref="selectableTable" responsive="sm" @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                    <template #cell(arrow)="row">
                        <img src="../assets/arrow.png" width="20" height="10" @click="row.toggleDetails">
                    </template>
                    <template slot="cell(range)" slot-scope="row">
                        <b-form-input v-model="row.item.given_value" type="range" min="0" max="500000" step="1000" @change="calc(row)"></b-form-input>
                        <!-- <b-form-checkbox size="lg" v-model="row.item.selected" :ref="row.item.item_name+'_check'" :id="'a'+row.index" @change="update($event,row)"></b-form-checkbox> -->
                    </template>
                    <template #row-details="row">
                        <b-card>
                            {{row.item.item_name}}
                        </b-card>
                    </template>
                </b-table>
                <b-alert style="text-align:center" v-if="!goodSum" show variant="danger">Please make sure the values add to {{(budget).toLocaleString({ style: 'currency'})}} </b-alert>
                <div style="float: right">
                    <b-button variant="outline-primary" @click="resetTable">reset</b-button>
                    <b-button variant="outline-primary" @click="normalize">Normalize</b-button>
                    <b-button variant="outline-primary" @click="submit">Submit</b-button>
                </div>
            </div>
            <div class='column3'>
                <Map ref="map"/>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Map from './Map.vue';
import FilterGroup from './FilterGroup.vue';
export default {
    components: { Map,apexchart:VueApexCharts,FilterGroup },
    data(){
        return{
            currSum:0,
            budget: 500000,
            goodSum:true,
            items: JSON.parse(localStorage.getItem('items')).map(v => ({...v, given_value: 0})),
            fields: [ 
                {key: "arrow", label: ''},
                {key: "item_name", label: 'Item',sortable: true ,class:"text-center"},
                {key: "range", label: ''},
                {key: "given_value", label: 'value',
                formatter: (value, key, item) => {
                        return item.given_value.toLocaleString({ style: 'currency'});
                    }
                },
                // { key: "given_value", label: 'value'},
            ],
            chartOptions: {
                dataLabels: {enabled: false},
                labels: [],
                legend: {show: false},
            },
            series: [{data:[100,0]}] ,
        }
    },
    computed:{

    },
    methods:{
        calc(row){
            let arr=[];
            this.currSum=0;
            this.items.forEach(item => {
                this.currSum+=parseInt(item.given_value) ;
            });
            this.items.forEach(item => {
                arr.push(Math.round((item.given_value/this.currSum)*this.budget));
            });
            if(this.currSum>this.budget) this.$refs.moneyLabel.style.color = 'red';
            else this.$refs.moneyLabel.style.color = 'black';

            this.chartOptions.labels=this.items.map(value => value.item_name);
            this.chartOptions={
                dataLabels: {enabled: false},
                labels: this.items.map(value => value.item_name),
                legend: {show:false,position: 'bottom',horizontalAlign: 'left', },
            };
            this.series=[{data:arr}];

        },
        rowHovered(item){
            this.$refs.map.$refs[item.item_name][0].style.opacity=1;
        },
        rowUnHovered(item,index){
            if(item.given_value==0)
                this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
        },
        normalize(){
            // let currSum=0;
            // this.items.forEach(item => {
            //     currSum+=parseInt(item.given_value) ;
            // });
            if(this.currSum!=this.budget && this.currSum>0 && this.currSum!=this.budget){
                this.items.forEach(item => {
                    item.given_value=Math.round((item.given_value/this.currSum)*this.budget);
                });
            }
            this.currSum=this.budget;
            this.goodSum=true;
            this.$refs.moneyLabel.style.color = 'black';
        },
        resetTable(){
            this.items.forEach(item => {
                item.given_value=0;
                this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
            });
            this.chartOptions={
                dataLabels: {enabled: false},
                labels: this.items.map(value => value.item_name),
                legend: {show:false,position: 'bottom',horizontalAlign: 'left', },
            };
            this.series= [{data:[100,0]}]
            this.currSum=0;
            this.$refs.moneyLabel.style.color = 'black';
        },
        submit(){
            if(this.currSum!=this.budget){
                this.goodSum=false;
                return;
            }
            let time=new Date().getTime();
            localStorage.setItem('budgeting_finish',JSON.stringify(time));
            let final_items=[];
            this.items.forEach(item => {
                final_items.push({item_name:item.item_name,item_value:item.given_value,item_price:item.item_value});
            });
            localStorage.setItem('final_items',JSON.stringify(final_items));
            this.$router.push("/Consistency");

        }
    }
}
</script>

<style>
    html {
        overflow-y: scroll; 
    }
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
</style>