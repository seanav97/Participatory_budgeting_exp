(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfd68574"],{2727:function(e,t,i){"use strict";var o=i("5963"),a=i.n(o);a.a},3320:function(e,t,i){e.exports=i.p+"img/ranking_value_money_example.1b39b61f.gif"},"3ffc":function(e,t,i){"use strict";var o=i("b242"),a=i.n(o);a.a},5012:function(e,t,i){e.exports=i.p+"img/ranking_value_example.5e4e8bda.gif"},5490:function(e,t,i){"use strict";var o=i("a6b6"),a=i.n(o);a.a},5963:function(e,t,i){},a0be:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"map",staticStyle:{"margin-left":"1%",width:"600px",height:"600px",position:"relative"},attrs:{id:"map"}},[i("transition",{attrs:{name:"fade",appear:""}},[i("img",{ref:"homeImage",attrs:{src:e.getImageURL("userHome"),height:"45",width:"65"}})]),e._l(this.our_items,(function(t){return i("div",{key:t},[1==t.coords.length?i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.item_group),height:e.image_size,width:e.image_size,title:t.item_name}}):i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.item_group),height:e.image_size/1.5,width:e.image_size/1.5,title:t.item_name}})])}))],2)},a=[],r={data(){return{url:"../assets/userHome.png",our_items:this.getAllItems(),image_size:"50",home:[{x:10,y:20},{x:60,y:50},{x:40,y:30},{x:20,y:80}]}},mounted(){this.drawImages(),console.log(this.$refs)},methods:{getImageURL(e){return i("9e01")("./"+e+".png")},drawImages(){let e=this.home[Math.floor(Math.random()*this.home.length)];console.log(e),this.$refs.homeImage.style.position="relative",this.$refs.homeImage.style.left=e.x+"%",this.$refs.homeImage.style.top=e.y+"%";let t=0;this.our_items.forEach(e=>{1!=this.$refs[e.item_name].length&&3!=t||(t=0),this.$refs[e.item_name][t].style.position="absolute",this.$refs[e.item_name][t].style.left=e.x_coord.toString()+"%",this.$refs[e.item_name][t].style.top=e.y_coord.toString()+"%",this.$refs[e.item_name][t].style.opacity=.3,t++})},getAllItems(){let e=JSON.parse(localStorage.getItem("items")),t=[];return e.forEach(e=>{let i=e.coords.split("#");i.forEach(o=>{t.push({item_name:e.item_name,item_group:e.item_group,x_coord:o.split(",")[0],y_coord:o.split(",")[1],coords:i})})}),t},changeOpacity(e,t){let i=this.$refs[e];i.forEach(e=>{e.style.opacity=t})}}},n=r,s=(i("5490"),i("2877")),l=Object(s["a"])(n,o,a,!1,null,null,null);t["a"]=l.exports},a6b6:function(e,t,i){},accb:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("h1",{staticStyle:{"font-family":"'Courier New', monospace","text-align":"center"}},[e._v("Building our city")]),i("div",{staticClass:"row"},[i("div",{staticClass:"column1"},[i("vue-ellipse-progress",{staticStyle:{"margin-left":"20px"},attrs:{progress:e.tasksDonePercent,"legend-value":e.numberSelected,color:"blue",emptyColor:"#8ec5fc",size:250,thickness:10,emptyThickness:"10%",lineMode:"in 10",legend:!0,dash:"strict 5 0.05",animation:"reverse 700 400",noData:!1,loading:!1,half:!1,fontSize:e.fontSize,fontColor:e.fontColor},scopedSlots:e._u([{key:"legend-value",fn:function(){return[i("span",{ref:"moneyLabel",attrs:{slot:"value"},slot:"value"})]},proxy:!0},{key:"legend-caption",fn:function(){return[i("p",{attrs:{slot:"legend-caption"},slot:"legend-caption"},[e._v("selected")])]},proxy:!0}])}),i("div",{staticStyle:{"text-align":"center",position:"absolute","border-radius":"25px",border:"3px solid #555","background-color":"lightblue",width:"250px","margin-left":"10px","margin-top":"40px",padding:"10px"}},[e._m(0),i("br"),i("a",[e._v(" Select each of the following projects ONLY if the answer to the following question is YES: If 100 points are divided among the projects based on their importance, should this project get AT LEAST 10 points? Use your best judgement.")]),i("br"),i("br"),i("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("instructions_modal1")}}},[e._v("Show instructions")])],1),i("b-modal",{attrs:{size:"lg",id:"instructions_modal1","hide-footer":""}},[i("instructions"),i("b-button",{attrs:{variant:"outline-primary",block:""},on:{click:function(t){return e.$bvModal.hide("instructions_modal")}}},[e._v("Close")])],1)],1),i("div",{staticClass:"column2"},[i("filter-group"),i("b-table",{ref:"selectableTable",staticClass:"table-sm",attrs:{striped:"",hover:"","table-variant":"light","head-variant":"dark",items:e.items,fields:e.fields,"select-mode":e.selectMode,responsive:"sm"},on:{"row-clicked":e.details,"row-hovered":e.rowHovered,"row-unhovered":e.rowUnHovered},scopedSlots:e._u([{key:"cell(group)",fn:function(t){return[i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.$parent.getImageURL(t.item.item_group),alt:"",width:"30",height:"30",title:t.item.item_group}})]}},{key:"cell(select)",fn:function(t){return[i("b-form-checkbox",{attrs:{size:"lg"},on:{change:function(i){return e.update(i,t)}},model:{value:t.item.selected,callback:function(i){e.$set(t.item,"selected",i)},expression:"row.item.selected"}})]}},{key:"row-details",fn:function(t){return[i("b-card",[e._v(" "+e._s(t.item.item_desc)+" ")])]}}])}),e.somethingSelected?e._e():i("b-alert",{staticStyle:{"text-align":"center"},attrs:{show:"",variant:"danger"}},[e._v("You must select some projects.")]),i("div",{staticStyle:{float:"right"}},[i("b-button",{staticStyle:{width:"70px"},attrs:{variant:"outline-primary"},on:{click:e.resetTable}},[e._v("Reset")]),i("b-button",{staticStyle:{"margin-left":"10px",width:"70px"},attrs:{variant:"outline-primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1),i("div",{staticClass:"column3"},[i("Map",{ref:"map"})],1)])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("u",[i("b",[e._v(" What you need to do")])])}],r=i("b13f"),n=i("a0be"),s=i("f104"),l={components:{Map:n["a"],FilterGroup:r["a"],Instructions:s["a"]},data(){return{budget:5e5,numberSelected:0,somethingSelected:!0,items:JSON.parse(localStorage.getItem("items")).map(e=>({...e,_showDetails:!1})),fields:[{key:"arrow",label:""},{key:"group",label:"Category"},{key:"item_name",label:"Project",sortable:!0,class:"text-center"},{key:"info",label:""},{key:"select",label:"",class:"text-center"}],fontSize:"50px",fontColor:"black"}},computed:{tasksDonePercent(){return 100*this.numberSelected/this.items.length}},methods:{details(e,t,i){e._showDetails=!e._showDetails},update(e,t){this.budget;e?(this.$refs.map.changeOpacity(t.item.item_name,1),this.numberSelected++,this.somethingSelected=!0):(this.$refs.map.changeOpacity(t.item.item_name,.3),this.numberSelected--),this.series=[{data:[this.budget-this.money_spent,this.money_spent]}]},rowHovered(e){this.$refs.map.changeOpacity(e.item_name,1)},rowUnHovered(e,t){let i=this.items.filter(t=>t.item_name==e.item_name)[0].selected;i||this.$refs.map.changeOpacity(e.item_name,.3)},resetTable(){this.$refs.selectableTable.clearSelected(),this.selected=[],this.items.forEach(e=>{e.selected=!1,this.$refs.map.changeOpacity(e.item_name,.3)}),this.numberSelected=0},async submit(){if(!confirm("Once you press OK you can't go back and change your choices"))return;let e=(new Date).getTime(),t=[],i=0;this.items.forEach(e=>{e.selected?(t.push({item_id:e.item_id,item_name:e.item_name,item_value:1,item_price:e.item_value}),i++):t.push({item_id:e.item_id,item_name:e.item_name,item_value:0,item_price:e.item_value})}),0!=i?(localStorage.setItem("budgeting_finish",JSON.stringify(e)),localStorage.setItem("final_items",JSON.stringify(t)),await this.$parent.addExperiment(),this.$router.push("/Consistency")):this.somethingSelected=!1}}},c=l,u=(i("3ffc"),i("2877")),m=Object(u["a"])(c,o,a,!1,null,null,null);t["default"]=m.exports},b13f:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-dropdown",{staticClass:"m-2",attrs:{text:"Filter categories",variant:"primary"}},[i("b-form-checkbox",{staticStyle:{display:"inline","margin-left":"5px"},on:{change:function(t){return e.checkAll(t)}},model:{value:e.select_all,callback:function(t){e.select_all=t},expression:"select_all"}},[e._v("Select all")]),i("hr"),e._l(this.groups,(function(t){return i("div",{key:t},[i("b-dropdown-item",{nativeOn:{"!click":function(e){e.stopPropagation()}}},[i("b-form-checkbox",{staticStyle:{display:"inline"},on:{change:function(i){return e.checkGroup(i,t)}},model:{value:t.selected,callback:function(i){e.$set(t,"selected",i)},expression:"group.selected"}},[e._v(e._s(t.group_name))]),i("img",{staticStyle:{display:"inline","margin-left":"5px"},attrs:{src:e.getImageURL(t.group_name),alt:"",width:"30",height:"30"}})],1)],1)}))],2),e._v(" (click on a project to show more details) ")],1)},a=[],r={data(){return{groups:this.getGroupes(),items_by_groups:JSON.parse(localStorage.getItem("items")).map(e=>({...e,selected:!1})).map(e=>({...e,given_value:0,_showDetails:!1})),select_all:!0}},methods:{getImageURL(e){return i("9e01")("./"+e+".png")},getGroupes(){let e=[],t=JSON.parse(localStorage.getItem("items"));return t.forEach(t=>{e.some(e=>e.group_name==t.item_group)||e.push({group_name:t.item_group,selected:!0})}),e},checkGroup(e,t){if(e)this.items_by_groups.forEach(e=>{e.item_group==t.group_name&&this.$parent.items.push(e)});else{let e=[];this.$parent.items.forEach(i=>{console.log(i.item_name),i.item_group==t.group_name&&(this.items_by_groups.forEach(e=>{e.item_name==i.item_name&&(e.selected=i.selected,e.given_value=i.given_value)}),e.push(i.item_name))}),e.forEach(e=>{this.$parent.items.splice(this.$parent.items.map((function(e){return e.item_name})).indexOf(e),1)}),this.select_all=!1}},checkAll(e){this.groups.forEach(t=>{(e&&!t.selected||!e&&t.selected)&&(this.checkGroup(e,t),t.selected=e)})}}},n=r,s=(i("baf0"),i("2877")),l=Object(s["a"])(n,o,a,!1,null,null,null);t["a"]=l.exports},b242:function(e,t,i){},baf0:function(e,t,i){"use strict";var o=i("edad"),a=i.n(o);a.a},edad:function(e,t,i){},f104:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fieldset",[i("h2",{staticStyle:{"text-align":"center"}},[e._v("Step 2: Instructions")]),i("br"),i("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[i("h3",[e._v("The task:")]),e._v(" You are a resident in Utopia City and the city council has decided to spend a portion of the city budget on improving the residents’ quality of life. Several types of infrastructure upgrades, located across the city, have been proposed."),i("br"),e._v(" Unfortunately, the budget is not sufficient to implement all the suggestions, so you have the opportunity to help decide which projects should be prioritized. ")]),i("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[i("insturcionsTodo",{ref:"todo"})],1),i("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[i("h3",[e._v("Your payment:")]),i("ul",[i("li",[e._v("50 cent payment for the task contingent on passing a quiz and doing the task. ")]),i("li",[e._v("50 cent bonus for correctly answering a consistency test after submitting the task.")])])])],1)},a=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",["Utilities"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You will be asked to distribute 100 points among 10 projects. The more points you assign to an item, the more important you think the item is to your city. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. The projects that Alex finds most useful (in decreasing order of importance) are: "),e._m(0),e._v(" For example, in the following image, you can see a "),o("b",[e._v("possible rating")]),e._v(" by Alex: "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("498e"),width:"70%"}}),o("br"),o("br"),e._v(" Your ratings tell us how much you like groups of items in addition to how much you like individual items. For example, according to the ratings above, Alex prefers the bundle of "),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" You can use the Normalize button to automatically adjust your values to add up to 100 while keeping the relative importance of items intact. You will only be able to press the SUBMIT button if the values add up to 100. ")]):"Knapsack"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to select which projects you would like to see funded given a budget limit of $500,000. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using for an imaginary citizen called Alex. The projects that Alex prefers are: "),e._m(1),e._v(" On the left you can see the total cost of the selected projects. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5042"),width:"90%"}}),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" Alex can no longer add another project even through he has not exhausted his entire budget. ")]):"k_approval"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to select up to 5 projects from a list of 10 projects according to your best judgment. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. "),o("br"),e._v(" The projects that Alex finds most useful are: "),e._m(2),e._v(" In the following image, you can see the choices of Alex and the number of projects selected. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5fc4"),width:"90%"}})]):"Ranking_value"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to rank the items from the most important to the least important according to your best judgement. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. "),o("br"),e._v(" Rank the items from MOST important (top of the list) to the LEAST important (bottom of the list). "),o("br"),e._v(" CLICK and DRAG on the item to change its ranking in the list. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5012"),width:"60%"}})]):"Threshold"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" Select each of the following projects ONLY if the answer to the following question is YES. "),o("br"),e._v(" If 100 points are divided among the projects based on their importance, should this project get AT LEAST 10 points? "),o("br"),e._v(" Use your best judgement. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. "),o("br"),e._v(" The projects that Alex finds worth at least 10 out of 100 points are: "),e._m(3),e._v(" In the following image, you can see the choices of Alex and the number of selected proejcts. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("a304"),width:"90%"}})]):"Ranking_value_money"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to rank the projects by “value for money”, which measures the project's importance to you relative to the cost of the project. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. "),o("br"),e._v(" The “value for money” for a project is computed as the utility of the project divided by cost. "),o("br"),e._v(' For example: if the project "Dog Park" costs $250,000 and you utility for it is 250, then the "value for money" for it will be 1000. '),o("br"),e._v(" Rank the projects from greatest “value for money” (top of the list) to least “value for money” (bottom of the list). "),o("br"),e._v(" CLICK and DRAG on the project to change its ranking in the list. "),o("br"),e._v(" You need to sort the list in DECREASING order of “value for money” (from the highest value to the lowest value). "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("3320"),width:"60%"}}),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" The interface you will use won’t include the columns “utility for Alex” and “Value for money”. You need to think independently about what is the utility for each project and compute the “value for money” for each project. ")]):o("div",[e._v(" no todo")])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laudry Access in Public Schools")]),i("li",[e._v("Security Cameras")]),i("li",[e._v("The Sustainable Energy Pilot")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("24H public toilet")]),i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("Let's Rest: Picnic Tables & Benches for Our Parks")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("24H public toilet")]),i("li",[e._v("Dog Park")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("24H public toilet")]),i("li",[e._v("Dog Park")])])}],s={data(){return{voting_method:localStorage.getItem("voting_method")}}},l=s,c=i("2877"),u=Object(c["a"])(l,r,n,!1,null,null,null),m=u.exports,h={components:{insturcionsTodo:m}},d=h,p=(i("2727"),Object(c["a"])(d,o,a,!1,null,null,null));t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-dfd68574.da267d9c.js.map