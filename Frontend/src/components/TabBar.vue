<template>
<scroll-fixed-header>
    <form-wizard @on-complete="onComplete"
                 @on-validate="handleValidation"
                 @on-error="handleErrorMessage">
        <h2 slot="title"></h2>   
        <tab-content title="Consent" :before-change="validateFirstStep">
          <consent/>
          <div style="text-align: center">
              <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="ruleForm">
                  <el-form-item label="Do you agree and will participate in this study?" prop="agree">
                      <el-select v-model="formInline.agree" placeholder=" ">
                          <el-option label="Yes" value="Yes"></el-option>
                      </el-select>
                  </el-form-item>
              </el-form>
          </div>
        

        </tab-content>
        <tab-content title="Instructions">
          <instructions/>
        </tab-content>
        <tab-content title="Consistency check">
          <quizz/>
        </tab-content>
        <tab-content title="A Few Questions">
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
            // alert('Yay. Done!');
            this.$router.push("/Knapsack_exp");
        },
        validateFirstStep:function() {
            return new Promise((resolve, reject) => {
             this.$refs.ruleForm.validate((valid) => {
               resolve(valid);
             });
           })
            

        }
    }
}
</script>

<style>

</style>