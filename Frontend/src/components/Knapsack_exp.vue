<template>

    <div id='app'>
        <div v-if='this.id!=null'>
            <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column' style="width: 20%;">
                    <apexchart  type="pie" width="350" :options="chartOptions" :series="series[0].data"></apexchart>
                    <p style="display: inline;position:absolute;left:25%;" >
                       <b>Money spent:</b> {{money_spent}}
                       <br><br>
                       <span ref="moneyLabel"><b>Budget left:</b> {{budget-money_spent}}</span>
                    </p>
                </div>
                <div class='column' style="width: 40%;">
                    <!-- <b-table striped hover table-variant='light' head-variant="dark" :items="items" :fields="fields">
                        <template slot="cell(info)">
                            <img src="../assets/info.png" width="20" height="20" v-b-popover.hover.top="'bla bla bla'">
                        </template>
                        <template slot="cell(select)" slot-scope="row">
                            <b-form-checkbox :id="'a'+row.index" @change="update($event,row)"></b-form-checkbox>
                        </template>
                    </b-table> -->
                    <b-table sticky-header="90%" striped hover table-variant='light' head-variant="dark" :items="items" :fields="fields"
                             :select-mode="selectMode" ref="selectableTable" responsive="sm" selectable @row-selected="onRowSelected"
                             @row-clicked='onRowClicked' @row-hovered="rowHovered" @row-unhovered="rowUnHovered">
                        <template slot="cell(info)">
                            <img src="../assets/info.png" width="20" height="20" v-b-popover.hover.top="'bla bla bla'">
                        </template>
                        <!-- <template slot="cell(select)" slot-scope="row">
                            <b-form-checkbox :id="'a'+row.index" @change="update($event,row)"></b-form-checkbox>
                        </template> -->
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
                        <b-button variant="outline-primary" >Submit</b-button>
                        <!-- <p>
                            Selected Rows:<br>
                            {{ selected }}
                        </p> -->
                    </div>

                </div>
                <div id="map" ref="map" style="margin-left:1%">
                    <img :src="getImageURL('userHome.png')" height="45" width="65" ref="homeImage">
                    <div  v-for="item in items" :key='item'>
                        <img :src="getImageURL(item.url)" height="45" width="65" :ref="item.item_name">
                    </div>
                    <!-- <img src="../assets/city_ams.png" alt="Workplace" usemap="#workmap" width="600" height="600" style="padding-left: 5%">
                    <map name="workmap">
                        <area shape="rect" coords="{{userHome}}" href="" alt="">
                    </map> -->
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

export default {
    components: { apexchart:VueApexCharts, },
  data() {
      return{
        url:'userHome.png',
        id:JSON.parse(localStorage.getItem("participant_ID")),
        output: null,
        budget: 500000,
        money_spent: 0,
        // items: this.$store.getters.getItems,
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
        selected: [],
        //for map
        userHome:[0,0,0,0]

      }
    
  },
  mounted(){
        this.drawImages();
    },
  methods: {
    getImageURL(img){
        return require('../assets/'+img);
    },
    // updated user choise
    drawImages(){
        // console.log(this.$refs);
        // var img = document.createElement('img');
        // img.src="../assets/userHome.png";
        // img.ref="homeImage";
        // img.height='50';
        // img.width='400';
        // this.$refs.map.appendChild(img);
        this.$refs.homeImage.style.position='relative';
        this.$refs.homeImage.style.left='30%';
        this.$refs.homeImage.style.top='30%';
        this.items.forEach(item => {
            // console.log(item.item_name);
            this.$refs[item.item_name][0].style.position='relative';
            this.$refs[item.item_name][0].style.left=item.x_coord.toString()+'%';
            this.$refs[item.item_name][0].style.top=item.y_coord.toString()+'%';
            this.$refs[item.item_name][0].style.opacity=0.3;
        });
    },
    update(e,row) {
      if(e){
          this.budget=this.series[0].data[0]-row.item.item_value;
          this.money_spent=this.series[0].data[1]+row.item.item_value;

          this.series=[{data:[this.budget,this.money_spent]}];
      }    
      else{
          this.budget=this.series[0].data[0]+row.item.item_value;
          this.money_spent=this.series[0].data[1]-row.item.item_value;
          
          this.series=[{data:[this.budget,this.money_spent]}];
      } 
    },
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
                this.$refs[item.item_name][0].style.opacity=1;
            else this.$refs[item.item_name][0].style.opacity=0.3;
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
        this.$refs[item.item_name][0].style.opacity=1;
    },
    rowUnHovered(item,index){
        if(!this.$refs.selectableTable.isRowSelected(index))
            this.$refs[item.item_name][0].style.opacity=0.3;
    },
    resetTable(){
        this.$refs.selectableTable.clearSelected();
        this.selected = [];
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
#map{
    background-image: url('../assets/city_ams.png');
    width: 600px;
    height: 600px;
}
</style>