(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfd68574"],{2727:function(e,t,i){"use strict";var o=i("5963"),r=i.n(o);r.a},3320:function(e,t,i){e.exports=i.p+"img/ranking_value_money_example.1b39b61f.gif"},"3ffc":function(e,t,i){"use strict";var o=i("b242"),r=i.n(o);r.a},5012:function(e,t,i){e.exports=i.p+"img/ranking_value_example.5e4e8bda.gif"},5490:function(e,t,i){"use strict";var o=i("a6b6"),r=i.n(o);r.a},5963:function(e,t,i){},a0be:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"map",staticStyle:{"margin-left":"1%",width:"600px",height:"600px",position:"relative"},attrs:{id:"map"}},[i("transition",{attrs:{name:"fade",appear:""}},[i("img",{ref:"homeImage",attrs:{src:e.getImageURL("userHome"),height:"45",width:"65"}})]),e._l(this.our_items,(function(t){return i("div",{key:t},[1==t.coords.length?i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.item_group),height:e.image_size,width:e.image_size,title:t.item_name}}):i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.item_group),height:e.image_size/1.5,width:e.image_size/1.5,title:t.item_name}})])}))],2)},r=[],a={data(){return{url:"../assets/userHome.png",our_items:this.getAllItems(),image_size:"50",home:[{x:10,y:20},{x:60,y:50},{x:40,y:30},{x:20,y:80}]}},mounted(){this.drawImages(),console.log(this.$refs)},methods:{getImageURL(e){return i("9e01")("./"+e+".png")},drawImages(){let e=this.home[Math.floor(Math.random()*this.home.length)];console.log(e),this.$refs.homeImage.style.position="relative",this.$refs.homeImage.style.left=e.x+"%",this.$refs.homeImage.style.top=e.y+"%";let t=0;this.our_items.forEach(e=>{1!=this.$refs[e.item_name].length&&3!=t||(t=0),this.$refs[e.item_name][t].style.position="absolute",this.$refs[e.item_name][t].style.left=e.x_coord.toString()+"%",this.$refs[e.item_name][t].style.top=e.y_coord.toString()+"%",this.$refs[e.item_name][t].style.opacity=.3,t++})},getAllItems(){let e=JSON.parse(localStorage.getItem("items")),t=[];return e.forEach(e=>{let i=e.coords.split("#");i.forEach(o=>{t.push({item_name:e.item_name,item_group:e.item_group,x_coord:o.split(",")[0],y_coord:o.split(",")[1],coords:i})})}),t},changeOpacity(e,t){let i=this.$refs[e];i.forEach(e=>{e.style.opacity=t})}}},n=a,s=(i("5490"),i("2877")),l=Object(s["a"])(n,o,r,!1,null,null,null);t["a"]=l.exports},a6b6:function(e,t,i){},accb:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",{staticStyle:{"font-family":"'Courier New', monospace","text-align":"center"}},[e._v("Building our city")]),o("div",{staticClass:"row"},[o("div",{staticClass:"column1"},[o("vue-ellipse-progress",{staticStyle:{"margin-left":"20px"},attrs:{progress:e.tasksDonePercent,"legend-value":e.numberSelected,color:"blue",emptyColor:"#8ec5fc",size:250,thickness:10,emptyThickness:"10%",lineMode:"in 10",legend:!0,dash:"strict 5 0.05",animation:"reverse 700 400",noData:!1,loading:!1,half:!1,fontSize:e.fontSize,fontColor:e.fontColor},scopedSlots:e._u([{key:"legend-value",fn:function(){return[o("span",{ref:"moneyLabel",attrs:{slot:"value"},slot:"value"})]},proxy:!0},{key:"legend-caption",fn:function(){return[o("p",{attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("selected")])]},proxy:!0}])}),o("div",{staticStyle:{"text-align":"center",position:"absolute","border-radius":"25px",border:"3px solid #555","background-color":"lightblue",width:"250px","margin-left":"10px","margin-top":"40px",padding:"10px"}},[e._m(0),o("br"),o("a",[e._v(" Select each of the following projects ONLY if the answer to the following question is YES: If "+e._s(e.budget.toLocaleString({style:"currency"}))+" pounds are divided among the projects based on their importance, should this project get AT LEAST "+e._s((e.budget/10).toLocaleString({style:"currency"}))+" pounds? Use your best judgement.")]),o("br"),o("br"),o("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("instructions_modal1")}}},[e._v("Show instructions")])],1),o("b-modal",{attrs:{size:"lg",id:"instructions_modal1","hide-footer":""}},[o("instructions"),o("b-button",{attrs:{variant:"outline-primary",block:""},on:{click:function(t){return e.$bvModal.hide("instructions_modal")}}},[e._v("Close")])],1)],1),o("div",{staticClass:"column2"},[o("filter-group"),o("b-table",{ref:"selectableTable",attrs:{"sticky-header":"500px",striped:"",hover:"","table-variant":"light","head-variant":"dark",items:e.items,fields:e.fields,"select-mode":e.selectMode,responsive:"sm"},on:{"row-hovered":e.rowHovered,"row-unhovered":e.rowUnHovered},scopedSlots:e._u([{key:"cell(arrow)",fn:function(e){return[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:i("c5d4"),width:"20",height:"10"},on:{click:e.toggleDetails}})]}},{key:"cell(group)",fn:function(t){return[o("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.$parent.getImageURL(t.item.item_group),alt:"",width:"30",height:"30",title:t.item.item_group}})]}},{key:"cell(select)",fn:function(t){return[o("b-form-checkbox",{attrs:{size:"lg"},on:{change:function(i){return e.update(i,t)}},model:{value:t.item.selected,callback:function(i){e.$set(t.item,"selected",i)},expression:"row.item.selected"}})]}},{key:"row-details",fn:function(t){return[o("b-card",[e._v(" "+e._s(t.item.item_desc)+" ")])]}}])}),e.somethingSelected?e._e():o("b-alert",{staticStyle:{"text-align":"center"},attrs:{show:"",variant:"danger"}},[e._v("You must select some projects.")]),o("div",{staticStyle:{float:"right"}},[o("b-button",{attrs:{variant:"outline-primary"},on:{click:e.resetTable}},[e._v("reset")]),o("b-button",{attrs:{variant:"outline-primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1),o("div",{staticClass:"column3"},[o("Map",{ref:"map"})],1)])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("u",[i("b",[e._v(" What you need to do")])])}],a=i("b13f"),n=i("a0be"),s=i("f104"),l={components:{Map:n["a"],FilterGroup:a["a"],Instructions:s["a"]},data(){return{budget:5e5,numberSelected:0,somethingSelected:!0,items:JSON.parse(localStorage.getItem("items")),fields:[{key:"arrow",label:""},{key:"group",label:""},{key:"item_name",label:"Item",sortable:!0,class:"text-center"},{key:"info",label:""},{key:"select",label:"",class:"text-center"}],fontSize:"50px",fontColor:"black"}},computed:{tasksDonePercent(){return 100*this.numberSelected/this.items.length}},methods:{update(e,t){this.budget;e?(this.$refs.map.changeOpacity(t.item.item_name,1),this.numberSelected++,this.somethingSelected=!0):(this.$refs.map.changeOpacity(t.item.item_name,.3),this.numberSelected--),this.series=[{data:[this.budget-this.money_spent,this.money_spent]}]},rowHovered(e){this.$refs.map.changeOpacity(e.item_name,1)},rowUnHovered(e,t){let i=this.items.filter(t=>t.item_name==e.item_name)[0].selected;i||this.$refs.map.changeOpacity(e.item_name,.3)},resetTable(){this.$refs.selectableTable.clearSelected(),this.selected=[],this.items.forEach(e=>{e.selected=!1,this.$refs.map.changeOpacity(e.item_name,.3)}),this.numberSelected=0},submit(){let e=(new Date).getTime(),t=[],i=0;this.items.forEach(e=>{e.selected?(t.push({item_id:e.item_id,item_name:e.item_name,item_value:1,item_price:e.item_value}),i++):t.push({item_id:e.item_id,item_name:e.item_name,item_value:0,item_price:e.item_value})}),0!=i?(localStorage.setItem("budgeting_finish",JSON.stringify(e)),localStorage.setItem("final_items",JSON.stringify(t)),this.$router.push("/Consistency")):this.somethingSelected=!1}}},c=l,u=(i("3ffc"),i("2877")),m=Object(u["a"])(c,o,r,!1,null,null,null);t["default"]=m.exports},b13f:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-dropdown",{staticClass:"m-2",attrs:{text:"Filter different categories",variant:"primary"}},[i("b-form-checkbox",{staticStyle:{display:"inline","margin-left":"5px"},on:{change:function(t){return e.checkAll(t)}},model:{value:e.select_all,callback:function(t){e.select_all=t},expression:"select_all"}},[e._v("Select all")]),i("hr"),e._l(this.groups,(function(t){return i("div",{key:t},[i("b-dropdown-item",{nativeOn:{"!click":function(e){e.stopPropagation()}}},[i("b-form-checkbox",{staticStyle:{display:"inline"},on:{change:function(i){return e.checkGroup(i,t)}},model:{value:t.selected,callback:function(i){e.$set(t,"selected",i)},expression:"group.selected"}},[e._v(e._s(t.group_name))]),i("img",{staticStyle:{display:"inline","margin-left":"5px"},attrs:{src:e.getImageURL(t.group_name),alt:"",width:"30",height:"30"}})],1)],1)}))],2)},r=[],a={data(){return{groups:this.getGroupes(),items_by_groups:JSON.parse(localStorage.getItem("items")).map(e=>({...e,selected:!1})).map(e=>({...e,given_value:0})),select_all:!0}},methods:{getImageURL(e){return i("9e01")("./"+e+".png")},getGroupes(){let e=[],t=JSON.parse(localStorage.getItem("items"));return t.forEach(t=>{e.some(e=>e.group_name==t.item_group)||e.push({group_name:t.item_group,selected:!0})}),e},checkGroup(e,t){if(e)this.items_by_groups.forEach(e=>{e.item_group==t.group_name&&this.$parent.items.push(e)});else{let e=[];this.$parent.items.forEach(i=>{console.log(i.item_name),i.item_group==t.group_name&&(this.items_by_groups.forEach(e=>{e.item_name==i.item_name&&(e.selected=i.selected,e.given_value=i.given_value)}),e.push(i.item_name))}),e.forEach(e=>{this.$parent.items.splice(this.$parent.items.map((function(e){return e.item_name})).indexOf(e),1)}),this.select_all=!1}},checkAll(e){this.groups.forEach(t=>{(e&&!t.selected||!e&&t.selected)&&(this.checkGroup(e,t),t.selected=e)})}}},n=a,s=(i("baf0"),i("2877")),l=Object(s["a"])(n,o,r,!1,null,null,null);t["a"]=l.exports},b242:function(e,t,i){},baf0:function(e,t,i){"use strict";var o=i("edad"),r=i.n(o);r.a},edad:function(e,t,i){},f104:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("fieldset",[o("h2",{staticStyle:{"text-align":"center"}},[e._v("Step 2: Instructions")]),o("br"),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("The Task:")]),o("div",{staticStyle:{float:"right","margin-left":"20px"}},[o("img",{attrs:{src:i("f744"),width:"350px"}})]),e._v(" You are a resident in imagine-city and the city council decided they want to improve the citizens life quality. To do so, they suggest a variety of different types of projects which will make the citizens more happy. "),o("br"),o("br"),e._v(" In order to do so, they published a map of the city with projects in different locations to all citizens. However, they don't have enough funds to implement all of the projects, therefore, you will need to help choose which projects should be funded. ")]),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("insturcionsTodo")],1),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("Your payment:")]),o("ul",[o("li",[e._v("20 cent payment for the task contingent on passing a quiz and doing the task. ")]),o("li",[e._v("10 cent bonus for correctly answering a survey after submitting the task.")]),o("li",[e._v("10 cent bonus for answering a feedback survey about the experiment.")])])])],1)},r=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",["Utilities"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You will be asked to distribute 100 points among 10 projects. The more points you assign to an item, the more important you think the item is to your city. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. The projects that John finds most useful (in decreasing order of importance) are: "),e._m(0),e._v(" For example, in the following image, you can see a "),o("b",[e._v("possible rating")]),e._v(" by John: "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("498e"),width:"70%"}}),o("br"),o("br"),e._v(" Your ratings tell us how much you like groups of items in addition to how much you like individual items. For example, according to the ratings above, John prefers the bundle of "),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" You can use the Normalize button to automatically adjust your values to add up to 100 while keeping the relative importance of items intact. You will only be able to press the SUBMIT button if the values add up to 100. ")]):"Knapsack"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to select which items to take based on your budget limit of 500,000 dollars. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. The projects that John finds most useful are: "),e._m(1),e._v(" In the left area, you can also see how much budget John already used. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5042"),width:"90%"}}),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" John can no longer add another project even through he has not exhausted his entire budget. ")]):"k_approval"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to select up to 5 projects from a list of 10 projects according to your best judgment. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. "),o("br"),e._v(" The projects that John finds most useful are: "),e._m(2),e._v(" In the following image, you can see the choices of John and the number of projects selected. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5fc4"),width:"90%"}})]):"Ranking_value"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to rank the items from the most important to the least important according to your best judgement. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. "),o("br"),e._v(" Rank the items from MOST important (top of the list) to the LEAST important (bottom of the list). "),o("br"),e._v(" CLICK and DRAG on the item to change its ranking in the list. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5012"),width:"60%"}})]):"Threshold"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" Select each of the following projects ONLY if the answer to the following question is YES. "),o("br"),e._v(" If 100 points are divided among the projects based on their importance, should this project get AT LEAST 10 points? "),o("br"),e._v(" Use your best judgement. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. "),o("br"),e._v(" The projects that John finds worth at least 10 out of 100 points are: "),e._m(3),e._v(" In the following image, you can see the choices of John and the number of selected proejcts. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("a304"),width:"90%"}})]):"Ranking_value_money"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to rank the projects by “value for money”, which measures the project's importance to you relative to the cost of the project. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. "),o("br"),e._v(" The “value for money” for a project is computed as the utility of the project divided by cost. "),o("br"),e._v(" Rank the projects from greatest “value for money” (top of the list) to least “value for money” (bottom of the list). "),o("br"),e._v(" CLICK and DRAG on the project to change its ranking in the list. "),o("br"),e._v(" You need to sort the list in DECREASING order of “value for money” (from the highest value to the lowest value). "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("3320"),width:"60%"}}),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" The interface you will use won’t include the columns “utility for John” and “Value for money”. You need to think independently about what is the utility for each project and compute the “value for money” for each project. Feel free to use a calculator or paper / pencil. ")]):o("div",[e._v(" no todo")])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laudry Access in Public Schools")]),i("li",[e._v("Security Cameras")]),i("li",[e._v("The Sustainable Energy Pilot")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("24H public toilet")]),i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("Let's Rest: Picnic Tables & Benches for Our Parks")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("24H public toilet")]),i("li",[e._v("Dog Park")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("24H public toilet")]),i("li",[e._v("Dog Park")])])}],s={data(){return{voting_method:localStorage.getItem("voting_method")}}},l=s,c=i("2877"),u=Object(c["a"])(l,a,n,!1,null,null,null),m=u.exports,h={components:{insturcionsTodo:m}},d=h,p=(i("2727"),Object(c["a"])(d,o,r,!1,null,null,null));t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-dfd68574.f7797b66.js.map