<template>
    <div id='app'>
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column1'>
                      <vue-ellipse-progress :progress="tasksDonePercent" :legend-value="numberSelected" color="blue" emptyColor="#8ec5fc" :size="300"
                        :thickness="10" emptyThickness="10%" lineMode="in 10" :legend="true" dash="strict 5 0.05" animation="reverse 700 400"
                        :noData="false" :loading="false" :half="false" :fontSize="fontSize" :fontColor="fontColor">
                        <template v-slot:legend-value>
                            <span ref="moneyLabel" slot="value">/5</span>
                        </template>
                            <template v-slot:legend-caption>
                            <p slot="legend-caption">selected</p>
                        </template>
                    </vue-ellipse-progress>
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
                </div>
                <div class='column3'>
                    <Map ref="map"/>
                </div>
            </div>
    </div>


</template>

<script>
import Map from './Map.vue';
export default {
    components: { Map, },
    data(){
        return{
            numberSelected:0,
            items: JSON.parse(localStorage.getItem('items')),
            //for table
            fields: [ 
                {key: "item_name", label: 'Item',sortable: true ,class:"text-center"},
                { key: "info",label:'' },
                { key: "select",label:'',class:"text-center" }
            ],
            selectMode: 'multi',
            selected: [],
            fontSize: "50px",
            fontColor:'black'
        }
    },
    computed: {
        tasksDonePercent() {
        return (this.numberSelected * 100) / 5;
        },
    },
    methods:{
        onRowClicked(item,index){
            if(this.numberSelected==5 && !this.$refs.selectableTable.isRowSelected(index)){
                this.$refs.selectableTable.selectRow(index);
                this.fontSize='100px';
                this.fontColor='red';
                setTimeout(function(){
                        self.fontSize='50px';
                        self.fontColor='black';
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

            items.forEach(item => {
                // console.log(item.item_name);
                if(!this.selected.some(cell => cell.item_name === item.item_name)){
                    currItem=item;
                }
            });

            this.selected = items;
            this.numberSelected=this.selected.length;
            // let currBudget=this.budget;
            // this.money_spent=0;
            // items.forEach(item => {
                // currBudget-=item.item_value;
                // this.money_spent+=item.item_value;
            // });
            // this.series=[{data:[currBudget,this.money_spent]}];
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
        width: 25%;
        padding: 10px;
    }
    .column2 {
        float: left;
        width: 35%;
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
    @keyframes change {
        /* from { color: red; font-size: 140%; }
        to   { color: black } */
        0% { color: black; }
        50%   { color: red; font-size: 140%; }
        100%   { color: black }
    }
</style>