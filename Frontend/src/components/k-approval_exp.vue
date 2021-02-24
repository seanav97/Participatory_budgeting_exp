<template>
    <div id='app'>
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column1'>
                      <vue-ellipse-progress :progress="tasksDonePercent" :legend-value="numberSelected" color="blue" emptyColor="#8ec5fc" :size="250"
                        :thickness="10" emptyThickness="10%" lineMode="in 10" :legend="true" dash="strict 5 0.05" animation="reverse 700 400"
                        :noData="false" :loading="false" :half="false" :fontSize="fontSize" :fontColor="fontColor" style="margin-left:20px">
                        <template v-slot:legend-value>
                            <span ref="moneyLabel" slot="value">/5</span>
                        </template>
                            <template v-slot:legend-caption>
                            <p slot="legend-caption">selected</p>
                        </template>
                    </vue-ellipse-progress>
                    <div style="text-align:center;position:absolute;border-radius: 25px; border: 3px solid #555; background-color:lightblue; width:250px; margin-left:10px; margin-top:40px;padding:10px">
                        <u><b> What you need to do</b></u>
                        <br>
                        <a> You need to select up to 5 projects from the list, according to your best judgement.</a>
                        <br><br>
                        <b-button @click="$bvModal.show('instructions_modal')" variant="outline-primary">Show instructions</b-button>

                    </div>
                </div>
                <div class='column2'>
                    <filter-group/>
                    <b-table sticky-header="500px" striped hover table-variant='light' head-variant="dark" :items="items" :fields="fields"
                             :select-mode="selectMode" ref="selectableTable" responsive="sm" @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                        <template #cell(arrow)="row">
                            <img src="../assets/arrow.png" width="20" height="10" @click="row.toggleDetails">
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
                <div class='column3'>
                    <Map ref="map"/>
                </div>
            </div>
    </div>


</template>

<script>
import FilterGroup from './FilterGroup.vue';
import Map from './Map.vue';
export default {
    components: { Map, FilterGroup, },
    data(){
        return{
            numberSelected:0,
            somethingSelected:true,
            items: JSON.parse(localStorage.getItem('items')).map(v => ({...v, selected: false})),
            //for table
            fields: [ 
                {key: "arrow", label: ''},
                {key: "group", label: ''},
                {key: "item_name", label: 'Item',sortable: true ,class:"text-center"},
                { key: "info",label:'' },
                { key: "select",label:'',class:"text-center" }
            ],
            selectMode: 'multi',
            // selected: [],
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
        update(e,row) {
            let currBudget=this.budget;
            if(e){
                if(this.numberSelected==5){
                    const self=this;
                    setTimeout(function(){
                        self.items.forEach(item => {
                            if(item.item_name==row.item.item_name){ item.selected=false;}
                        });
                    }, 5);
                    this.fontSize='100px';
                    this.fontColor='red';
                    setTimeout(function(){
                            self.fontSize='50px';
                            self.fontColor='black';
                    }, 500);
                    

                }
                else{
                    this.$refs.map.$refs[row.item.item_name][0].style.opacity=1;
                    this.numberSelected++;
                    this.somethingSelected=true;

                    // this.money_spent+=row.item.item_value;
                    // this.selected.push(row.item);
                }

            }
            else{
                this.$refs.map.$refs[row.item.item_name][0].style.opacity=0.3;
                this.numberSelected--;
                // this.money_spent-=row.item.item_value;
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
            this.$refs.selectableTable.clearSelected();
            this.items.forEach(item => {
                item.selected=false;
                this.$refs.map.$refs[item.item_name][0].style.opacity=0.3;
            });
            this.numberSelected=0;
        },
        submit(){
            let time=new Date().getTime();
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
            if(itemsSelected==0){
                this.somethingSelected=false;
                return;
            }
    
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
    @keyframes change {
        /* from { color: red; font-size: 140%; }
        to   { color: black } */
        0% { color: black; }
        50%   { color: red; font-size: 140%; }
        100%   { color: black }
    }
</style>