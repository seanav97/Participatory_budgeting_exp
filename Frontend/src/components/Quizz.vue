<template>
    <div style="padding-left: 30%;">
        
        <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="ruleForm">
            <el-form-item prop="allQuestions">
                <h4>Question 1: What is the main goal of this task?</h4>
                <br>
                <el-form-item prop="q1">
                    <el-radio-group v-model="formInline.question1">
                        <el-radio :label="1">To think like John</el-radio><br>
                        <el-radio :label="2">To select what to take within a carrying capacity of 10 pounds from a list of 65 items.</el-radio><br>
                        <el-radio :label="3">To select what to take within a carrying capacity of 65 pounds from a list of 10 items.</el-radio><br>
                        <el-radio :label="4">To have fun</el-radio><br>
                    </el-radio-group>
                </el-form-item>
                <br><br>
                <h4>Question 2: You get a 10 cent bonus ...</h4>
                <br>
                <el-form-item prop="q2">
                    <el-radio-group v-model="formInline.question2" type="vertical">
                        <el-radio :label="1">for passing the quiz</el-radio><br>
                        <el-radio :label="2">for correctly answering a survey after submitting the task</el-radio><br>
                        <el-radio :label="3">for doing the task</el-radio><br>
                        <el-radio :label="4">for nothing</el-radio><br>
                    </el-radio-group>
                </el-form-item>
                <br><br>
                <h4>Question 3: What's wrong with clicking SUBMIT in the image below?</h4>
                <br>
                <el-form-item prop="q3">
                    <el-radio-group v-model="formInline.question3" type="vertical">
                        <el-radio :label="1">Everything is normal</el-radio><br>
                        <el-radio :label="2">Some items are unselected</el-radio><br>
                        <el-radio :label="3">Current total is lower than the limit</el-radio><br>
                        <el-radio :label="4">None of the items are selected</el-radio><br>
                    </el-radio-group>
                </el-form-item>
                <br><br>
                <h4>Question 4: What's wrong with clicking SUBMIT in the image below?</h4>
                <br>
                <el-form-item prop="q4">
                    <el-radio-group v-model="formInline.question4" type="vertical">
                        <el-radio :label="1">Everything is normal</el-radio><br>
                        <el-radio :label="2">Some items are unselected</el-radio><br>
                        <el-radio :label="3">Total is lower than the limit</el-radio><br>
                        <el-radio :label="4">None of the items are selected</el-radio><br>
                    </el-radio-group>
                </el-form-item>
            </el-form-item>
        </el-form>
        <el-alert title="Double check yourself, you have only one chance!
                        If you fail this quiz you can't continue to the next step.
                        If you need, you can click on PREVIOUS button to read the instructions again."
                    type="warning" :closable="false"  show-icon style="width: 70%">
         </el-alert>

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

</style>