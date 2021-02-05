<template>
<div>
    <fieldset>
        <h2 style="text-align: center">Step 1: Consent</h2>
        <br>
        <p>Please consider this information carefully before deciding whether to accept this task.</p>
        <p><strong>PURPOSE OF RESEARCH:</strong> To understand people’s preferences about what to take to a mission to a desert island.</p>
        <p><strong>WHAT YOU WILL DO:</strong> You will be asked to distribute 100 points among 10 items.</p>
        <p><strong>TIME REQUIRED:</strong> Participation will take approximately 4 minutes.</p>
        <p><strong>RISKS:</strong> There are no anticipated risks associated with participating in this study. The effects of participating should be comparable to those you would experience from viewing a computer monitor for 4 minutes and using a mouse.</p>
        <p><strong>COMPENSATION:</strong> Upon completion of this task, you will receive a code to enter on the Amazon Mechanical Turk task page, and you will receive the amount that was indicated on the task page.</p>
        <p><strong>CONFIDENTIALITY:</strong> Your participation in this study will remain confidential. Your responses will be assigned a code number. You will NOT be asked to provide your name. You will be asked to provide your age and gender. Throughout the experiment, we may collect data such as browser type, operating system version, mouse movements, and error rates.</p>
        <p><strong>PARTICIPATION AND WITHDRAWAL:</strong> Your participation in this study is voluntary, and you may withdraw and return the task to Amazon Mechanical Turk at any time. You will receive a compensation only if you complete the task. You may withdraw at any time by closing the web page of the task.</p>

        <p><strong>AGREEMENT:</strong> The nature and purpose of this research have been sufficiently explained and I agree to participate in this study. I understand that I am free to withdraw at any time.</p>
    </fieldset>
    <div style="text-align: center">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="ruleForm">
            <el-form-item label="Do you agree and will participate in this study?" prop="agree">
                <el-select v-model="formInline.agree" placeholder=" ">
                    <el-option label="Yes" value="Yes"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</div>
  
</template>

<script>
export default {
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

    }
}   
</script>

<style>
    p {
    max-width: 85%;
    padding-left: 20%;
    }
</style>