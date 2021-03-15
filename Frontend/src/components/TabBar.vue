<template>
<scroll-fixed-header>
    <form-wizard @on-complete="onComplete">
        <h2 slot="title"></h2>   
        <tab-content title="Consent" :before-change="validateFirstStep">
          <consent todo="You will select  how to distribute a budget of 500,000 pound, by selecting from a list of items." ref="consentComp"/>
        </tab-content>
        <tab-content title="Instructions" :before-change="validateInstructions">
          <instructions/>
        </tab-content>
      <tab-content title="Quiz" :before-change="validateQuiz">
          <quizz ref="quizComp"/>
        </tab-content>
        <tab-content title="A Few Questions" :before-change="scrollToTop">
          <personal-questions ref="persQuestions"/>
        </tab-content>

    </form-wizard>
</scroll-fixed-header>
    
  

</template>

<script>
import Consent from './Consent.vue';
import Instructions from './Instructions.vue';
import PersonalQuestions from './PersonalQuestions.vue';
import Quizz from './Quizz.vue';


export default {
    components: { Consent, Instructions, Quizz, PersonalQuestions },
    data() {
       return {
         formInline: {
           agree: ''
         },
         rules: {
           agree: {
             required: true,
             message: 'You must agree to participate',
             trigger: 'change'
           },
         }
        }
       },
    mounted(){
      
      // alert('dd');
      // asyncLoading(this.$parent.checkParticipant(),this.$parent.setConfigurations()).then().catch();
      // this.$parent.checkParticipant();
      // this.$parent.setConfigurations();
    },
    methods: {
        onComplete: function(){
          return new Promise((resolve, reject) => {
             this.$refs.persQuestions.$refs.ruleForm.validate((valid) => {
               if(valid){
                  let time=new Date().getTime();
                  localStorage.setItem('budgeting_start',JSON.stringify(time));
                  let participant_info={age:this.$refs.persQuestions.form.age,gender:this.$refs.persQuestions.form.gender,education:this.$refs.persQuestions.form.education,};
                  localStorage.setItem('participant_info',JSON.stringify(participant_info));
                  
                  let voting_method=localStorage.getItem('voting_method');
                  this.$router.push("/"+voting_method+"_exp");
                  // this.$router.push("/Knapsack_exp");
                 } 
               resolve(valid);
             });
           })
            
        },
        validateFirstStep:function() {
          return new Promise((resolve, reject) => {
             this.$refs.consentComp.$refs.ruleForm.validate((valid) => {
               if(valid){
                  let time=new Date().getTime();
                  localStorage.setItem('consent_finish',JSON.stringify(time));
                  this.scrollToTop();
                } 
               resolve(valid);
             });
           })
        },
        validateInstructions:function(){
          return new Promise((resolve, reject) => {
            let time=new Date().getTime();
            localStorage.setItem('tutorial_finish',JSON.stringify(time));
            this.scrollToTop();
            resolve(true);
          });
          
        },
        validateQuiz:function() {
          return new Promise((resolve, reject) => {
             this.$refs.quizComp.$refs.ruleForm.validate((valid) => {
               if(valid){
                let time=new Date().getTime();
                localStorage.setItem('quiz_finish',JSON.stringify(time));
                this.scrollToTop();
               }
               else{
                 this.$parent.blacklistUser();
                 this.$parent.$data.userBlacklisted=true;
                 localStorage.removeItem('participant_ID');
               }
               resolve(valid);
             });
           })
        },
        scrollToTop:function(){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          return true;
        }
    }
}
</script>

<style>

</style>