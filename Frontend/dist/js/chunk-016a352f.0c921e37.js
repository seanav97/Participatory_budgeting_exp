(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-016a352f"],{1100:function(e,t,a){e.exports=a.p+"img/background.85d5f527.jpg"},1771:function(e,t,a){var i={"./35.gif":"7d41","./Culture & community.png":"8492","./Education.png":"6e6a","./Environment, public health & safety.png":"ecb2","./Facilities, parks & recreation.png":"23b6","./Streets, Sidewalks & Transit.png":"fa735","./amphitheater.png":"98bc","./arrow.png":"c5d4","./background.jfif":"4bf4","./background.jpg":"1100","./benches.png":"1afe","./bike_repair.png":"bddc","./chefs.jpg":"b89a","./city_ams.png":"6bf3","./clock_icon.png":"65b7","./computers_center.png":"6b14","./countries":"4805","./countries.js":"4805","./diners_icon.png":"3cf4","./dog_park.jpg":"ce79","./empty_star_icon.png":"b1f3","./family_member_icon.png":"d865","./full_star_icon.png":"8f87","./glutenFree_icon.png":"01bc","./gluten_icon.png":"61f4","./hover_star_icon.png":"99ee","./info.png":"9417","./library_furniture.png":"1803","./like_icon.png":"7fda","./logo.png":"cf05","./music.jpg":"ed46","./notVegan_icon.png":"4321","./notVegetarian_icon.png":"1176","./not_seen_icon.png":"e113","./occasion_icon.png":"5158","./public_toilet.png":"d5ac","./school_chairs.png":"2e74","./seen_icon.png":"ea86","./temp.png":"a23c","./userHome.png":"8d67","./vegan_icon.png":"06ef","./vegetarian_icon.png":"9315","./water_refill.png":"2336","./‏‏knapsack_empty_example.png":"b950","./‏‏knapsack_example.png":"3c71"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id="1771"},2727:function(e,t,a){"use strict";var i=a("5963"),n=a.n(i);n.a},"3dfc":function(e,t,a){"use strict";var i=a("c4e2"),n=a.n(i);n.a},4101:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[null!=this.id?i("div",[i("h1",{staticStyle:{"font-family":"'Courier New', monospace","text-align":"center"}},[e._v("Building our city")]),i("div",{staticClass:"row"},[i("div",{staticClass:"column1"},[i("apexchart",{attrs:{type:"pie",width:"300",options:e.chartOptions,series:e.series[0].data}}),i("p",{staticStyle:{position:"relative",left:"5%"}},[i("b",[e._v("Money spent:")]),e._v(" "+e._s(e.money_spent.toLocaleString({style:"currency"}))+" "),i("br"),i("br"),i("span",{ref:"moneyLabel"},[i("b",[e._v("Budget left:")]),e._v(" "+e._s((e.budget-e.money_spent).toLocaleString({style:"currency"})))])]),i("div",{staticStyle:{"text-align":"center",position:"absolute","border-radius":"25px",border:"3px solid #555","background-color":"lightblue",width:"250px","margin-left":"10px","margin-top":"40px",padding:"10px"}},[e._m(0),i("br"),i("a",[e._v(" You need to select which projects to build based on the budget of "+e._s(e.budget.toLocaleString({style:"currency"}))+" pounds.")]),i("br"),i("br"),i("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("instructions_modal")}}},[e._v("Show instructions")])],1)],1),i("div",{staticClass:"column2"},[i("filter-group"),i("b-table",{ref:"selectableTable",attrs:{"sticky-header":"500px",striped:"",hover:"","table-variant":"light","head-variant":"dark",items:e.items,fields:e.fields,"select-mode":e.selectMode,responsive:"sm"},on:{"row-hovered":e.rowHovered,"row-unhovered":e.rowUnHovered},scopedSlots:e._u([{key:"cell(arrow)",fn:function(e){return[i("img",{staticStyle:{cursor:"pointer",display:"inline",float:"left"},attrs:{src:a("c5d4"),width:"20",height:"10"},on:{click:e.toggleDetails}})]}},{key:"cell(group)",fn:function(t){return[i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.$parent.getImageURL(t.item.item_group),alt:"",width:"30",height:"30",title:t.item.item_group}})]}},{key:"cell(select)",fn:function(t){return[i("b-form-checkbox",{attrs:{size:"lg"},on:{change:function(a){return e.update(a,t)}},model:{value:t.item.selected,callback:function(a){e.$set(t.item,"selected",a)},expression:"row.item.selected"}})]}},{key:"row-details",fn:function(t){return[i("b-card",[e._v(" "+e._s(t.item.item_name)+" ")])]}}],null,!1,227453935)}),e.somethingSelected?e._e():i("b-alert",{staticStyle:{"text-align":"center"},attrs:{show:"",variant:"danger"}},[e._v("You must select some projects.")]),i("div",{staticStyle:{float:"right"}},[i("b-button",{attrs:{variant:"outline-primary"},on:{click:e.resetTable}},[e._v("reset")]),i("b-button",{attrs:{variant:"outline-primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1),i("div",{staticClass:"column3"},[i("Map",{ref:"map"})],1)])]):i("div",{staticStyle:{width:"80%","padding-left":"25%","font-size":"50px"}},[i("br"),i("br"),i("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("Please complete all the necessary steps")])],1),i("b-modal",{attrs:{size:"lg",id:"instructions_modal","hide-footer":""}},[i("instructions"),i("b-button",{attrs:{variant:"outline-primary",block:""},on:{click:function(t){return e.$bvModal.hide("instructions_modal")}}},[e._v("Close")])],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("u",[a("b",[e._v(" What you need to do")])])}],r=a("1321"),o=a.n(r),s=a("a0be"),l=a("b13f"),c=a("f104"),u={components:{apexchart:o.a,Map:s["a"],FilterGroup:l["a"],Instructions:c["a"]},data(){return{id:JSON.parse(localStorage.getItem("participant_ID")),budget:5e5,money_spent:0,items:JSON.parse(localStorage.getItem("items")).map(e=>({...e,selected:!1})),fields:[{key:"arrow",label:""},{key:"group",label:""},{key:"item_name",label:"Item",sortable:!0,class:"text-center"},{key:"item_value",label:"Price (pounds)",sortable:!0,class:"text-center",formatter:(e,t,a)=>e.toLocaleString({style:"currency"})},{key:"select",label:"",class:"text-center"}],chartOptions:{dataLabels:{enabled:!1},labels:["Left","Used"],legend:{position:"top"},colors:["#F6F6F6","#BFC0C2"]},series:[{data:[5e5,0]}],somethingSelected:!0}},mounted(){},methods:{update(e,t){if(e)if(t.item.item_value>this.budget-this.money_spent){let e=this;setTimeout((function(){e.items.forEach(e=>{e.item_name==t.item.item_name&&(e.selected=!1,console.log(e.selected))})}),5),this.$refs.moneyLabel.classList.add("run-animation"),setTimeout((function(){e.$refs.moneyLabel.classList.remove("run-animation")}),500)}else this.$refs.map.$refs[t.item.item_name][0].style.opacity=1,this.money_spent+=t.item.item_value,this.somethingSelected=!0;else this.$refs.map.$refs[t.item.item_name][0].style.opacity=.3,this.money_spent-=t.item.item_value;this.series=[{data:[this.budget-this.money_spent,this.money_spent]}]},rowHovered(e){this.$refs.map.$refs[e.item_name][0].style.opacity=1},rowUnHovered(e,t){let a=this.items.filter(t=>t.item_name==e.item_name)[0].selected;a||(this.$refs.map.$refs[e.item_name][0].style.opacity=.3)},resetTable(){this.money_spent=0,this.series=[{data:[this.budget,this.money_spent]}],this.items.forEach(e=>{e.selected=!1,this.$refs.map.$refs[e.item_name][0].style.opacity=.3})},submit(){let e=[],t=0;if(this.items.forEach(a=>{a.selected?(e.push({item_id:a.item_id,item_name:a.item_name,item_value:1,item_price:a.item_value}),t++):e.push({item_id:a.item_id,item_name:a.item_name,item_value:0,item_price:a.item_value})}),0==t)return void(this.somethingSelected=!1);let a=(new Date).getTime();localStorage.setItem("budgeting_finish",JSON.stringify(a)),localStorage.setItem("final_items",JSON.stringify(e)),this.$router.push("/Consistency")}}},m=u,d=(a("3dfc"),a("2877")),p=Object(d["a"])(m,i,n,!1,null,null,null);t["default"]=p.exports},4805:function(e,t,a){"use strict";a.r(t),t["default"]=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]},"4bf4":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},5490:function(e,t,a){"use strict";var i=a("a6b6"),n=a.n(i);n.a},5963:function(e,t,a){},"7d41":function(e,t,a){e.exports=a.p+"img/35.58bbc15c.gif"},a0be:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"map",staticStyle:{"margin-left":"1%"},attrs:{id:"map"}},[a("img",{ref:"homeImage",attrs:{src:e.getImageURL("userHome.png"),height:"45",width:"65"}}),e._l(this.our_items,(function(t){return a("div",{key:t},[a("img",{ref:t.item_name,refInFor:!0,attrs:{src:e.getImageURL(t.url),height:"45",width:"65"}})])}))],2)},n=[],r={data(){return{url:"userHome.png",our_items:JSON.parse(localStorage.getItem("items"))}},mounted(){this.drawImages()},methods:{getImageURL(e){return a("1771")("./"+e)},drawImages(){this.$refs.homeImage.style.position="relative",this.$refs.homeImage.style.left="30%",this.$refs.homeImage.style.top="30%",this.our_items.forEach(e=>{this.$refs[e.item_name][0].style.position="relative",this.$refs[e.item_name][0].style.left=e.x_coord.toString()+"%",this.$refs[e.item_name][0].style.top=e.y_coord.toString()+"%",this.$refs[e.item_name][0].style.opacity=.3})}}},o=r,s=(a("5490"),a("2877")),l=Object(s["a"])(o,i,n,!1,null,null,null);t["a"]=l.exports},a6b6:function(e,t,a){},b13f:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-dropdown",{staticClass:"m-2",attrs:{text:"Filter defferent categories",variant:"primary"}},e._l(this.groups,(function(t){return a("div",{key:t},[a("b-dropdown-item",{nativeOn:{"!click":function(e){e.stopPropagation()}}},[a("b-form-checkbox",{staticStyle:{display:"inline"},on:{change:function(a){return e.checkGroup(a,t)}},model:{value:t.selected,callback:function(a){e.$set(t,"selected",a)},expression:"group.selected"}},[e._v(e._s(t.group_name))]),a("img",{staticStyle:{display:"inline","margin-left":"5px"},attrs:{src:e.getImageURL(t.group_name),alt:"",width:"30",height:"30"}})],1)],1)})),0)},n=[],r={data(){return{groups:this.getGroupes(),items_by_groups:JSON.parse(localStorage.getItem("items")).map(e=>({...e,selected:!1})).map(e=>({...e,given_value:0}))}},methods:{getImageURL(e){return a("9e01")("./"+e+".png")},getGroupes(){let e=[],t=JSON.parse(localStorage.getItem("items"));return t.forEach(t=>{e.some(e=>e.group_name==t.item_group)||e.push({group_name:t.item_group,selected:!0})}),e},checkGroup(e,t){if(e)this.items_by_groups.forEach(e=>{e.item_group==t.group_name&&this.$parent.items.push(e)});else{let e=[];this.$parent.items.forEach(a=>{console.log(a.item_name),a.item_group==t.group_name&&(this.items_by_groups.forEach(e=>{e.item_name==a.item_name&&(e.selected=a.selected,e.given_value=a.given_value)}),e.push(a.item_name))}),e.forEach(e=>{this.$parent.items.splice(this.$parent.items.map((function(e){return e.item_name})).indexOf(e),1)})}}}},o=r,s=a("2877"),l=Object(s["a"])(o,i,n,!1,null,null,null);t["a"]=l.exports},b89a:function(e,t,a){e.exports=a.p+"img/chefs.c3716bce.jpg"},c4e2:function(e,t,a){},ce79:function(e,t,a){e.exports=a.p+"img/dog_park.b7de5b3d.jpg"},ed46:function(e,t,a){e.exports=a.p+"img/music.300cfed6.jpg"},f104:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("fieldset",[i("h2",{staticStyle:{"text-align":"center"}},[e._v("Step 2: Instructions")]),i("h3",[e._v("The Task:")]),i("p",[e._v(" It is 10 am on a mid-August day and your plane has just crash-landed on a desert island. You are all right, however, getting out of this situation in one piece is going to require some quick thinking. While scavenging the area, you discover a variety of items in the wreckage that could prove helpful. Deciding what to utilize and what to set aside could mean the difference between success and failure. ")]),i("h3",[e._v("What you need to do: ")]),i("p",[e._v("You will be asked to distribute 100 points among 10 items. The more points you assign to an item, the more important you think the item is to your survival.")]),i("b-button",{staticStyle:{position:"relative","margin-left":"45%"},attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("bv-modal-example")}}},[e._v("See an example")]),i("b-modal",{attrs:{size:"lg",id:"bv-modal-example","hide-footer":""}},[i("div",{staticClass:"d-block text-center"},[i("h4",[e._v("The items found most useful in the example: are New chairs for public schools and a dog park.")]),i("img",{attrs:{src:a("3c71"),width:"600",height:"400"}})]),i("div",{staticClass:"text-left"},[i("h4",[e._v("Notes:")]),i("ul",[i("li",[e._v(" You can see how much money you spent and how much you have left in the chart area.")]),i("li",[e._v("You can view more details about each item by clicking the arrow near it.")])])]),i("b-button",{attrs:{variant:"outline-primary",block:""},on:{click:function(t){return e.$bvModal.hide("bv-modal-example")}}},[e._v("Close")])],1),i("h3",[e._v("Your payment:")]),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("ul",[a("li",[e._v("20 cent payment for the task contingent on passing a quiz and doing the task. ")]),a("li",[e._v("10 cent bonus for correctly answering a survey after submitting the task.")])])])}],r={},o=r,s=(a("2727"),a("2877")),l=Object(s["a"])(o,i,n,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-016a352f.0c921e37.js.map