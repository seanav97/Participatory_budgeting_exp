(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-257a49a8"],{"1bc1":function(e,t,i){},2727:function(e,t,i){"use strict";var o=i("5963"),a=i.n(o);a.a},"286c":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",{staticStyle:{"font-family":"'Courier New', monospace","text-align":"center"}},[e._v("Building our city")]),o("div",{staticClass:"row"},[o("div",{staticClass:"column1"},[o("div",{staticStyle:{"text-align":"center",position:"absolute","border-radius":"25px",border:"3px solid #555","background-color":"lightblue",width:"250px","margin-left":"10px","margin-top":"40px",padding:"10px"}},[e._m(0),o("br"),o("a",[e._v(" You need to rank the projects from the most important to the least important according to your best judgment.")]),o("br"),o("br"),o("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("instructions_modal")}}},[e._v("Show instructions")])],1),o("b-modal",{attrs:{size:"lg",id:"instructions_modal","hide-footer":""}},[o("instructions"),o("b-button",{attrs:{variant:"outline-primary",block:""},on:{click:function(t){return e.$bvModal.hide("instructions_modal")}}},[e._v("Close")])],1)],1),o("div",{staticClass:"column2"},[o("b-table",{attrs:{"head-variant":"dark",fields:e.fields,"thead-class":""}}),o("draggable",{staticStyle:{"overflow-y":"scroll",height:"540px","margin-top":"-15px"},attrs:{forceFallback:!0},on:{start:e.startDrag,end:e.finishDrag},model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},e._l(e.items,(function(t,a){return o("div",{key:a},[0==a?o("br"):e._e(),o("b-table",{ref:"selectableTable",refInFor:!0,staticStyle:{cursor:"all-scroll","margin-top":"-20px"},attrs:{striped:"",hover:"","table-variant":"light","head-variant":"dark",items:t,fields:e.fields,"thead-class":"d-none",responsive:"sm"},on:{"row-hovered":e.rowHovered,"row-unhovered":e.rowUnHovered},scopedSlots:e._u([{key:"cell(details)",fn:function(t){return[o("img",{staticStyle:{cursor:"pointer",float:"left","margin-right":"10px"},attrs:{src:i("c5d4"),width:"20",height:"10"},on:{click:t.toggleDetails}}),e._v(" "+e._s(t.item.item_name)+" ")]}},{key:"row-details",fn:function(t){return[o("b-card",[e._v(" "+e._s(t.item.item_desc)+" ")])]}},{key:"cell(group)",fn:function(t){return[o("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.getImageURL(t.item.item_group),alt:"",width:"30",height:"30",title:t.item.item_group}})]}}],null,!0)})],1)})),0),o("div",{staticStyle:{float:"right"}},[o("b-button",{attrs:{variant:"outline-primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1),o("div",{staticClass:"column3"},[o("Map",{ref:"map"})],1)])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("u",[i("b",[e._v(" What you need to do")])])}],r=i("b76a"),n=i.n(r),s=i("a0be"),l=i("f104"),c={components:{draggable:n.a,Map:s["a"],Instructions:l["a"]},data(){return{items:this.getArrayItems(),initial_items:this.getArrayItems(),fields:[{key:"details",label:"Project",class:"text-center"},{key:"group",label:"",class:"text-right"}]}},methods:{getImageURL(e){return i("9e01")("./"+e+".png")},finishDrag(e){const t="grabbing",i=document.getElementsByTagName("html").item(0);i&&!0===new RegExp(t).test(i.className)&&(i.className=i.className.replace(new RegExp(" "+t),""),i.className=i.className.replace(new RegExp(t),""))},startDrag(){const e="grabbing",t=document.getElementsByTagName("html").item(0);t&&!1===new RegExp(e).test(t.className)&&(t.className+=" "+e)},getArrayItems(){let e=JSON.parse(localStorage.getItem("items")),t=[];return e.forEach(e=>{let i=[];i.push(e),t.push(i)}),t},rowHovered(e){this.$refs.map.changeOpacity(e.item_name,1)},rowUnHovered(e){this.$refs.map.changeOpacity(e.item_name,.6)},async submit(){if(!confirm("Once you press OK you can't go back and change your choices"))return;let e=(new Date).getTime();localStorage.setItem("budgeting_finish",JSON.stringify(e));let t=[];this.items.forEach((e,i)=>{let o=this.initial_items.map((function(e){return e[0].item_id})).indexOf(e[0].item_id),a=o+"-"+i;t.push({item_id:e[0].item_id,item_name:e[0].item_name,item_value:a})}),console.log(t),localStorage.setItem("final_items",JSON.stringify(t)),await this.$parent.addExperiment(),this.$router.push("/Consistency")}}},m=c,u=(i("f613"),i("2877")),h=Object(u["a"])(m,o,a,!1,null,"7a3a13f6",null);t["default"]=h.exports},3320:function(e,t,i){e.exports=i.p+"img/ranking_value_money_example.1b39b61f.gif"},5012:function(e,t,i){e.exports=i.p+"img/ranking_value_example.5e4e8bda.gif"},5490:function(e,t,i){"use strict";var o=i("a6b6"),a=i.n(o);a.a},5963:function(e,t,i){},a0be:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"map",staticStyle:{"margin-left":"1%",width:"600px",height:"600px",position:"relative"},attrs:{id:"map"}},[i("transition",{attrs:{name:"fade",appear:""}},[i("img",{ref:"homeImage",attrs:{src:e.getImageURL("userHome"),height:"45",width:"65"}})]),e._l(this.our_items,(function(t){return i("div",{key:t},[1==t.coords.length?i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.item_group),height:e.image_size,width:e.image_size,title:t.item_name}}):i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.item_group),height:e.image_size/1.5,width:e.image_size/1.5,title:t.item_name}})])}))],2)},a=[],r={data(){return{url:"../assets/userHome.png",our_items:this.getAllItems(),image_size:"50",home:[{x:10,y:20},{x:60,y:50},{x:40,y:30},{x:20,y:80}]}},mounted(){this.drawImages(),console.log(this.$refs)},methods:{getImageURL(e){return i("9e01")("./"+e+".png")},drawImages(){let e=this.home[Math.floor(Math.random()*this.home.length)];console.log(e),this.$refs.homeImage.style.position="relative",this.$refs.homeImage.style.left=e.x+"%",this.$refs.homeImage.style.top=e.y+"%";let t=0;this.our_items.forEach(e=>{1!=this.$refs[e.item_name].length&&3!=t||(t=0),this.$refs[e.item_name][t].style.position="absolute",this.$refs[e.item_name][t].style.left=e.x_coord.toString()+"%",this.$refs[e.item_name][t].style.top=e.y_coord.toString()+"%",this.$refs[e.item_name][t].style.opacity=.3,t++})},getAllItems(){let e=JSON.parse(localStorage.getItem("items")),t=[];return e.forEach(e=>{let i=e.coords.split("#");i.forEach(o=>{t.push({item_name:e.item_name,item_group:e.item_group,x_coord:o.split(",")[0],y_coord:o.split(",")[1],coords:i})})}),t},changeOpacity(e,t){let i=this.$refs[e];i.forEach(e=>{e.style.opacity=t})}}},n=r,s=(i("5490"),i("2877")),l=Object(s["a"])(n,o,a,!1,null,null,null);t["a"]=l.exports},a6b6:function(e,t,i){},f104:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("fieldset",[o("h2",{staticStyle:{"text-align":"center"}},[e._v("Step 2: Instructions")]),o("br"),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("The task:")]),o("div",{staticStyle:{float:"right","margin-left":"20px"}},[o("img",{attrs:{src:i("f744"),width:"350px"}})]),e._v(" You are a resident in Utopia City and the city council has decided to spend a portion of the city budget on improving the residents’ quality of life. Several types of infrastructure upgrades, located across the city, have been proposed."),o("br"),e._v(" Unfortunately, the budget is not sufficient to implement all the suggestions, so you have the opportunity to help decide which projects should be prioritized. ")]),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("insturcionsTodo")],1),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("Your payment:")]),o("ul",[o("li",[e._v("20 cent payment for the task contingent on passing a quiz and doing the task. ")]),o("li",[e._v("10 cent bonus for correctly answering a survey after submitting the task.")]),o("li",[e._v("10 cent bonus for answering a feedback survey about the experiment.")])])])],1)},a=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",["Utilities"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You will be asked to distribute 100 points among 10 projects. The more points you assign to an item, the more important you think the item is to your city. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. The projects that John finds most useful (in decreasing order of importance) are: "),e._m(0),e._v(" For example, in the following image, you can see a "),o("b",[e._v("possible rating")]),e._v(" by John: "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("498e"),width:"70%"}}),o("br"),o("br"),e._v(" Your ratings tell us how much you like groups of items in addition to how much you like individual items. For example, according to the ratings above, John prefers the bundle of "),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" You can use the Normalize button to automatically adjust your values to add up to 100 while keeping the relative importance of items intact. You will only be able to press the SUBMIT button if the values add up to 100. ")]):"Knapsack"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to select which projects you would like to see funded given a budget limit of $500,000. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using for an imaginary citizen called Alex. The projects that Alex prefers are: "),e._m(1),e._v(" On the left you can see the total cost of the selected projects. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5042"),width:"90%"}}),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" Alex can no longer add another project even through he has not exhausted his entire budget. ")]):"k_approval"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to select up to 5 projects from a list of 10 projects according to your best judgment. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. "),o("br"),e._v(" The projects that John finds most useful are: "),e._m(2),e._v(" In the following image, you can see the choices of John and the number of projects selected. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5fc4"),width:"90%"}})]):"Ranking_value"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to rank the items from the most important to the least important according to your best judgement. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. "),o("br"),e._v(" Rank the items from MOST important (top of the list) to the LEAST important (bottom of the list). "),o("br"),e._v(" CLICK and DRAG on the item to change its ranking in the list. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("5012"),width:"60%"}})]):"Threshold"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" Select each of the following projects ONLY if the answer to the following question is YES. "),o("br"),e._v(" If 100 points are divided among the projects based on their importance, should this project get AT LEAST 10 points? "),o("br"),e._v(" Use your best judgement. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. "),o("br"),e._v(" The projects that John finds worth at least 10 out of 100 points are: "),e._m(3),e._v(" In the following image, you can see the choices of John and the number of selected proejcts. "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("a304"),width:"90%"}})]):"Ranking_value_money"==e.voting_method?o("div",[o("h3",[e._v("What you need to do: ")]),o("br"),e._v(" You need to rank the projects by “value for money”, which measures the project's importance to you relative to the cost of the project. "),o("br"),o("br"),o("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called John. "),o("br"),e._v(" The “value for money” for a project is computed as the utility of the project divided by cost. "),o("br"),e._v(" Rank the projects from greatest “value for money” (top of the list) to least “value for money” (bottom of the list). "),o("br"),e._v(" CLICK and DRAG on the project to change its ranking in the list. "),o("br"),e._v(" You need to sort the list in DECREASING order of “value for money” (from the highest value to the lowest value). "),o("br"),o("br"),o("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:i("3320"),width:"60%"}}),o("br"),o("br"),o("b",[e._v("Note:")]),o("br"),e._v(" The interface you will use won’t include the columns “utility for John” and “Value for money”. You need to think independently about what is the utility for each project and compute the “value for money” for each project. ")]):o("div",[e._v(" no todo")])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laudry Access in Public Schools")]),i("li",[e._v("Security Cameras")]),i("li",[e._v("The Sustainable Energy Pilot")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("24H public toilet")]),i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("Let's Rest: Picnic Tables & Benches for Our Parks")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("24H public toilet")]),i("li",[e._v("Dog Park")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Laundry Access in Public Schools")]),i("li",[e._v("24H public toilet")]),i("li",[e._v("Dog Park")])])}],s={data(){return{voting_method:localStorage.getItem("voting_method")}}},l=s,c=i("2877"),m=Object(c["a"])(l,r,n,!1,null,null,null),u=m.exports,h={components:{insturcionsTodo:u}},d=h,g=(i("2727"),Object(c["a"])(d,o,a,!1,null,null,null));t["a"]=g.exports},f613:function(e,t,i){"use strict";var o=i("1bc1"),a=i.n(o);a.a}}]);
//# sourceMappingURL=chunk-257a49a8.26620c49.js.map