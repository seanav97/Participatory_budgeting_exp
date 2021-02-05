<template>
<scroll-fixed-header>
    <form-wizard @on-complete="onComplete"
                 @on-validate="handleValidation"
                 @on-error="handleErrorMessage">
        <h2 slot="title"></h2>   
        <tab-content title="Consent" :before-change="validateFirstStep">
          <consent ref="consentComp"/>
        </tab-content >
        <tab-content title="Instructions" :before-change="scrollToTop">
          <instructions/>
        </tab-content>
        <tab-content title="Consistency check" :before-change="scrollToTop">
          <quizz/>
        </tab-content>
        <tab-content title="A Few Questions" :before-change="scrollToTop">
          <personal-questions/>
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
    methods: {
        onComplete: function(){
            this.$router.push("/Knapsack_exp");
        },
        validateFirstStep:function() {
          return new Promise((resolve, reject) => {
             this.$refs.consentComp.$refs.ruleForm.validate((valid) => {
               if(valid) this.scrollToTop();
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