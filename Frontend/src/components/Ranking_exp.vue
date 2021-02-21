<template>
    <div>
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column1'>
                </div>
                <div class='column2'>
                    <draggable v-model="items" @start="drag=true" @end="drag=false" style="overflow-y:scroll; height:600px;">
                        <div v-for="(item,index) in items" :key="item.item_name">
                            <b-table style="cursor: all-scroll" striped hover table-variant='light' head-variant="dark" :items="item" :fields="fields" thead-class="d-none"
                                        ref="selectableTable" responsive="sm" @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                                <template #cell(arrow)="row">
                                    <img style="cursor: pointer;float: left;" src="../assets/arrow.png" width="20" height="10" @click="row.toggleDetails">
                                    <b-button style="float: left;margin-left:10px">{{index+1}} )</b-button>
                                </template>
                                <template #row-details="row">
                                    <b-card>
                                        {{row.item.item_name}}
                                    </b-card>
                                </template>
                            </b-table>
                        </div>
                    </draggable>
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
                // {key: "text", label: '',class: 'text-left'},

                // {key: "place", label: '',class: 'bla'},
                
                {key: "item_name", label: '',class: 'text-left'},
                { key: "item_value", label: '',class: 'text-right'},
            ],
            columns: [
                {label: '',field: 'item_name',sortable: false,class: 'text-center'},
                {label: '',field: 'item_value',sortable: false},
                {label: '',field: 'info',sortable: false,},
            ]
        }
    },
    methods:{
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
    }
}
</script>

<style scoped>
    .column1 {
        float: left;
        width: 20%;
        padding: 10px;
    }
    .column2 {
        float: left;
        width: 50%;
        padding: 10px;
    }
    .column3 {
        float: left;
        width: 30%;
        padding: 10px;
    }
    .row {
        content: "";
        display: table;
        clear: both;  
    }

</style>