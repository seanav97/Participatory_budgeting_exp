(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da588764"],{2727:function(e,t,o){"use strict";var i=o("5963"),r=o.n(i);r.a},"2aec":function(e,t,o){e.exports=o.p+"img/Ranking_value.a0ce9058.gif"},5490:function(e,t,o){"use strict";var i=o("a6b6"),r=o.n(i);r.a},5963:function(e,t,o){},"712f":function(e,t,o){e.exports=o.p+"img/Ranking_value_money.653ee03b.gif"},"7d3b":function(e,t,o){"use strict";var i=o("a3bb"),r=o.n(i);r.a},9387:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("br"),i("h1",{staticStyle:{"font-family":"'Courier New', monospace","text-align":"center"}},[e._v("Improving Utopia City")]),i("div",{staticClass:"row"},[i("div",{staticClass:"column1"},[i("div",{staticStyle:{"text-align":"center",position:"absolute","border-radius":"25px",border:"3px solid #555","background-color":"lightblue",width:"250px","margin-left":"10px","margin-top":"40px",padding:"10px"}},[e._m(0),i("br"),i("a",[e._v(' You need to rank the projects by "value for money", which measures the project importance to you relative to the cost of the project.')]),i("br"),i("br"),i("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("instructions_modal")}}},[e._v("Show instructions")])],1),i("b-modal",{attrs:{size:"lg",id:"instructions_modal","hide-footer":""}},[i("instructions"),i("b-button",{attrs:{variant:"outline-primary",block:""},on:{click:function(t){return e.$bvModal.hide("instructions_modal")}}},[e._v("Close")])],1)],1),i("div",{staticClass:"column2"},[e._v(" (click on a project to show more details) "),i("b-table",{attrs:{"head-variant":"dark",fields:e.fields,"thead-class":""}}),i("draggable",{staticStyle:{"margin-top":"-15px",overflow:"scroll",height:"530px"},attrs:{forceFallback:!0},on:{start:e.startDrag,end:e.finishDrag},model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},e._l(e.items,(function(t,r){return i("div",{key:t.item_name},[0==r?i("br"):e._e(),i("b-table",{ref:"selectableTable",refInFor:!0,staticStyle:{cursor:"all-scroll","margin-top":"-20px"},attrs:{striped:"",hover:"","table-variant":"light","head-variant":"dark",items:t,fields:e.fields,"thead-class":"d-none",responsive:"sm"},on:{"row-clicked":e.details,"row-hovered":e.rowHovered,"row-unhovered":e.rowUnHovered},scopedSlots:e._u([{key:"cell(details)",fn:function(t){return[i("img",{style:t.item._showDetails?"margin-top:5px":"transform: rotate(270deg); margin-top:5px",attrs:{src:o("c5d4"),width:"20",height:"10"}}),i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticStyle:{"margin-left":"10px","margin-right":"20px"},attrs:{src:e.getImageURL(t.item.item_group),alt:"",width:"30",height:"30",title:t.item.item_group}}),e._v(" "+e._s(t.item.item_name)+" ")]}},{key:"row-details",fn:function(t){return[i("b-card",[e._v(" "+e._s(t.item.item_desc)+" ")])]}}],null,!0)})],1)})),0),i("div",{staticStyle:{float:"right"}},[i("b-button",{attrs:{variant:"outline-primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1),i("div",{staticClass:"column3"},[i("Map",{ref:"map"})],1)])])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("u",[o("b",[e._v(" What you need to do")])])}],a=o("b76a"),s=o.n(a),n=o("a0be"),l=o("f104"),c={components:{draggable:s.a,Map:n["a"],Instructions:l["a"]},data(){return{items:this.getArrayItems(),initial_items:this.getArrayItems(),fields:[{key:"details",label:"Project",class:"text-left"},{key:"item_value",label:"Price",sortable:!0,class:"text-right",formatter:(e,t,o)=>e.toLocaleString("ja-JP",{style:"currency",currency:"USD",maximumFractionDigits:0})}]}},methods:{details(e,t,o){e._showDetails=!e._showDetails},getImageURL(e){return o("9e01")("./"+e+".png")},finishDrag(e){const t="grabbing",o=document.getElementsByTagName("html").item(0);o&&!0===new RegExp(t).test(o.className)&&(o.className=o.className.replace(new RegExp(" "+t),""),o.className=o.className.replace(new RegExp(t),""))},startDrag(){const e="grabbing",t=document.getElementsByTagName("html").item(0);t&&!1===new RegExp(e).test(t.className)&&(t.className+=" "+e)},getHeaderClass(e){return console.log,0==e?"":"d-none"},getArrayItems(){let e=JSON.parse(localStorage.getItem("items")).map(e=>({...e,_showDetails:!1})),t=[];return e.forEach(e=>{let o=[];o.push(e),t.push(o)}),t},rowHovered(e){console.log(e),this.$refs.map.changeOpacity(e.item_name,1)},rowUnHovered(e){this.$refs.map.changeOpacity(e.item_name,.6)},async submit(){if(!confirm("Once you press OK you can't go back and change your choices"))return;let e=(new Date).getTime();localStorage.setItem("budgeting_finish",JSON.stringify(e));let t=[];this.items.forEach((e,o)=>{let i=this.initial_items.map((function(e){return e[0].item_id})).indexOf(e[0].item_id),r=i+"->"+o;t.push({item_id:e[0].item_id,item_name:e[0].item_name,item_value:r})}),localStorage.setItem("final_items",JSON.stringify(t)),await this.$parent.addExperiment(),this.$router.push("/Consistency")}}},m=c,h=(o("7d3b"),o("2877")),u=Object(h["a"])(m,i,r,!1,null,"43ea78ba",null);t["default"]=u.exports},a0be:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"map",staticStyle:{"margin-left":"1%",width:"600px",height:"600px",position:"relative"},attrs:{id:"map"}},[o("transition",{attrs:{name:"fade",appear:""}},[o("img",{ref:"homeImage",attrs:{src:e.getImageURL("userHome3"),height:"85",width:"85"}})]),e._l(this.our_items,(function(t){return o("div",{key:t},[1==t.coords.length?o("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.item_group),height:e.image_size,width:e.image_size,title:t.item_name}}):o("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.item_group),height:e.image_size/1.5,width:e.image_size/1.5,title:t.item_name}})])}))],2)},r=[],a={data(){return{url:"../assets/userHome3.png",our_items:this.getAllItems(),image_size:"50",home:[{x:10,y:20},{x:60,y:50},{x:40,y:30},{x:20,y:80}]}},mounted(){this.drawImages(),console.log(this.$refs)},methods:{getImageURL(e){return o("9e01")("./"+e+".png")},drawImages(){let e=this.home[Math.floor(Math.random()*this.home.length)];console.log(e),this.$refs.homeImage.style.position="relative",this.$refs.homeImage.style.left=e.x+"%",this.$refs.homeImage.style.top=e.y+"%";let t=0;this.our_items.forEach(e=>{1!=this.$refs[e.item_name].length&&3!=t||(t=0),this.$refs[e.item_name][t].style.position="absolute",this.$refs[e.item_name][t].style.left=e.x_coord.toString()+"%",this.$refs[e.item_name][t].style.top=e.y_coord.toString()+"%",this.$refs[e.item_name][t].style.opacity=.3,t++})},getAllItems(){let e=JSON.parse(localStorage.getItem("items")),t=[];return e.forEach(e=>{let o=e.coords.split("#");o.forEach(i=>{t.push({item_name:e.item_name,item_group:e.item_group,x_coord:i.split(",")[0],y_coord:i.split(",")[1],coords:o})})}),t},changeOpacity(e,t){let o=this.$refs[e];o.forEach(e=>{e.style.opacity=t})}}},s=a,n=(o("5490"),o("2877")),l=Object(n["a"])(s,i,r,!1,null,null,null);t["a"]=l.exports},a3bb:function(e,t,o){},a6b6:function(e,t,o){},f104:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("fieldset",[o("h2",{staticStyle:{"text-align":"center"}},[e._v("Step 3: Instructions")]),o("br"),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("The task:")]),e._v(" You are a resident in Utopia City and the city council has decided to spend a portion of the city budget this year on improving the residents’ quality of life. Several types of infrastructure upgrades, located across the city, have been proposed. Based on earlier discussions with the residents, the list has been narrowed down to "+e._s(e.num_of_projects)+" projects. Unfortunately, the budget is not sufficient to implement all "+e._s(e.num_of_projects)+" projects, so you have the opportunity to help decide which projects should be prioritized. ")]),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("What you need to do: ")]),o("br"),o("p",[e._v("(If the video is blured you can double click on it to see it on full screen, or you can improve the quality)")]),o("iframe",{attrs:{src:e.getVideo(),width:"850",height:"395",allowfullscreen:""}})]),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("The next steps:")]),o("br"),o("h5",[e._v("1) Quiz")]),e._v(" You will answer a quiz based on the information you learned from this page. "),o("br"),o("br"),o("h5",[e._v("2) The Task")]),e._v(" You will choose the projects you'd like to see funded as you were shown in the video. "),o("br"),o("br"),o("h5",[e._v("3) Consistency check")]),e._v(" You will be asked 3 simple questions about your choises, in order to make sure you didn't randomize the answers (answering this part correctly will grant you bonus payment) "),o("br"),o("br"),o("h5",[e._v("4) Feedback")]),e._v(" The final part is for you to give us feedback for your experience (you must complete this step to get your payment) ")]),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("Your payment:")]),o("ul",[o("li",[e._v("$0.5 payment for the task contingent on passing a quiz and doing the task. ")]),o("li",[e._v("$0.5 bonus for correctly answering a consistency test after submitting the task.")])])])],1)},r=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",["Utilities"==e.voting_method?i("div",[i("br"),e._v(" You will be asked to distribute 100 points among "+e._s(e.num_of_projects)+" projects. The more points you assign to an item, the more important you think the item is to your city. "),i("br"),i("br"),i("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. The projects that Alex finds most useful (in decreasing order of importance) are: "),e._m(0),e._v(" For example, in the following image, you can see a "),i("b",[e._v("possible rating")]),e._v(" by Alex: "),i("br"),i("br"),i("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("4211"),width:"70%"}}),i("br"),i("br"),i("b",[e._v("Note:")]),i("br"),e._v(" You can use the Normalize button to automatically adjust your values to add up to 100 while keeping the relative importance of items intact. You will only be able to press the SUBMIT button if the values add up to 100. ")]):"Knapsack"==e.voting_method?i("div",[i("br"),e._v(" The city council has reserved a budget of $500,000 to fund infrastructure projects this year. You need to select the projects that you would personally like to see funded given this budget limit. "),i("br"),i("br"),i("b",[e._v("Below is an example")]),e._v(" of the interface you will be using, filled out by an imaginary resident named Alex. The projects that Alex prefers are: "),e._m(1),e._v(" On the left you can see the total cost of the selected projects and the unused portion of the budget. "),i("br"),i("br"),i("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("aa3d"),width:"90%"}}),i("br"),i("br"),i("b",[e._v("Note:")]),i("br"),e._v(" Alex can no longer add another project even through he has not exhausted his entire budget. ")]):"k_approval"==e.voting_method?i("div",[i("br"),e._v(" You will be presented with "+e._s(e.num_of_projects)+" projects and asked to select up to 5 projects that you would most like to see funded "),i("br"),i("br"),i("b",[e._v("Below is an example")]),e._v(" of the interface you will be using, filled out by an imaginary resident named Alex. "),i("br"),e._v(" The projects that Alex would like to see funded are: "),e._m(2),e._v(" In the following image, you can see the choices of Alex and the number of projects selected. Up to two additional projects can be selected. "),i("br"),i("br"),i("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("0b2d"),width:"90%"}})]):"Ranking_value"==e.voting_method?i("div",[i("br"),e._v(" Rank the suggested projects from most to least important according to your preferences. "),i("br"),i("br"),i("b",[e._v("Below is an example")]),e._v(" of the interface you will be using. "),i("br"),e._v(" You will be asked to rank the items from MOST important (at the top) to the LEAST important (bottom). "),i("br"),e._v(" You can CLICK and DRAG on an item to change its ranking in the list. "),i("br"),i("br"),i("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("2aec"),width:"60%"}})]):"Threshold"==e.voting_method?i("div",[i("br"),e._v(" Select each of the following projects ONLY if the answer to the following question is YES. "),i("br"),e._v(" If 100 points are divided among the projects based on their importance, should this project get AT LEAST 10 points? "),i("br"),e._v(" Use your best judgement. "),i("br"),i("br"),i("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. "),i("br"),e._v(" The projects that Alex finds worth at least 10 out of 100 points are: "),e._m(3),e._v(" In the following image, you can see the choices of Alex and the number of selected proejcts. "),i("br"),i("br"),i("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("9cea"),width:"90%"}})]):"Ranking_value_money"==e.voting_method?i("div",[i("br"),e._v(" You need to rank the projects by “value for money”, which measures the project's importance to you relative to the cost of the project. "),i("br"),i("br"),i("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. "),i("br"),e._v(" The “value for money” for a project is computed as the utility of the project divided by cost. "),i("br"),e._v(' For example: if the project "Dog Park" costs $250,000 and you utility for it is 250, then the "value for money" for it will be 1000. '),i("br"),e._v(" Rank the projects from greatest “value for money” (top of the list) to least “value for money” (bottom of the list). "),i("br"),e._v(" CLICK and DRAG on the project to change its ranking in the list. "),i("br"),e._v(" You need to sort the list in DECREASING order of “value for money” (from the highest value to the lowest value). "),i("br"),i("br"),i("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("712f"),width:"60%"}}),i("br"),i("br"),i("b",[e._v("Note:")]),i("br"),e._v(" The interface you will use won’t include the columns “utility for Alex” and “Value for money”. You need to think independently about what is the utility for each project and compute the “value for money” for each project. ")]):i("div",[e._v(" no todo")])])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("Building an amphitheater in the public park")]),o("li",[e._v("Soak Up the Solar Power")]),o("li",[e._v("Security Cameras")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("We Need More Crosswalks")]),o("li",[e._v("Soak Up the Solar Power")]),o("li",[e._v("Remodel the Kitchen at the Youth Center")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("We Need More Crosswalks")]),o("li",[e._v("Security Cameras")]),o("li",[e._v("Interactive Technology for the Main Library")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("We Nedd More Crosswalks")]),o("li",[e._v("Security Cameras")]),o("li",[e._v("Nursing Pod for Mothers and Infants")])])}],n={data(){return{voting_method:localStorage.getItem("voting_method"),num_of_projects:localStorage.getItem("num_of_projects")}}},l=n,c=o("2877"),m=Object(c["a"])(l,a,s,!1,null,null,null),h=(m.exports,{data(){return{voting_method:localStorage.getItem("voting_method"),num_of_projects:localStorage.getItem("num_of_projects")}},methods:{getVideo(){return"Utilities"==this.voting_method?"https://drive.google.com/file/d/1SLjAr3v55kvLrGNKH1CP0kmobBN9TDEa/preview":"Knapsack"==this.voting_method?"https://drive.google.com/file/d/14w7iHHImeV-WqFKBokdCfgHSf4pPWdOe/preview":"k_approval"==this.voting_method?"https://drive.google.com/file/d/1Vv9jacnlmmFGn7_xmrYTTGy_-KdpEeAh/preview":"Ranking_value"==this.voting_method?"https://drive.google.com/file/d/1pt25Mbwo7Ljn4qcg0XWVp3u052P-QRkd/preview":"Threshold"==this.voting_method?"https://drive.google.com/file/d/1PM2JXrbZkDfAfPbH92sXbc5w6SSxrGHd/preview":"Ranking_value_money"==this.voting_method?"https://drive.google.com/file/d/14ZYZHtBEmeb17j--E1QYz-Qk-Qx5v-yv/preview":void 0}}}),u=h,d=(o("2727"),Object(c["a"])(u,i,r,!1,null,null,null));t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-da588764.71546351.js.map