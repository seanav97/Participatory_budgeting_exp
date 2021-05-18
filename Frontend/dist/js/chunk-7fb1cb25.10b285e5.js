(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fb1cb25"],{"0311":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroll-fixed-header",[o("form-wizard",{attrs:{"finish-button-text":"Submit"},on:{"on-complete":e.onComplete}},[o("h2",{attrs:{slot:"title"},slot:"title"}),o("tab-content",{attrs:{title:"Consent","before-change":e.validateFirstStep}},[o("consent",{ref:"consentComp",attrs:{todo:"You will select  how to distribute a budget of 500,000 pound, by selecting from a list of items."}})],1),o("tab-content",{attrs:{title:"Demographic Questions","before-change":e.validateDemografic}},[o("personal-questions",{ref:"persQuestions"})],1),o("tab-content",{attrs:{title:"Instructions","before-change":e.validateInstructions}},[o("instructions",{ref:"inst"})],1),o("tab-content",{attrs:{title:"Quiz","before-change":e.validateQuiz}},[o("quizz",{ref:"quizComp"})],1)],1)],1)},i=[],n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("fieldset",[e._m(0),o("br"),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("p",[e._v("Please consider the following carefully before accepting the task.")]),o("hr"),o("p",[o("strong",[e._v("PURPOSE OF RESEARCH:")]),e._v(" To understand people’s preferences regarding the allocation of public budget and to evaluate the effectiveness of various decision-making algorithms.")]),o("hr"),o("p",[o("strong",[e._v("WHAT YOU WILL DO:")]),e._v(" You will provide your preferences regarding how to distribute a public budget in a hypothetical scenario. In such a scenario, you may be asked to evaluate how much you like a spending plan given your preferences, or how adequate you think a spending plan is given other people’s preferences.")]),o("hr"),o("p",[o("strong",[e._v("TIME REQUIRED:")]),e._v(" Participation will take approximately 10-15 minutes.")]),o("hr"),o("p",[o("strong",[e._v("RISKS:")]),e._v(" There are no anticipated risks associated with participating in this study. The effects of participating should be comparable to those you would experience from viewing a computer monitor for 4 minutes and using a mouse.")]),o("hr"),o("p",[o("strong",[e._v("COMPENSATION:")]),e._v(" Upon completion of this task, you will receive a base payment of $0.5. Furthermore, you can win a bonus payment of $0.5.")]),o("hr"),o("p",[o("strong",[e._v("CONFIDENTIALITY:")]),e._v(" You will be asked to provide your age, gender and education, no other personally identifiable information will be collected..")]),o("hr"),o("p",[o("strong",[e._v("PARTICIPATION AND WITHDRAWAL:")]),e._v(" Your participation in this study is voluntary, and you may withdraw and return the task to Amazon Mechanical Turk at any time by closing the web page of the task. You will receive a compensation only if you complete the task.")]),o("hr"),o("p",[o("strong",[e._v("CONTACT:")]),e._v(" If you have any questions, concerns or complaints about this research study, please contact the researcher for this study at improve.pb@gmail.com."),o("br"),e._v(" Additionally, if you have any questions about your rights as participants in this experiment, please contact the Research Oversight and Compliance Office - Human Research Ethics Program at the University of Toronto (ethics.review@utoronto.ca, 416-946-3273).")]),o("hr"),o("p",[o("strong",[e._v("AGREEMENT:")]),e._v(" The nature and purpose of this research have been sufficiently explained and I agree to participate in this study. I understand that I am free to withdraw at any time.")])])],1),o("div",{staticStyle:{"text-align":"center"}},[o("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,rules:e.rules}},[o("el-form-item",{attrs:{label:"temp",prop:"check_agree"}},[o("span",{staticStyle:{"font-size":"20px"},attrs:{slot:"label"},slot:"label"},[o("b",[e._v("Do you agree to participate in this study?")])]),o("el-checkbox",{attrs:{size:"medium"},model:{value:e.formInline.check_agree,callback:function(t){e.$set(e.formInline,"check_agree",t)},expression:"formInline.check_agree"}})],1),e.formInline.check_agree?e._e():o("b-alert",{staticStyle:{"text-align":"center"},attrs:{show:"",variant:"danger"}},[e._v("You must agree to participate.")])],1)],1)])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h2",{staticStyle:{"text-align":"center"}},[o("u",[e._v("Step 1: Consent")])])}],s={props:["todo"],data(){return{formInline:{check_agree:!1},rules:{check_agree:[{validator:this.validateAgreement,trigger:"blur"}]}}},methods:{getTodo(){let e=localStorage.getItem("voting_method");return"Knapsack"==e?"You will select how to distribute a budget of $500,000, by selecting from a list of items.":"k_approval"==e?"You need to select up to 5 projects from a list of 10. There are no right or wrong answers to this task.":"Ranking_value"==e?"You need to rank the projects from the most important to the least important according to your best judgment.":"Ranking_value_money"==e?'Rank the projects by "value for money" according to your best judgement.':"Threshold"==e?"If $500,000 are divided among the projects based on their importance, which projects do you think should get at least 50,000?":"Utilities"==e?"You will be asked to distribute $500,000 among 10 projects.":void 0},validateAgreement:async function(){return 0==this.formInline.check_agree?new Promise((e,t)=>{t(new Error(" "))}):new Promise((e,t)=>{e(!0)})}}},l=s,c=(o("cb4b"),o("2877")),u=Object(c["a"])(l,n,r,!1,null,null,null),h=u.exports,m=o("f104"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",{staticStyle:{"text-align":"center"}},[e._v("Step 2: Demographic Questions")]),o("br"),o("br"),o("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form,rules:e.rules}},[o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"550px",margin:"auto"}},[o("el-form-item",[o("h3",[e._v("How old are you?")]),o("el-input-number",{staticStyle:{"margin-left":"30px"},attrs:{size:"medium",min:18,max:90},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),o("br"),o("br"),o("el-form-item",{attrs:{prop:"gender"}},[o("h3",[e._v("Gender:")]),o("el-select",{staticStyle:{"text-align":"center","margin-left":"30px"},attrs:{placeholder:"Select your gender"},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},e._l(e.genders,(function(e){return o("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1),o("br"),o("br"),o("el-form-item",{attrs:{prop:"education"}},[o("h3",[e._v("Education:")]),o("el-select",{staticStyle:{"margin-left":"30px"},attrs:{placeholder:"Select your education"},model:{value:e.form.education,callback:function(t){e.$set(e.form,"education",t)},expression:"form.education"}},e._l(e.educations,(function(e){return o("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1)],1)],1),o("br"),o("br")],1)},p=[],g={data(){return{rules:{gender:{required:!0,message:"Please enter your gender.",trigger:"change"},education:{required:!0,message:"Please enter your education",trigger:"change"}},form:{age:18,gender:"",education:""},genders:[{value:"Male"},{value:"Female"},{value:"Other"}],educations:[{value:"Less than High School"},{value:"High School/GED"},{value:"College"},{value:"Graduate degree"}]}}},f=g,b=(o("6864"),Object(c["a"])(f,d,p,!1,null,"10c40249",null)),v=b.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0, shrink-to-fit=yes"}}),o("h2",{staticStyle:{"text-align":"center"}},[e._v("Step 4: Quiz")]),o("br"),o("div",{staticStyle:{"padding-left":"10%"}},[o("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",staticStyle:{"white-space":"normal"},attrs:{inline:!0,model:e.formInline,rules:e.rules}},[o("el-form-item",{attrs:{prop:"allQuestions"}},[o("b-card",{staticStyle:{"background-color":"#e8e8e8"}},[o("h4",{staticClass:"q-title"},[e._v("Question 1")]),o("div",{staticClass:"q-body"},[o("h4",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.questions.q1.q))]),o("br"),o("el-form-item",{attrs:{prop:"q1"}},[o("el-radio-group",{model:{value:e.formInline.question1,callback:function(t){e.$set(e.formInline,"question1",t)},expression:"formInline.question1"}},[o("el-radio",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:1}},[e._v(e._s(e.questions.q1.ans1))]),o("br"),o("el-radio",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:2}},[e._v(e._s(e.questions.q1.ans2))]),o("br"),o("el-radio",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:3}},[e._v(e._s(e.questions.q1.ans3))]),o("br"),o("el-radio",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:4}},[e._v(e._s(e.questions.q1.ans4))]),o("br")],1)],1)],1)]),o("br"),o("b-card",{staticStyle:{"background-color":"#e8e8e8"}},[o("h4",{staticClass:"q-title"},[e._v("Question 2")]),o("div",{staticClass:"q-body"},[o("h4",{staticStyle:{"white-space":"pre-line"}},[e._v(" "+e._s(e.questions.q2.q))]),o("br"),o("el-form-item",{attrs:{prop:"q2"}},[o("el-radio-group",{attrs:{type:"vertical"},model:{value:e.formInline.question2,callback:function(t){e.$set(e.formInline,"question2",t)},expression:"formInline.question2"}},[o("el-radio",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:1}},[e._v(e._s(e.questions.q2.ans1))]),o("br"),o("el-radio",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:2}},[e._v(e._s(e.questions.q2.ans2))]),o("br"),o("el-radio",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:3}},[e._v(e._s(e.questions.q2.ans3))]),o("br"),o("el-radio",{staticStyle:{"white-space":"pre-wrap"},attrs:{label:4}},[e._v(e._s(e.questions.q2.ans4))]),o("br")],1)],1)],1)]),o("br"),o("b-card",{staticStyle:{"background-color":"#e8e8e8"}},[o("h4",{staticClass:"q-title"},[e._v("Question 3")]),o("div",{staticClass:"q-body"},[o("h4",{staticStyle:{"white-space":"pre-line"}},[e._v(" "+e._s(e.questions.q3.q))]),o("br"),this.voting_method.includes("Rank")?o("img",{staticClass:"quizimage2",attrs:{src:e.getImageURL(this.voting_method+"1")}}):o("img",{staticClass:"quizimage1",attrs:{src:e.getImageURL(this.voting_method+"1")}}),o("el-form-item",{staticStyle:{float:"left",position:"relative"},attrs:{prop:"q3"}},[o("el-radio-group",{attrs:{type:"vertical"},model:{value:e.formInline.question3,callback:function(t){e.$set(e.formInline,"question3",t)},expression:"formInline.question3"}},[o("el-radio",{staticStyle:{"margin-top":"50px","white-space":"pre-wrap"},attrs:{label:1}},[e._v(e._s(e.questions.q3.ans1))]),o("br"),o("el-radio",{staticStyle:{"margin-top":"70px","white-space":"pre-wrap"},attrs:{label:2}},[e._v(e._s(e.questions.q3.ans2))]),o("br"),o("el-radio",{staticStyle:{"margin-top":"70px","white-space":"pre-wrap"},attrs:{label:3}},[e._v(e._s(e.questions.q3.ans3))]),o("br"),o("el-radio",{staticStyle:{"margin-top":"70px","white-space":"pre-wrap"},attrs:{label:4}},[e._v(e._s(e.questions.q3.ans4))]),o("br")],1)],1)],1)]),o("br"),o("b-card",{staticStyle:{"background-color":"#e8e8e8"}},[o("h4",{staticClass:"q-title"},[e._v("Question 4")]),o("div",{staticClass:"q-body"},[o("h4",{staticStyle:{"white-space":"pre-line"}},[e._v(" "+e._s(e.questions.q4.q))]),o("br"),this.voting_method.includes("Rank")?o("img",{staticClass:"quizimage2",attrs:{src:e.getImageURL(this.voting_method+"2")}}):o("img",{staticClass:"quizimage1",attrs:{src:e.getImageURL(this.voting_method+"2")}}),o("el-form-item",{staticStyle:{float:"left",position:"relative"},attrs:{prop:"q4"}},[o("el-radio-group",{attrs:{type:"vertical"},model:{value:e.formInline.question4,callback:function(t){e.$set(e.formInline,"question4",t)},expression:"formInline.question4"}},[o("el-radio",{staticStyle:{"margin-top":"50px","white-space":"pre-wrap"},attrs:{label:1}},[e._v(e._s(e.questions.q4.ans1))]),o("br"),o("el-radio",{staticStyle:{"margin-top":"70px","white-space":"pre-wrap"},attrs:{label:2}},[e._v(e._s(e.questions.q4.ans2))]),o("br"),o("el-radio",{staticStyle:{"margin-top":"70px","white-space":"pre-wrap"},attrs:{label:3}},[e._v(e._s(e.questions.q4.ans3))]),o("br"),o("el-radio",{staticStyle:{"margin-top":"70px","white-space":"pre-wrap"},attrs:{label:4}},[e._v(e._s(e.questions.q4.ans4))]),o("br")],1)],1)],1)])],1)],1),o("br")],1),o("b-alert",{staticStyle:{"text-align":"center","font-size":"130%"},attrs:{show:"",variant:"warning"}},[e._v("Double check yourself as you have only one chance! "),o("br"),e._v(" If you fail this quiz, you will not be able to participate in this study. "),o("br"),e._v(" If you need, you can click on the 'Back' button to read the instructions again. ")])],1)},_=[];const w=o("09b2"),k=localStorage.getItem("voting_method");console.log(w.data["Threshold"]);var q={data(){return{formInline:{question1:0,question2:0,question3:0,question4:0},rules:{allQuestions:[{validator:this.q1Vall,trigger:"blur"}]},questions:w.data[k],voting_method:k}},mounted(){this.voting_method=localStorage.getItem("voting_method"),this.questions=o("09b2").data[this.voting_method]},methods:{q1Vall:async function(){return 3!=this.formInline.question1||2!=this.formInline.question2||1!=this.formInline.question3||4!=this.formInline.question4?new Promise((e,t)=>{t(new Error("Wrong!"))}):new Promise((e,t)=>{e(!0)})},getImageURL(e){return o("28e7")("./"+e+".png")}}},S=q,T=(o("ce56"),Object(c["a"])(S,y,_,!1,null,null,null)),I=T.exports,j={components:{Consent:h,Instructions:m["a"],Quizz:I,PersonalQuestions:v},data(){return{formInline:{agree:""},rules:{agree:{required:!0,message:"You must agree to participate",trigger:"change"}}}},mounted(){},methods:{onComplete:function(){return new Promise((e,t)=>{let o=localStorage.getItem("voting_method");this.$router.push("/"+o+"_exp")})},validateFirstStep:function(){return new Promise((e,t)=>{this.$refs.consentComp.$refs.ruleForm.validate(t=>{if(t){let e=(new Date).getTime();localStorage.setItem("consent_finish",JSON.stringify(e)),this.scrollToTop(),this.$refs.inst.voting_method=localStorage.getItem("voting_method"),this.$refs.quizComp.voting_method=localStorage.getItem("voting_method"),this.$refs.quizComp.questions=o("09b2").data[localStorage.getItem("voting_method")]}e(t)})})},validateInstructions:function(){return new Promise((e,t)=>{let o=(new Date).getTime();localStorage.setItem("tutorial_finish",JSON.stringify(o)),this.scrollToTop(),e(!0)})},validateDemografic:function(){return new Promise((e,t)=>{this.$refs.persQuestions.$refs.ruleForm.validate(t=>{if(t){let e=(new Date).getTime();localStorage.setItem("budgeting_start",JSON.stringify(e));let t={age:this.$refs.persQuestions.form.age,gender:this.$refs.persQuestions.form.gender,education:this.$refs.persQuestions.form.education};localStorage.setItem("participant_info",JSON.stringify(t)),this.scrollToTop()}e(t)})})},validateQuiz:function(){return new Promise((e,t)=>{this.$refs.quizComp.$refs.ruleForm.validate(t=>{if(t){let e=(new Date).getTime();localStorage.setItem("quiz_finish",JSON.stringify(e))}else this.$parent.blacklistUser(),this.$parent.$data.userBlacklisted=!0,localStorage.removeItem("participant_ID");e(t)})})},scrollToTop:function(){return document.body.scrollTop=0,document.documentElement.scrollTop=0,!0}}},x=j,P=Object(c["a"])(x,a,i,!1,null,null,null);t["default"]=P.exports},"09b2":function(e,t,o){"use strict";o.r(t),o.d(t,"data",(function(){return i}));o("1b6e");const a=localStorage.getItem("num_of_projects"),i={Utilities:{q1:{q:"What is the main goal of this task?",ans1:"To learn about the city budget.",ans2:"To distribute 100 projects among 10 points according to how important you think each point is",ans3:"To distribute 100 points among "+a+" projects according to how important you think each project is",ans4:"To have fun"},q2:{q:"What does the NORMALIZE button do?",ans1:"Finish the task",ans2:"Automatically adjust your values to add up to 100 while keeping the ratio",ans3:"Randomly splits the 100 points",ans4:"Nothing"},q3:{q:"What's wrong with the image below?",ans1:"Current total not equal to Target.\n      NORMALIZE button will fix it",ans2:"Some items are assigned 0 points",ans3:"Target is larger than the current total",ans4:"Nothing is wrong, I can click on the CONTINUE \n      button and finish the task"},q4:{q:"Suppose Alex's ratings for the items are as shown below, which statement is true?",ans1:"'Security Cameras' > 'Laundry Access in Public Schools' > '24H public toilet'",ans2:"'Computers for the community learning center' > 'Security Cameras'",ans3:"'Laundry Access in Public Schools' > 'Security Cameras'",ans4:"'24H public toilet' > 'Security Cameras' > 'Laundry Access in Public Schools'"}},Knapsack:{q1:{q:"What is the main goal of this task?",ans1:"To learn about the city budget.",ans2:"To select exactly 3 projects out of a list of "+a+" projects.",ans3:"To select my preferred projects from a list of "+a+" projects given a budget limit.",ans4:"To have fun"},q2:{q:"You get a 50 cent bonus ...",ans1:"For passing this quiz",ans2:"For correctly answering a consistency test after submitting the task",ans3:"For doing the task",ans4:"For nothing"},q3:{q:"What's wrong with clicking SUBMIT in the image below?",ans1:"Nothing is wrong",ans2:"Some items are unselected",ans3:"Current total is lower than the limit",ans4:"None of the items are selected"},q4:{q:"What's wrong with clicking SUBMIT in the image below?",ans1:"Nothing is wrong",ans2:"Some items are unselected",ans3:"Total is lower than the limit",ans4:"None of the items are selected"}},k_approval:{q1:{q:"What is the main goal of this task?",ans1:"To learn about the city budget.",ans2:"To select up to "+a+" projects from a list of 5 projects",ans3:"To select up to 5 projects from a list of "+a+" projects",ans4:"To have fun"},q2:{q:"You get a 50 cent bonus ...",ans1:"For passing the quiz",ans2:"For correctly answering a survey after submitting the task",ans3:"For doing the task",ans4:"For nothing"},q3:{q:"What's wrong with clicking SUBMIT in the image below?",ans1:"Nothing is wrong",ans2:"Some items are unselected",ans3:"Current total is lower than the limit",ans4:"None of the items are selected"},q4:{q:"What's wrong with clicking SUBMIT in the image below?",ans1:"Nothing is wrong",ans2:"Some items are unselected",ans3:"Total number of items is lower than the limit",ans4:"None of the items are selected"}},Ranking_value:{q1:{q:"Please select the correct answer:",ans1:"Projects at the TOP of the list are LESS important than projects on the BOTTOM of the list.",ans2:"Projects at the BOTTOM of the list are MORE important than projects on the TOP of the list.",ans3:"Projects at the TOP of the list are MORE important than projects on the BOTTOM of the list.",ans4:"There are no differences"},q2:{q:"You get a 50 cent bonus ...",ans1:"For passing the quiz",ans2:"For correctly answering a survey after submitting the task",ans3:"For doing the task",ans4:"For nothing"},q3:{q:"In the ranking below, which item is the most important?",ans1:"Computers for the community learning center",ans2:"Dog park",ans3:"Security Cameras",ans4:"24H public toilet"},q4:{q:"In the ranking below, which item is MORE important than \n 'Sheltered Bike Parking at the Main Library'?",ans1:"Dog Park",ans2:"Security Cameras",ans3:"24H public toilet",ans4:"Laundry Access in Public Schools"}},Threshold:{q1:{q:"What is the main goal of this task?",ans1:"To learn about the city budget.",ans2:"To select the projects that I think should receive at least 100 points, given that 10 points are to be distributed among the projects based on their importance.",ans3:"To select the projects that I think should receive at least 10 points, given that 100 points are to be distributed among the projects based on their importance.",ans4:"To have fun"},q2:{q:"You get a 50 cent bonus ...",ans1:"For passing the quiz",ans2:"For correctly answering a survey after submitting the task",ans3:"For doing the task",ans4:"For nothing"},q3:{q:"What's wrong with clicking SUBMIT in the image below?",ans1:"Nothing is wrong",ans2:"Some items are unselected",ans3:"Current total is lower than the limit",ans4:"None of the items are selected"},q4:{q:"What's wrong with clicking SUBMIT in the image below?",ans1:"Nothing is wrong",ans2:"Some items are unselected",ans3:"Total number of items is lower than the limit",ans4:"None of the items are selected"}},Ranking_value_money:{q1:{q:"Please select the correct answer:",ans1:'Projects at the TOP of the list are LOWER in "value for money" than projects on the BOTTOM of the list',ans2:'Projects at the BOTTOM of the list are HIGHER in "value for money" than projects on the TOP of the list',ans3:'Projects at the TOP of the list are HIGHER in "value for money" than projects on the BOTTOM of the list',ans4:"There are no differences"},q2:{q:"Suppose the cost of a 'Dog Park' is equal to 250 and that your utility from it is 25. \n Please select the correct answer:",ans1:"The value for money a 'Dog Park' is equal to 250",ans2:"The value for money a 'Dog Park' is equal to 0.1",ans3:"The value for money a 'Dog Park' is equal to 25",ans4:"The value for money a 'Dog Park' is equal to 10"},q3:{q:"In the image below, suppose your utility for '24H public toilet' is 10,000 \n and for 'Laundry Access in Public Schools' is 1000",ans1:"I will rank 'Laundry Access in Public Schools' higher than '24H public toilet'",ans2:"I will rank '24H public toilet' higher than 'Laundry Access in Public Schools'",ans3:'There are no differences between the "value for money" of each item',ans4:"I don't know the utilities of Alex"},q4:{q:"In the image below, suppose your utility for '24H public toilet' is 250,000, \n for 'Dog Park' is 200,000 and for 'The Sustainable Energy Pilot' is 10,000. \nWhat will be your ranking(from highest to lowest 'value for money')?",ans1:"'The Sustainable Energy Pilot' > 'Dog Park' > '24H public toilet'",ans2:"'24H public toilet' > 'The Sustainable Energy Pilot' > 'Dog Park'",ans3:"'Dog Park' > '24H public toilet' > 'The Sustainable Energy Pilot'",ans4:"'The Sustainable Energy Pilot' > '24H public toilet' > 'Dog Park'"}}}},2727:function(e,t,o){"use strict";var a=o("5963"),i=o.n(a);i.a},"28e7":function(e,t,o){var a={"./Knapsack1.png":"5ff1","./Knapsack2.png":"3944","./Ranking_value1.png":"1cda","./Ranking_value2.png":"4c23","./Ranking_value_money1.png":"bf70","./Ranking_value_money2.png":"0cf4","./Threshold1.png":"b9b2","./Threshold2.png":"4971","./Utilities1.png":"c033","./Utilities2.png":"e0c0","./k_approval1.png":"25fc","./k_approval2.png":"da5f"};function i(e){var t=n(e);return o(t)}function n(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=n,e.exports=i,i.id="28e7"},"2aec":function(e,t,o){e.exports=o.p+"img/Ranking_value.a0ce9058.gif"},"2b9d":function(e,t,o){},"3a34":function(e,t,o){},5963:function(e,t,o){},6864:function(e,t,o){"use strict";var a=o("a8ee"),i=o.n(a);i.a},"712f":function(e,t,o){e.exports=o.p+"img/Ranking_value_money.653ee03b.gif"},a8ee:function(e,t,o){},cb4b:function(e,t,o){"use strict";var a=o("3a34"),i=o.n(a);i.a},ce56:function(e,t,o){"use strict";var a=o("2b9d"),i=o.n(a);i.a},f104:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("fieldset",[o("h2",{staticStyle:{"text-align":"center"}},[e._v("Step 3: Instructions")]),o("br"),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("The task:")]),e._v(" You are a resident in Utopia City and the city council has decided to spend a portion of the city budget this year on improving the residents’ quality of life. Several types of infrastructure upgrades, located across the city, have been proposed. Based on earlier discussions with the residents, the list has been narrowed down to "+e._s(e.num_of_projects)+" projects. Unfortunately, the budget is not sufficient to implement all "+e._s(e.num_of_projects)+" projects, so you have the opportunity to help decide which projects should be prioritized. ")]),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("What you need to do: ")]),o("br"),o("p",[e._v("(If the video looks blurry, you can double-click on it to improve the quality and to see it in full screen)")]),o("iframe",{attrs:{src:e.getVideo(),width:"850",height:"395",allowfullscreen:""}})]),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("The next steps:")]),o("br"),o("h5",[e._v("1) Quiz")]),e._v(" You will answer a quiz based on the information you learned from this page. "),o("br"),o("br"),o("h5",[e._v("2) The Task")]),e._v(" You will choose the projects you'd like to see funded. "),o("br"),o("br"),o("h5",[e._v("3) Consistency check")]),e._v(" You will be asked 3 simple questions about your choices, in order to make sure you paid attention (answering all three questions correctly will grant you the bonus payment). "),o("br"),o("br"),o("h5",[e._v("4) Feedback")]),e._v(" The final part is for you to give us feedback on your experience (you must complete this step to get your payment). ")]),o("b-card",{staticStyle:{"background-color":"#e8e8e8","max-width":"900px",margin:"auto"}},[o("h3",[e._v("Your payment:")]),o("ul",[o("li",[e._v("50 cent payment for the task contingent on passing a quiz and finishing the subsequent steps. ")]),o("li",[e._v("50 cent bonus for correctly answering a consistency test after submitting the task.")])])])],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["Utilities"==e.voting_method?a("div",[a("br"),e._v(" You will be asked to distribute 100 points among "+e._s(e.num_of_projects)+" projects. The more points you assign to an item, the more important you think the item is to your city. "),a("br"),a("br"),a("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. The projects that Alex finds most useful (in decreasing order of importance) are: "),e._m(0),e._v(" For example, in the following image, you can see a "),a("b",[e._v("possible rating")]),e._v(" by Alex: "),a("br"),a("br"),a("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("4211"),width:"70%"}}),a("br"),a("br"),a("b",[e._v("Note:")]),a("br"),e._v(" You can use the Normalize button to automatically adjust your values to add up to 100 while keeping the relative importance of items intact. You will only be able to press the SUBMIT button if the values add up to 100. ")]):"Knapsack"==e.voting_method?a("div",[a("br"),e._v(" The city council has reserved a budget of $500,000 to fund infrastructure projects this year. You need to select the projects that you would personally like to see funded given this budget limit. "),a("br"),a("br"),a("b",[e._v("Below is an example")]),e._v(" of the interface you will be using, filled out by an imaginary resident named Alex. The projects that Alex prefers are: "),e._m(1),e._v(" On the left you can see the total cost of the selected projects and the unused portion of the budget. "),a("br"),a("br"),a("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("aa3d"),width:"90%"}}),a("br"),a("br"),a("b",[e._v("Note:")]),a("br"),e._v(" Alex can no longer add another project even through he has not exhausted his entire budget. ")]):"k_approval"==e.voting_method?a("div",[a("br"),e._v(" You will be presented with "+e._s(e.num_of_projects)+" projects and asked to select up to 5 projects that you would most like to see funded "),a("br"),a("br"),a("b",[e._v("Below is an example")]),e._v(" of the interface you will be using, filled out by an imaginary resident named Alex. "),a("br"),e._v(" The projects that Alex would like to see funded are: "),e._m(2),e._v(" In the following image, you can see the choices of Alex and the number of projects selected. Up to two additional projects can be selected. "),a("br"),a("br"),a("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("0b2d"),width:"90%"}})]):"Ranking_value"==e.voting_method?a("div",[a("br"),e._v(" Rank the suggested projects from most to least important according to your preferences. "),a("br"),a("br"),a("b",[e._v("Below is an example")]),e._v(" of the interface you will be using. "),a("br"),e._v(" You will be asked to rank the items from MOST important (at the top) to the LEAST important (bottom). "),a("br"),e._v(" You can CLICK and DRAG on an item to change its ranking in the list. "),a("br"),a("br"),a("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("2aec"),width:"60%"}})]):"Threshold"==e.voting_method?a("div",[a("br"),e._v(" Select each of the following projects ONLY if the answer to the following question is YES. "),a("br"),e._v(" If 100 points are divided among the projects based on their importance, should this project get AT LEAST 10 points? "),a("br"),e._v(" Use your best judgement. "),a("br"),a("br"),a("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. "),a("br"),e._v(" The projects that Alex finds worth at least 10 out of 100 points are: "),e._m(3),e._v(" In the following image, you can see the choices of Alex and the number of selected proejcts. "),a("br"),a("br"),a("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("9cea"),width:"90%"}})]):"Ranking_value_money"==e.voting_method?a("div",[a("br"),e._v(" You need to rank the projects by “value for money”, which measures the project's importance to you relative to the cost of the project. "),a("br"),a("br"),a("b",[e._v("Below is an example")]),e._v(" of the interface you will be using shown for an imaginary citizen called Alex. "),a("br"),e._v(" The “value for money” for a project is computed as the utility of the project divided by cost. "),a("br"),e._v(' For example: if the project "Dog Park" costs $250,000 and you utility for it is 250, then the "value for money" for it will be 1000. '),a("br"),e._v(" Rank the projects from greatest “value for money” (top of the list) to least “value for money” (bottom of the list). "),a("br"),e._v(" CLICK and DRAG on the project to change its ranking in the list. "),a("br"),e._v(" You need to sort the list in DECREASING order of “value for money” (from the highest value to the lowest value). "),a("br"),a("br"),a("img",{staticStyle:{margin:"auto",display:"block"},attrs:{src:o("712f"),width:"60%"}}),a("br"),a("br"),a("b",[e._v("Note:")]),a("br"),e._v(" The interface you will use won’t include the columns “utility for Alex” and “Value for money”. You need to think independently about what is the utility for each project and compute the “value for money” for each project. ")]):a("div",[e._v(" no todo")])])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("Building an amphitheater in the public park")]),o("li",[e._v("Soak Up the Solar Power")]),o("li",[e._v("Security Cameras")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("We Need More Crosswalks")]),o("li",[e._v("Soak Up the Solar Power")]),o("li",[e._v("Remodel the Kitchen at the Youth Center")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("We Need More Crosswalks")]),o("li",[e._v("Security Cameras")]),o("li",[e._v("Interactive Technology for the Main Library")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("We Nedd More Crosswalks")]),o("li",[e._v("Security Cameras")]),o("li",[e._v("Nursing Pod for Mothers and Infants")])])}],s={data(){return{voting_method:localStorage.getItem("voting_method"),num_of_projects:localStorage.getItem("num_of_projects")}}},l=s,c=o("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null),h=(u.exports,{data(){return{voting_method:localStorage.getItem("voting_method"),num_of_projects:localStorage.getItem("num_of_projects")}},methods:{getVideo(){return"Utilities"==this.voting_method?"https://drive.google.com/file/d/1SLjAr3v55kvLrGNKH1CP0kmobBN9TDEa/preview":"Knapsack"==this.voting_method?"https://drive.google.com/file/d/14w7iHHImeV-WqFKBokdCfgHSf4pPWdOe/preview":"k_approval"==this.voting_method?"https://drive.google.com/file/d/1Vv9jacnlmmFGn7_xmrYTTGy_-KdpEeAh/preview":"Ranking_value"==this.voting_method?"https://drive.google.com/file/d/1pt25Mbwo7Ljn4qcg0XWVp3u052P-QRkd/preview":"Threshold"==this.voting_method?"https://drive.google.com/file/d/1PM2JXrbZkDfAfPbH92sXbc5w6SSxrGHd/preview":"Ranking_value_money"==this.voting_method?"https://drive.google.com/file/d/14ZYZHtBEmeb17j--E1QYz-Qk-Qx5v-yv/preview":void 0}}}),m=h,d=(o("2727"),Object(c["a"])(m,a,i,!1,null,null,null));t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-7fb1cb25.10b285e5.js.map