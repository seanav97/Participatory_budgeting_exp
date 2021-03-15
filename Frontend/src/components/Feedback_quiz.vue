<template>
<div>
    <div v-if="!finished">
        <div style="text-align:center">
            <!-- <h1 style="font-family: 'Courier New', monospace;text-align:center">Thank you for taking part in our study!</h1> -->
            <!-- <br><br> -->
            <b-alert dismissible style v-if="isConsistent" show variant="success">You passed the consistency check and you will recieve a 10 cent bonus</b-alert>
            <b-alert dismissible style v-else show variant="warning">You FAILED the consistency check and you will not recieve a 10 cent bonus</b-alert>
            <br>
        </div>
        <!-- <surveyVue :survey="survey"></surveyVue> -->
        <!-- <b-card style="background-color: #e8e8e8;"> -->
            <u><h2 style="text-align:center">Feedback quiz (if you fill it out, you'll recieve a 10 cent bonus)</h2></u>
            <survey :survey="survey"></survey>
        <!-- </b-card> -->
        <!-- <div class="column1">
            <u><h2>Feedback quiz (if you fill it out, you'll recieve a 10 cent bonus)</h2></u>
            <br><br>
            <el-form :inline="true" :model="form" class="demo-form-inline" ref="ruleForm">
                <el-form-item prop="allQuestions">
                    <b-card style="background-color: #e8e8e8">
                        <h4 class="q-title" >Question 1</h4>
                        <div class="q-body" >
                            <h4>How easy did you find the voting task? (5 being the easyest)</h4>
                            <br>
                            <b-form-rating v-model="form.question1" variant="warning" show-value no-border ></b-form-rating>
                        </div>
                    </b-card>
                    <br>
                    <b-card style="background-color: #e8e8e8">
                        <h4 class="q-title" >Question 2</h4>
                        <div class="q-body" >
                            <h4>How much did you like the user interface? (5 being the best)</h4>
                            <br>
                            <b-form-rating  v-model="form.question2" variant="warning" show-value></b-form-rating>
                        </div>
                    </b-card>
                    <br>
                    <b-card style="background-color: #e8e8e8">
                        <h4 class="q-title" >Question 3</h4>
                        <div class="q-body" >
                            <h4>How well did the input format capture your preferences? (5 being the best)</h4>
                            <br>
                            <b-form-rating  v-model="form.question3" variant="warning" show-value></b-form-rating>
                        </div>
                    </b-card>
                </el-form-item>
            </el-form>
        </div>
        <div class="column2">
            <b-button style="margin-top:150%" variant="primary" @click="submit">Submit and finish</b-button>
        </div>  -->
    </div> 
    <div v-else style="width:80%;padding-left: 25%;font-size: 50px;">
        <b-alert show variant="success">Thank you for participating in the experiment!</b-alert>
    </div> 
</div>
</template>

<script>
const config = require("../config.js");
import * as Survey from "survey-vue";
import "survey-vue/modern.css";

export default {
    // components: { Survey},
    props: ['isConsistent'],
    data(){
        Survey
            .StylesManager
            .applyTheme("modern");

        var json = {
            questionTitleLocation:"hidden",
            questions: [
                {
                type: "matrix",
                name: "feedback",
                title:"Feedback quiz (if you fill it out, you'll recieve a 10 cent bonus)",

                columns: [
                    {
                    value: 1,
                    text: "Not at all"
                    },
                    {
                    value: 2,
                    text: "Not much"
                    },
                    {
                    value: 3,
                    text: "Neutral"
                    },
                    {
                    value: 4,
                    text: "Very"
                    },
                    {
                    value: 5,
                    text: "Extremle"
                    }
                ],
                rows: [
                    {
                    value: "ease_ans",
                    text: "How easy did you find the voting task?"
                    },
                    {
                    value: "interface_ans",
                    text: "How much did you like the user interface?"
                    },
                    {
                    value: "capture_ans",
                    text: "How well did the input format capture your preferences?"
                    }
                ]
                },
            ]
            };
        var model = new Survey.Model(json);
        // window.survey = new Survey.Model(json);
        model
            .onComplete
            .add(this.submit);
        return{
            survey: model,
            model:model,
            form:{
                question1:0,
                question2:0,
                question3:0,
            },
            finished:false
        }
    },
    methods:{
        submit:async function(result){
            let answers=result.data.feedback;
            console.log(answers);
            let ease_ans=0;
            let capture_ans=0;
            let interface_ans=0;
            if(answers!=null){
                if(answers.capture_ans!=null) capture_ans=answers.capture_ans;
                if(answers.ease_ans!=null) ease_ans=answers.ease_ans;
                if(answers.interface_ans!=null) interface_ans=answers.interface_ans;
            }
            this.$loading(true);
            let experiment_id=localStorage.getItem("experiment_id");
            await this.axios.post("http://"+config.data.server+"/addFeedback",{
                experiment_id:experiment_id,
                q_ease:ease_ans,
                q_interface:interface_ans,
                q_capture:capture_ans
            });
            this.finished=true;
            this.$loading(false);
        }
    }
}
</script>

<style>
.q-body{
    border-left: thick solid #3f9396;
    padding-left:30px;
    float: left;

}
.q-title{
    float: left;
    margin-top:40px;
    padding-right: 40px;
}
.column1 {
    float: left;
    width: 85%;
    padding-left: 10%;
}
.column2 {
    float: left;
    width: 15%;
}
.sq-title{
    color: red;
}
</style>