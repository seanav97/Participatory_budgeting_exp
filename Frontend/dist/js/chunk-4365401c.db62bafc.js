(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4365401c"],{1100:function(e,t,i){e.exports=i.p+"img/background.85d5f527.jpg"},1771:function(e,t,i){var r={"./Culture & community.png":"8492","./Education.png":"6e6a","./Environment, public health & safety.png":"ecb2","./Facilities, parks & recreation.png":"23b6","./Streets, Sidewalks & Transit.png":"fa735","./Threshold_example.png":"a304","./amphitheater.png":"98bc","./approval_example.png":"5fc4","./arrow.png":"c5d4","./background.jpg":"1100","./benches.png":"1afe","./bike_repair.png":"bddc","./chefs.jpg":"b89a","./city_ams.png":"6bf3","./computers_center.png":"6b14","./dog_park.jpg":"ce79","./info.png":"9417","./knapsack_example.png":"5042","./library_furniture.png":"1803","./logo.png":"cf05","./music.jpg":"ed46","./public_toilet.png":"d5ac","./ranking_value_example.gif":"5012","./ranking_value_money_example.gif":"3320","./school_chairs.png":"2e74","./temp.png":"a23c","./userHome.png":"8d67","./utilities_example.png":"498e","./water_refill.png":"2336","./‏‏knapsack_empty_example.png":"b950","./‏‏knapsack_example.png":"3c71","./‏‏map_example.png":"f744"};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="1771"},3320:function(e,t,i){e.exports=i.p+"img/ranking_value_money_example.1b39b61f.gif"},"4ff0":function(e,t,i){"use strict";var r=i("9597"),n=i.n(r);n.a},5012:function(e,t,i){e.exports=i.p+"img/ranking_value_example.5e4e8bda.gif"},5490:function(e,t,i){"use strict";var r=i("a6b6"),n=i.n(r);n.a},9597:function(e,t,i){},a0be:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"map",staticStyle:{"margin-left":"1%"},attrs:{id:"map"}},[i("img",{ref:"homeImage",attrs:{src:e.getImageURL("userHome.png"),height:"45",width:"65"}}),e._l(this.our_items,(function(t){return i("div",{key:t},[i("img",{ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.url),height:"45",width:"65"}})])}))],2)},n=[],s={data(){return{url:"../assets/userHome.png",our_items:JSON.parse(localStorage.getItem("items"))}},mounted(){this.drawImages()},methods:{getImageURL(e){return i("1771")("./"+e)},drawImages(){this.$refs.homeImage.style.position="relative",this.$refs.homeImage.style.left="30%",this.$refs.homeImage.style.top="30%",this.our_items.forEach(e=>{this.$refs[e.item_name][0].style.position="relative",this.$refs[e.item_name][0].style.left=e.x_coord.toString()+"%",this.$refs[e.item_name][0].style.top=e.y_coord.toString()+"%",this.$refs[e.item_name][0].style.opacity=.3})}}},a=s,o=(i("5490"),i("2877")),l=Object(o["a"])(a,r,n,!1,null,null,null);t["a"]=l.exports},a6b6:function(e,t,i){},b13f:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-dropdown",{staticClass:"m-2",attrs:{text:"Filter defferent categories",variant:"primary"}},e._l(this.groups,(function(t){return i("div",{key:t},[i("b-dropdown-item",{nativeOn:{"!click":function(e){e.stopPropagation()}}},[i("b-form-checkbox",{staticStyle:{display:"inline"},on:{change:function(i){return e.checkGroup(i,t)}},model:{value:t.selected,callback:function(i){e.$set(t,"selected",i)},expression:"group.selected"}},[e._v(e._s(t.group_name))]),i("img",{staticStyle:{display:"inline","margin-left":"5px"},attrs:{src:e.getImageURL(t.group_name),alt:"",width:"30",height:"30"}})],1)],1)})),0)},n=[],s={data(){return{groups:this.getGroupes(),items_by_groups:JSON.parse(localStorage.getItem("items")).map(e=>({...e,selected:!1})).map(e=>({...e,given_value:0}))}},methods:{getImageURL(e){return i("9e01")("./"+e+".png")},getGroupes(){let e=[],t=JSON.parse(localStorage.getItem("items"));return t.forEach(t=>{e.some(e=>e.group_name==t.item_group)||e.push({group_name:t.item_group,selected:!0})}),e},checkGroup(e,t){if(e)this.items_by_groups.forEach(e=>{e.item_group==t.group_name&&this.$parent.items.push(e)});else{let e=[];this.$parent.items.forEach(i=>{console.log(i.item_name),i.item_group==t.group_name&&(this.items_by_groups.forEach(e=>{e.item_name==i.item_name&&(e.selected=i.selected,e.given_value=i.given_value)}),e.push(i.item_name))}),e.forEach(e=>{this.$parent.items.splice(this.$parent.items.map((function(e){return e.item_name})).indexOf(e),1)})}}}},a=s,o=i("2877"),l=Object(o["a"])(a,r,n,!1,null,null,null);t["a"]=l.exports},b698:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",{staticStyle:{"font-family":"'Courier New', monospace","text-align":"center"}},[e._v("Building our city")]),r("div",{staticClass:"row"},[r("div",{staticClass:"column1"},[r("vue-ellipse-progress",{staticStyle:{"margin-left":"20px"},attrs:{progress:e.tasksDonePercent,"legend-value":e.numberSelected,color:"blue",emptyColor:"#8ec5fc",size:250,thickness:10,emptyThickness:"10%",lineMode:"in 10",legend:!0,dash:"strict 5 0.05",animation:"reverse 700 400",noData:!1,loading:!1,half:!1,fontSize:e.fontSize,fontColor:e.fontColor},scopedSlots:e._u([{key:"legend-value",fn:function(){return[r("span",{ref:"moneyLabel",attrs:{slot:"value"},slot:"value"},[e._v("/5")])]},proxy:!0},{key:"legend-caption",fn:function(){return[r("p",{attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("selected")])]},proxy:!0}])}),r("div",{staticStyle:{"text-align":"center",position:"absolute","border-radius":"25px",border:"3px solid #555","background-color":"lightblue",width:"250px","margin-left":"10px","margin-top":"40px",padding:"10px"}},[e._m(0),r("br"),r("a",[e._v(" You need to select up to 5 projects from the list, according to your best judgement.")]),r("br"),r("br"),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("instructions_modal")}}},[e._v("Show instructions")])],1)],1),r("div",{staticClass:"column2"},[r("filter-group"),r("b-table",{ref:"selectableTable",attrs:{"sticky-header":"500px",striped:"",hover:"","table-variant":"light","head-variant":"dark",items:e.items,fields:e.fields,"select-mode":e.selectMode,responsive:"sm"},on:{"row-hovered":e.rowHovered,"row-unhovered":e.rowUnHovered},scopedSlots:e._u([{key:"cell(arrow)",fn:function(e){return[r("img",{staticStyle:{cursor:"pointer"},attrs:{src:i("c5d4"),width:"20",height:"10"},on:{click:e.toggleDetails}})]}},{key:"cell(group)",fn:function(t){return[r("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.$parent.getImageURL(t.item.item_group),alt:"",width:"30",height:"30",title:t.item.item_group}})]}},{key:"cell(select)",fn:function(t){return[r("b-form-checkbox",{attrs:{size:"lg"},on:{change:function(i){return e.update(i,t)}},model:{value:t.item.selected,callback:function(i){e.$set(t.item,"selected",i)},expression:"row.item.selected"}})]}},{key:"row-details",fn:function(t){return[r("b-card",[e._v(" "+e._s(t.item.item_desc)+" ")])]}}])}),e.somethingSelected?e._e():r("b-alert",{staticStyle:{"text-align":"center"},attrs:{show:"",variant:"danger"}},[e._v("You must select some projects.")]),r("div",{staticStyle:{float:"right"}},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.resetTable}},[e._v("reset")]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1),r("div",{staticClass:"column3"},[r("Map",{ref:"map"})],1)])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("u",[i("b",[e._v(" What you need to do")])])}],s=i("b13f"),a=i("a0be"),o={components:{Map:a["a"],FilterGroup:s["a"]},data(){return{numberSelected:0,somethingSelected:!0,items:JSON.parse(localStorage.getItem("items")).map(e=>({...e,selected:!1})),fields:[{key:"arrow",label:""},{key:"group",label:""},{key:"item_name",label:"Item",sortable:!0,class:"text-center"},{key:"info",label:""},{key:"select",label:"",class:"text-center"}],selectMode:"multi",fontSize:"50px",fontColor:"black"}},computed:{tasksDonePercent(){return 100*this.numberSelected/5}},methods:{update(e,t){this.budget;if(e)if(5==this.numberSelected){const e=this;setTimeout((function(){e.items.forEach(e=>{e.item_name==t.item.item_name&&(e.selected=!1)})}),5),this.fontSize="100px",this.fontColor="red",setTimeout((function(){e.fontSize="50px",e.fontColor="black"}),500)}else this.$refs.map.$refs[t.item.item_name][0].style.opacity=1,this.numberSelected++,this.somethingSelected=!0;else this.$refs.map.$refs[t.item.item_name][0].style.opacity=.3,this.numberSelected--;this.series=[{data:[this.budget-this.money_spent,this.money_spent]}]},rowHovered(e){this.$refs.map.$refs[e.item_name][0].style.opacity=1},rowUnHovered(e,t){let i=this.items.filter(t=>t.item_name==e.item_name)[0].selected;i||(this.$refs.map.$refs[e.item_name][0].style.opacity=.3)},resetTable(){this.$refs.selectableTable.clearSelected(),this.items.forEach(e=>{e.selected=!1,this.$refs.map.$refs[e.item_name][0].style.opacity=.3}),this.numberSelected=0},submit(){let e=(new Date).getTime(),t=[],i=0;this.items.forEach(e=>{e.selected?(t.push({item_id:e.item_id,item_name:e.item_name,item_value:1,item_price:e.item_value}),i++):t.push({item_id:e.item_id,item_name:e.item_name,item_value:0,item_price:e.item_value})}),0!=i?(localStorage.setItem("budgeting_finish",JSON.stringify(e)),localStorage.setItem("final_items",JSON.stringify(t)),this.$router.push("/Consistency")):this.somethingSelected=!1}}},l=o,c=(i("4ff0"),i("2877")),m=Object(c["a"])(l,r,n,!1,null,null,null);t["default"]=m.exports},b89a:function(e,t,i){e.exports=i.p+"img/chefs.c3716bce.jpg"},ce79:function(e,t,i){e.exports=i.p+"img/dog_park.b7de5b3d.jpg"},ed46:function(e,t,i){e.exports=i.p+"img/music.300cfed6.jpg"}}]);
//# sourceMappingURL=chunk-4365401c.db62bafc.js.map