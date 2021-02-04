<template>
    <div id='app'>
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Building our city</h1>
            <div class='row'>
                <div class='column' style="width: 20%;">
                    <apexchart  type="pie" width="350" :options="chartOptions" :series="series[0].data"></apexchart>
                </div>
                <div class='column' style="width: 40%;">
                    <b-table striped hover table-variant='light' head-variant="dark" :items="items" :fields="fields">
                        <!-- <template slot="cell(info)">
                            <b-button v-b-popover.hover.top="'bla bla bla'">i</b-button>
                        </template> -->
                        <template slot="cell(select)" slot-scope="row">
                            <b-form-checkbox :id="'a'+row.index" @change="update($event,row)"></b-form-checkbox>
                        </template>
                    </b-table>
                </div>
                <div class='column' style="width: 10%;">sdf</div>
            </div>
            
        
        
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
    components: { apexchart:VueApexCharts, },
  data() {
      return{
        output: null,
        budget: 100,
        money_spent: 0,
        items: this.$store.getters.getItems,
        //for table
        fields: [ 
            {key: "item_name", label: 'Item',sortable: true ,class:"text-center"},
            // { key: "info",label:'' },
            { key: "item_value", label: 'Price (pounds)',sortable: true,class:"text-center" },
            { key: "select",class:"text-center" }
        ],
        //for chart
        chartOptions: {
            labels: ['Used', 'Left'],
            legend: {
                  position: 'bottom'
                },
            colors: ['#009933', '#66ff66']
        },
        series: [{data:[1000000,0]}] ,

      }
    
  },
  methods: {
    // updated user choise
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
    }
  }
};
</script>

<style>
.column {
  float: left; 
}
html {
  overflow-y: scroll; 
}
</style>