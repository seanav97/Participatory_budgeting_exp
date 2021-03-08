<template>
<div>
    <fieldset>
        <h2 style="text-align: center"><u>Step 1: Consent</u></h2>
        <br>
        <b-card style="background-color:#e8e8e8; max-width:900px;margin: auto;">
            <p>Please consider this information carefully before deciding whether to accept this task.</p>
            <hr>
            <p><strong>PURPOSE OF RESEARCH:</strong> To understand people’s preferences about what to take to a mission to a desert island.</p>
            <hr>
            <p><strong>WHAT YOU WILL DO:</strong> {{this.getTodo()}}</p>
            <hr>
            <p><strong>TIME REQUIRED:</strong> Participation will take approximately 4 minutes.</p>
            <hr>
            <p><strong>RISKS:</strong> There are no anticipated risks associated with participating in this study. The effects of participating should be comparable to those you would experience from viewing a computer monitor for 4 minutes and using a mouse.</p>
            <hr>
            <p><strong>COMPENSATION:</strong> Upon completion of this task, you will receive a code to enter on the Amazon Mechanical Turk task page, and you will receive the amount that was indicated on the task page.</p>
            <hr>
            <p><strong>CONFIDENTIALITY:</strong> Your participation in this study will remain confidential. Your responses will be assigned a code number. You will NOT be asked to provide your name. You will be asked to provide your age and gender. Throughout the experiment, we may collect data such as browser type, operating system version, mouse movements, and error rates.</p>
            <hr>
            <p><strong>PARTICIPATION AND WITHDRAWAL:</strong> Your participation in this study is voluntary, and you may withdraw and return the task to Amazon Mechanical Turk at any time. You will receive a compensation only if you complete the task. You may withdraw at any time by closing the web page of the task.</p>
            <hr>
            <p><strong>AGREEMENT:</strong> The nature and purpose of this research have been sufficiently explained and I agree to participate in this study. I understand that I am free to withdraw at any time.</p>
        </b-card>
    </fieldset>
    <div style="text-align: center">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="ruleForm">
            <el-form-item label="temp" prop="agree">
                <span slot="label"><b>Do you agree and will participate in this study?</b></span>
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
    props: ['todo'],
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
        getTodo(){
            let voting_method=localStorage.getItem('voting_method');
            if(voting_method=='Knapsack')
                return 'You will select  how to distribute a budget of 500,000 pound, by selecting from a list of items.';
            else if(voting_method=='k_approval')
                return 'You need to select up to 5 projects from a list of 10. There are no right or wrong answers to this task.';
            else if(voting_method=='Ranking_value')
                return 'You need to rank the projects from the most important to the least important according to your best judgment.';
            else if(voting_method=='Ranking_value_money')
                return 'Rank the projects by "value for money" according to your best judgement.';
            else if(voting_method=='Threshold')
                return 'If 500,000 pounds are divided among the projects based on their importance, which projects do you think should get at least 50,000?';
            else if(voting_method=='Utilities')
                return 'You will be asked to distribute 500,000 pounds among 10 projects.';
        }
    }
}   
</script>

<style>
    /* p {
    max-width: 85%;
    padding-left: 20%;
    } */
</style>