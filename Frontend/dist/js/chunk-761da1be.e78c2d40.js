(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-761da1be"],{1100:function(e,t,i){e.exports=i.p+"img/background.85d5f527.jpg"},1771:function(e,t,i){var r={"./Culture & community.png":"8492","./Education.png":"6e6a","./Environment, public health & safety.png":"ecb2","./Facilities, parks & recreation.png":"23b6","./Streets, Sidewalks & Transit.png":"fa735","./amphitheater.png":"98bc","./arrow.png":"c5d4","./background.jpg":"1100","./benches.png":"1afe","./bike_repair.png":"bddc","./chefs.jpg":"b89a","./city_ams.png":"6bf3","./computers_center.png":"6b14","./dog_park.jpg":"ce79","./info.png":"9417","./library_furniture.png":"1803","./logo.png":"cf05","./music.jpg":"ed46","./public_toilet.png":"d5ac","./school_chairs.png":"2e74","./temp.png":"a23c","./userHome.png":"8d67","./water_refill.png":"2336","./‏‏knapsack_empty_example.png":"b950","./‏‏knapsack_example.png":"3c71"};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="1771"},"2ea2":function(e,t,i){"use strict";var r=i("ea35"),a=i.n(r);a.a},5490:function(e,t,i){"use strict";var r=i("a6b6"),a=i.n(r);a.a},a0be:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"map",staticStyle:{"margin-left":"1%"},attrs:{id:"map"}},[i("img",{ref:"homeImage",attrs:{src:e.getImageURL("userHome.png"),height:"45",width:"65"}}),e._l(this.our_items,(function(t){return i("div",{key:t},[i("img",{ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.url),height:"45",width:"65"}})])}))],2)},a=[],s={data(){return{url:"../assets/userHome.png",our_items:JSON.parse(localStorage.getItem("items"))}},mounted(){this.drawImages()},methods:{getImageURL(e){return i("1771")("./"+e)},drawImages(){this.$refs.homeImage.style.position="relative",this.$refs.homeImage.style.left="30%",this.$refs.homeImage.style.top="30%",this.our_items.forEach(e=>{this.$refs[e.item_name][0].style.position="relative",this.$refs[e.item_name][0].style.left=e.x_coord.toString()+"%",this.$refs[e.item_name][0].style.top=e.y_coord.toString()+"%",this.$refs[e.item_name][0].style.opacity=.3})}}},n=s,o=(i("5490"),i("2877")),l=Object(o["a"])(n,r,a,!1,null,null,null);t["a"]=l.exports},a6b6:function(e,t,i){},b13f:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-dropdown",{staticClass:"m-2",attrs:{text:"Filter defferent categories",variant:"primary"}},e._l(this.groups,(function(t){return i("div",{key:t},[i("b-dropdown-item",{nativeOn:{"!click":function(e){e.stopPropagation()}}},[i("b-form-checkbox",{staticStyle:{display:"inline"},on:{change:function(i){return e.checkGroup(i,t)}},model:{value:t.selected,callback:function(i){e.$set(t,"selected",i)},expression:"group.selected"}},[e._v(e._s(t.group_name))]),i("img",{staticStyle:{display:"inline","margin-left":"5px"},attrs:{src:e.getImageURL(t.group_name),alt:"",width:"30",height:"30"}})],1)],1)})),0)},a=[],s={data(){return{groups:this.getGroupes(),items_by_groups:JSON.parse(localStorage.getItem("items")).map(e=>({...e,selected:!1})).map(e=>({...e,given_value:0}))}},methods:{getImageURL(e){return i("9e01")("./"+e+".png")},getGroupes(){let e=[],t=JSON.parse(localStorage.getItem("items"));return t.forEach(t=>{e.some(e=>e.group_name==t.item_group)||e.push({group_name:t.item_group,selected:!0})}),e},checkGroup(e,t){if(e)this.items_by_groups.forEach(e=>{e.item_group==t.group_name&&this.$parent.items.push(e)});else{let e=[];this.$parent.items.forEach(i=>{console.log(i.item_name),i.item_group==t.group_name&&(this.items_by_groups.forEach(e=>{e.item_name==i.item_name&&(e.selected=i.selected,e.given_value=i.given_value)}),e.push(i.item_name))}),e.forEach(e=>{this.$parent.items.splice(this.$parent.items.map((function(e){return e.item_name})).indexOf(e),1)})}}}},n=s,o=i("2877"),l=Object(o["a"])(n,r,a,!1,null,null,null);t["a"]=l.exports},b7af:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticStyle:{"font-family":"'Courier New', monospace","text-align":"center"}},[e._v("Building our city")]),r("div",{staticClass:"row"},[r("div",{staticClass:"column1"},[r("apexchart",{attrs:{type:"pie",width:"300",options:e.chartOptions,series:e.series[0].data}}),r("p",{staticStyle:{position:"relative",left:"5%"}},[r("b",[e._v("Money spent:")]),e._v(" "+e._s(e.currSum.toLocaleString({style:"currency"}))+" "),r("br"),r("br"),r("span",{ref:"moneyLabel"},[r("b",[e._v("Budget left:")]),e._v(" "+e._s((e.budget-e.currSum).toLocaleString({style:"currency"})))])]),r("div",{staticStyle:{"text-align":"center",position:"absolute","border-radius":"25px",border:"3px solid #555","background-color":"lightblue",width:"250px","margin-left":"10px","margin-top":"40px",padding:"10px"}},[e._m(0),r("br"),r("a",[e._v(" You need to distribute "+e._s(e.budget.toLocaleString({style:"currency"}))+" pounds among the projects. The more money you assign to a project, the more important it is to build.")]),r("br"),r("br"),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("instructions_modal")}}},[e._v("Show instructions")])],1)],1),r("div",{staticClass:"column2"},[r("filter-group"),r("b-table",{ref:"selectableTable",attrs:{"sticky-header":"500px",striped:"",hover:"","table-variant":"light","head-variant":"dark",items:e.items,fields:e.fields,responsive:"sm"},on:{"row-hovered":e.rowHovered,"row-unhovered":e.rowUnHovered},scopedSlots:e._u([{key:"cell(arrow)",fn:function(e){return[r("img",{staticStyle:{cursor:"pointer"},attrs:{src:i("c5d4"),width:"20",height:"10"},on:{click:e.toggleDetails}})]}},{key:"cell(group)",fn:function(t){return[r("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.$parent.getImageURL(t.item.item_group),alt:"",width:"30",height:"30",title:t.item.item_group}})]}},{key:"cell(range)",fn:function(t){return[r("b-form-input",{attrs:{type:"range",min:"0",max:"500000",step:"1000"},on:{change:function(i){return e.calc(t)}},model:{value:t.item.given_value,callback:function(i){e.$set(t.item,"given_value",i)},expression:"row.item.given_value"}})]}},{key:"row-details",fn:function(t){return[r("b-card",[e._v(" "+e._s(t.item.item_name)+" ")])]}}])}),e.goodSum?e._e():r("b-alert",{staticStyle:{"text-align":"center"},attrs:{show:"",variant:"danger"}},[e._v("Please make sure the values add to "+e._s(e.budget.toLocaleString({style:"currency"}))+" ")]),r("div",{staticStyle:{float:"right"}},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.resetTable}},[e._v("reset")]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.normalize}},[e._v("Normalize")]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1),r("div",{staticClass:"column3"},[r("Map",{ref:"map"})],1)])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("u",[i("b",[e._v(" What you need to do")])])}],s=i("1321"),n=i.n(s),o=i("a0be"),l=i("b13f"),c={components:{Map:o["a"],apexchart:n.a,FilterGroup:l["a"]},data(){return{currSum:0,budget:5e5,goodSum:!0,items:JSON.parse(localStorage.getItem("items")).map(e=>({...e,given_value:0})),fields:[{key:"arrow",label:""},{key:"group",label:""},{key:"item_name",label:"Item",sortable:!0,class:"text-center"},{key:"range",label:""},{key:"given_value",label:"value",formatter:(e,t,i)=>i.given_value.toLocaleString({style:"currency"})}],chartOptions:{dataLabels:{enabled:!1},labels:[],legend:{show:!1}},series:[{data:[100,0]}]}},computed:{},methods:{calc(e){let t=[];this.currSum=0,this.items.forEach(e=>{this.currSum+=parseInt(e.given_value)}),this.items.forEach(e=>{t.push(Math.round(e.given_value/this.currSum*this.budget))}),this.currSum>this.budget?this.$refs.moneyLabel.style.color="red":this.$refs.moneyLabel.style.color="black",this.chartOptions.labels=this.items.map(e=>e.item_name),this.chartOptions={dataLabels:{enabled:!1},labels:this.items.map(e=>e.item_name),legend:{show:!1,position:"bottom",horizontalAlign:"left"}},this.series=[{data:t}]},rowHovered(e){this.$refs.map.$refs[e.item_name][0].style.opacity=1},rowUnHovered(e,t){0==e.given_value&&(this.$refs.map.$refs[e.item_name][0].style.opacity=.3)},normalize(){this.currSum!=this.budget&&this.currSum>0&&this.currSum!=this.budget&&this.items.forEach(e=>{e.given_value=Math.round(e.given_value/this.currSum*this.budget)}),this.currSum=this.budget,this.goodSum=!0,this.$refs.moneyLabel.style.color="black"},resetTable(){this.items.forEach(e=>{e.given_value=0,this.$refs.map.$refs[e.item_name][0].style.opacity=.3}),this.chartOptions={dataLabels:{enabled:!1},labels:this.items.map(e=>e.item_name),legend:{show:!1,position:"bottom",horizontalAlign:"left"}},this.series=[{data:[100,0]}],this.currSum=0,this.$refs.moneyLabel.style.color="black"},submit(){if(this.currSum!=this.budget)return void(this.goodSum=!1);let e=(new Date).getTime();localStorage.setItem("budgeting_finish",JSON.stringify(e));let t=[];this.items.forEach(e=>{t.push({item_id:e.item_id,item_name:e.item_name,item_value:e.given_value,item_price:e.item_value})}),localStorage.setItem("final_items",JSON.stringify(t)),this.$router.push("/Consistency")}}},u=c,m=(i("2ea2"),i("2877")),p=Object(m["a"])(u,r,a,!1,null,null,null);t["default"]=p.exports},b89a:function(e,t,i){e.exports=i.p+"img/chefs.c3716bce.jpg"},ce79:function(e,t,i){e.exports=i.p+"img/dog_park.b7de5b3d.jpg"},ea35:function(e,t,i){},ed46:function(e,t,i){e.exports=i.p+"img/music.300cfed6.jpg"}}]);
//# sourceMappingURL=chunk-761da1be.e78c2d40.js.map