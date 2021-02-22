<template>
    <div>
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column1'>
                    <div style="text-align:center;position:absolute;border-radius: 25px; border: 3px solid #555; background-color:lightblue; width:250px; margin-left:10px; margin-top:40px;padding:10px">
                        <u><b> What you need to do</b></u>
                        <br>
                        <a> You need to select which projects to build based on the budget.</a>
                        <br><br>
                        <b-button @click="$bvModal.show('instructions_modal')" variant="outline-primary">Show instructions</b-button>
                    </div>
                </div>
                <div class='column2'>
                    <b-table head-variant="dark" items='[]' :fields="fields" thead-class=""> </b-table>
                    <draggable v-model="items" @start="drag=true" @end="drag=false" style="overflow-y:scroll; height:480px;">
                        <div v-for="(item,index) in items" :key="item.item_name">
                            <b-table style="cursor: all-scroll" striped hover table-variant='light' head-variant="dark" :items="item" :fields="fields" thead-class="d-none"
                                        ref="selectableTable" responsive="sm" @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                                <template #cell(arrow)="row">
                                    <img style="cursor: pointer;float: left;" src="../assets/arrow.png" width="20" height="10" @click="row.toggleDetails">
                                    <b-button disabled variant="primary" style="float: left;margin-left:10px;border-radius: 25px;">{{index+1}} )</b-button>
                                </template>
                                <template #row-details="row">
                                    <b-card>
                                        {{row.item.item_name}}
                                    </b-card>
                                </template>
                            </b-table>
                        </div>
                    </draggable>
                    <div style="float: right">
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
import draggable from 'vuedraggable'
import Map from './Map.vue';


export default {
    components: { draggable,Map },
    data(){
        return{
            items: this.getArrayItems(),
            fields: [ 
                {key: "arrow", label: '',class: 'text-right'},
                {key: "item_name", label: 'Project',class: 'text-left'},
                { key: "item_value", label: 'Price (pounds)',sortable: true,class:"text-right",
                    formatter: (value, key, item) => {
                        return value.toLocaleString({ style: 'currency'});
                    }
            },
            ],
            columns: [
                {label: 'Project',field: 'item_name',sortable: false,class: 'text-center'},
                {label: 'Value',field: 'item_value',sortable: false},
                {label: '',field: 'info',sortable: false,},
            ]
        }
    },
    methods:{
        getHeaderClass(index){
            console.log
          if(index==0){
              return '';
          }
          else{
              return 'd-none';
          }
        },
        getArrayItems(){
            let items=JSON.parse(localStorage.getItem('items'));
            let arrayItems=[];
            items.forEach(item => {
                let itemArray=[];
                itemArray.push(item);
                arrayItems.push(itemArray);
            });
            return arrayItems;
        },
        rowHovered(item){
            console.log(item);
            this.$refs.map.$refs[item.item_name][0].style.opacity=1;
        },
        rowUnHovered(item){
            this.$refs.map.$refs[item.item_name][0].style.opacity=0.6;
        },
        submit(){
            let time=new Date().getTime();
            localStorage.setItem('budgeting_finish',JSON.stringify(time));
            let final_items=[];
            let index=1;
            this.items.forEach(item => {
                final_items.push({item_name:item.item_name,item_value:index,item_price:item.item_value});
                index++; 
            });
            localStorage.setItem('final_items',JSON.stringify(final_items));
            this.$router.push("/Consistency");

        }
    }
}
</script>

<style scoped>
    .column1 {
        float: left;
        width: 30%;
        padding: 10px;
    }
    .column2 {
        float: left;
        width: 50%;
        padding: 10px;
    }
    .column3 {
        float: left;
        width: 10%;
        padding-left: 10px;
    }
    .row {
        content: "";
        display: table;
        clear: both;  
    }

</style>