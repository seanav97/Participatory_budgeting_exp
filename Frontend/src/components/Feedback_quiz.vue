<template>
<div>
    <div v-if="!finished">
        <div style="text-align:center">

            <b-alert dismissible style v-if="isConsistent" show variant="success">You passed the consistency check and you will recieve a 10 cent bonus</b-alert>
            <b-alert dismissible style v-else show variant="warning">You FAILED the consistency check and you will not recieve a 10 cent bonus</b-alert>
            <br>
        </div>
        <h2 style="text-align:center">Feedback quiz  (fill to finish the experiment)</h2>
        <survey :survey="survey"></survey>
        <b-alert v-if="!filled_all" show variant="warning" style="width:30%;margin-left: 30%;font-size: 30px; text-align:center">
            Please answer all 3 questions
      </b-alert>
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

        function MyTextValidator(params) {
            var answers = params[0];
            if(answers!=null && answers.capture_ans!=null && answers.ease_ans!=null && answers.interface_ans!=null){
                return true;
            }
            return false;
        }

        Survey
            .FunctionFactory
            .Instance
            .register("MyTextValidator", MyTextValidator);

        var json = {
            questionTitleLocation:"hidden",
            questions: [
                {
                    type: "matrix",
                    name: "feedback",
                    "validators": [
                        {
                            "type": "expression",
                            "text": "Please answer all questions",
                            "expression": "MyTextValidator({feedback})"
                        }
                    ],
                    columns: [{value: 1,text: "Not at all"},{value: 2,text: "Not much"},{value: 3,text: "Neutral"},{value: 4,text: "Very"},{value: 5,text: "Extremely"}],
                    rows: [
                        {
                        value: "ease_ans",
                        text: "How easy did you find the voting task?",
                        isRequired: true
                        },
                        {
                        value: "interface_ans",
                        text: "How much did you like the user interface?",
                        isRequired: true
                        },
                        {
                        value: "capture_ans",
                        text: "How well did the input format capture your preferences?",
                        isRequired: true
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
            finished:false,
            filled_all:true
        }
    },
    methods:{
        submit:async function(result){
            let answers=result.data.feedback;
            let ease_ans=answers.ease_ans;
            let capture_ans=answers.capture_ans;
            let interface_ans=answers.interface_ans;
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