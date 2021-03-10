<template>
    <div>
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column1'>
                    
                    <div style="text-align:center;position:absolute;border-radius: 25px; border: 3px solid #555; background-color:lightblue; width:250px; margin-left:10px; margin-top:40px;padding:10px">
                        <u><b> What you need to do</b></u>
                        <br>
                        <a> You need to rank the projects from the most important to the least important according to your best judgment.</a>
                        <br><br>
                        <b-button @click="$bvModal.show('instructions_modal')" variant="outline-primary">Show instructions</b-button>
                    </div>
                </div>
                <div class='column2'>
                    <b-table head-variant="dark" :fields="fields" thead-class=""> </b-table>
                    <draggable :forceFallback="true" v-model="items" @start="startDrag" @end="finishDrag" style="overflow-y:scroll; height:540px;margin-top:-15px">
                        <div v-for="(item,index) in items" :key="index">
                            <br v-if="index==0">
                            <b-table style="cursor: all-scroll;margin-top:-20px" striped hover table-variant='light' head-variant="dark" :items="item" :fields="fields" thead-class="d-none"
                                        ref="selectableTable" responsive="sm" @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                                <template #cell(details)="row">
                                    <img style="cursor: pointer;float: left;margin-right:10px" src="../../assets/arrow.png" width="20" height="10" @click="row.toggleDetails">
                                    <!-- <b-button size="sm" disabled variant="primary" style="float: left;margin-left:10px;margin-top:0px;border-radius: 25px;">{{index+1}} )</b-button> -->
                                    {{row.item.item_name}}
                                </template>
                                <template #row-details="row">
                                    <b-card>
                                        {{row.item.item_desc}}
                                    </b-card>
                                </template>
                                <template #cell(group)="row">
                                    <img :src="getImageURL(row.item.item_group)" alt="" width="30" height="30" v-b-tooltip.hover :title="row.item.item_group"/>
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
import Map from '../Map.vue';


export default {
    components: { draggable,Map },
    data(){
        return{
            items: this.getArrayItems(),
            initial_items: this.getArrayItems(),
            fields: [ 
                {key: "details", label: 'Project',class: 'text-center'},
                {key: "group", label: '',class: 'text-right'},
                // {key: "item_name", label: 'Project',class: 'text-center'},
            ]
        }
    },
    methods:{
        getImageURL(img){
            return require('../../assets/'+img+'.png');
        },
        finishDrag(e){
            const className = 'grabbing';
            const html = document.getElementsByTagName('html').item(0);
            if (html && new RegExp(className).test(html.className) === true) {
                // Remove className with the added space (from setClassToHTMLElement)
                html.className = html.className.replace(
                    new RegExp(' ' + className),
                    ''
                );
                // Remove className without added space (just in case)
                html.className = html.className.replace(new RegExp(className), '');
            }
        },
        startDrag(){
            const className = 'grabbing';
            const html = document.getElementsByTagName('html').item(0);
            if (html && new RegExp(className).test(html.className) === false) {
                html.className += ' ' + className; // use a space in case there are other classNames
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
            // console.log(item);
            this.$refs.map.changeOpacity(item.item_name,1);
        },
        rowUnHovered(item){
            this.$refs.map.changeOpacity(item.item_name,0.6);
        },
        submit(){
            let time=new Date().getTime();
            localStorage.setItem('budgeting_finish',JSON.stringify(time));
            let final_items=[];
            this.items.forEach((item,i) => {
                let prevPos = this.initial_items.map(function(e) { return e[0].item_id; }).indexOf(item[0].item_id);
                let value = prevPos +"-"+i;
                final_items.push({item_id:item[0].item_id,item_name:item[0].item_name,item_value:value});
            });
            console.log(final_items);
            localStorage.setItem('final_items',JSON.stringify(final_items));
            this.$router.push("/Consistency");

        }
    }
}
</script>

<style scoped>
    .column1 {
        float: left;
        width:25%;
        padding: 10px;
    }
    .column2 {
        float: left;
        width: 45%;
        padding: 10px;
    }
    .column3 {
        float: left;
        width: 30%;
        padding-left: 10px;
    }
    .row {
        content: "";
        display: table;
        clear: both;  
    }
    
</style>