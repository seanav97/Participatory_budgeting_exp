<template>
    <div>
        <h2 style="text-align: center">Step 3: Quiz</h2>
        <br>
        <div style="padding-left: 10%;">
            
            <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="ruleForm">
                <el-form-item prop="allQuestions">
                    <b-card style="background-color:#e8e8e8; max-width:850px">
                        <h4 class="q-title" >Question 1</h4>
                        <div class="q-body" >
                            <h4> What is the main goal of this task?</h4>
                            <br>
                            <el-form-item prop="q1">
                                <el-radio-group v-model="formInline.question1">
                                    <el-radio :label="1">To think like John</el-radio><br>
                                    <el-radio :label="2">To select what to take within a carrying capacity of 10 pounds from a list of 65 items.</el-radio><br>
                                    <el-radio :label="3">To select what to take within a carrying capacity of 65 pounds from a list of 10 items.</el-radio><br>
                                    <el-radio :label="4">To have fun</el-radio><br>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                    </b-card>
                    <br>
                    <b-card style="background-color: #e8e8e8;max-width:850px">
                        <h4 class="q-title">Question 2</h4>
                        <div class="q-body">
                            <h4> You get a 10 cent bonus ...</h4>
                            <br>
                            <el-form-item prop="q2">
                                <el-radio-group v-model="formInline.question2" type="vertical">
                                    <el-radio :label="1">for passing the quiz</el-radio><br>
                                    <el-radio :label="2">for correctly answering a survey after submitting the task</el-radio><br>
                                    <el-radio :label="3">for doing the task</el-radio><br>
                                    <el-radio :label="4">for nothing</el-radio><br>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                    </b-card>
                    
                    <br>
                    <b-card style="background-color: #e8e8e8;">
                        <h4 class="q-title">Question 3</h4>
                        <div class="q-body">
                            <h4> What's wrong with clicking SUBMIT in the image?</h4>
                            <br>
                            <img style="margin-left:30px;border: 5px solid #555;" src="../assets/‏‏knapsack_example.png" width="650" height="425">
                            <el-form-item prop="q3" style="float:left;position:relative">
                                <el-radio-group v-model="formInline.question3" type="vertical">
                                    <el-radio style="margin-top:50px" :label="1">Everything is normal</el-radio><br>
                                    <el-radio style="margin-top:70px" :label="2">Some items are unselected</el-radio><br>
                                    <el-radio style="margin-top:70px" :label="3">Current total is lower than the limit</el-radio><br>
                                    <el-radio style="margin-top:70px" :label="4">None of the items are selected</el-radio><br>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                    </b-card>
                    <br>
                    <b-card style="background-color: #e8e8e8;">
                        <h4 class="q-title">Question 4</h4>
                        <div class="q-body">
                            <h4> What's wrong with clicking SUBMIT in the image?</h4>
                            <br>
                            <img style="margin-left:30px;border: 5px solid #555;" src="../assets/‏‏knapsack_empty_example.png" width="650" height="425">
                            <el-form-item prop="q4" style="float:left;position:relative">
                                <el-radio-group v-model="formInline.question4" type="vertical">
                                    <el-radio style="margin-top:50px" :label="1">Everything is normal</el-radio><br>
                                    <el-radio style="margin-top:70px" :label="2">Some items are unselected</el-radio><br>
                                    <el-radio style="margin-top:70px" :label="3">Total is lower than the limit</el-radio><br>
                                    <el-radio style="margin-top:70px" :label="4">None of the items are selected</el-radio><br>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                    </b-card>
                    
                </el-form-item>
            </el-form>
            <br>

        </div>
            <b-alert style="text-align:center;font-size: 200%;" show variant="warning">Double check yourself, you have only one chance! <br>
                            If you fail this quiz you can't continue to the next step.
                            If you need, you can click on the 'Back' button to read the instructions again.
            </b-alert>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            formInline:{
                question1:3,
                question2:2,
                question3:1,
                question4:4     
            },
            
            rules: {
                allQuestions: [{ validator: this.q1Vall,trigger: 'blur'}],
            },  
        }
        
    },
    methods:{
        q1Vall: async function(){
            if (this.formInline.question1 != 3 || this.formInline.question2 != 2 || this.formInline.question3 != 1 || this.formInline.question4 != 4) 
            {
                return new Promise((resolve, reject) => {reject(new Error('Wrong!'))});
            }
            else return new Promise((resolve, reject) => {resolve(true)});
        },    
    }
}
</script>

<style>
.zoom {
      transition: transform .2s; /* Animation */
    }

    .zoom:hover {
      transform: scale(2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
      position:absolute;
      right:0;
    }
.q-body{
    border-left: thick solid #3f9396;
    padding-left:50px;
    float: left;
    /* border-spacing: 50px 50px 50px 50px; */

}
.q-title{
    float: left;
    margin-top:65px;
    padding-right: 40px;
}
</style>