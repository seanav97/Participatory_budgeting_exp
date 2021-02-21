<template>
<div>
    <div v-if="!this.finished">
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Consistency check</h1>
        <br>
        <div style="padding-left: 25%;">
            <el-form :inline="true" :model="form" class="demo-form-inline" :rules="rules" ref="ruleForm">
                <el-form-item prop="allQuestions">
                    <h4>Question 1: Was the {{this.random_items[0].item_name}} one of your choices?</h4>
                    <br>
                    <el-form-item prop="question1">
                        <el-radio-group v-model="form.question1">
                            <el-radio :label="1">Yes</el-radio><br>
                            <el-radio :label="2">No</el-radio><br>
                        </el-radio-group>
                    </el-form-item>
                    <br><br>
                    <h4>Question 2: Was the {{this.random_items[1].item_name}} one of your choices?</h4>
                    <br>
                    <el-form-item prop="question2">
                        <el-radio-group v-model="form.question2" type="vertical">
                            <el-radio :label="1">Yes</el-radio><br>
                            <el-radio :label="2">No</el-radio><br>
                        </el-radio-group>
                    </el-form-item>
                    <br><br>
                    <h4>Question 3: Did you select any items that cost {{this.price}} pounds or more?</h4>
                    <br>
                    <el-form-item prop="question3">
                        <el-radio-group v-model="form.question3" type="vertical">
                            <el-radio :label="1">Yes</el-radio><br>
                            <el-radio :label="2">No</el-radio><br>
                        </el-radio-group>
                    </el-form-item>
                </el-form-item>
            </el-form>
        </div>
        <div style="text-align:center">
            <b-button variant="outline-primary" @click="submit">Submit and finish</b-button>
        </div>
    </div>
    <div style="width: 65%;padding-left: 30%;" v-else>
        <br><br>
        <h1 style="font-family: 'Courier New', monospace;text-align:center">Thank you for taking part in our study!</h1>
        <br><br>
        <b-alert style v-if="isConsistent" show variant="success">You passed the consistency check and you will recieve a 10 cent bonus</b-alert>
        <b-alert style v-else show variant="warning">You FAILED the consistency check and you will not recieve a 10 cent bonus</b-alert>
        <br><br>
        <b-alert style show variant="success">To be eligible for a payment, copy the token below and paste it in the MTurk HIT page! Close the page to exit the experiment.</b-alert>

    </div>
</div>
  
</template>

<script>
import { asyncLoading } from 'vuejs-loading-plugin'

export default {
    data(){
        return{
            random_items:JSON.parse(localStorage.getItem('items')).sort(() => Math.random() - Math.random()).slice(0, 2),
            price:100000,
            selected:JSON.parse(localStorage.getItem('final_items')).filter(x => x.item_value==1),
            isConsistent:false,
            form:{
                question1:0,
                question2:0,
                question3:0,
            },
            rules: {
                allQuestions: [{ validator: this.qAll,trigger: 'blur'}],
                question1: {required: true,message: 'Please answer all questions.',trigger: 'blur'},
                question2: {required: true,message: 'Please answer all questions.',trigger: 'blur'},
                question3: {required: true,message: 'Please answer all questions.',trigger: 'blur'},
            },
            finished:false
        }
    },
    methods:{
        qAll: async function(){
            if(this.form.question1 == 0 || this.form.question2 == 0 || this.form.question3 == 0){
                this.$loading(false);
                return new Promise((resolve, reject) => {reject(new Error('You must answer all questions'))});
            }
            let q1=false;
            let q2=false;
            let q3=false;
            let item1Selected=this.selected.some(cell => cell.item_name === this.random_items[0].item_name);
            let item2Selected=this.selected.some(cell => cell.item_name === this.random_items[1].item_name);
            let pricyItems=this.selected.filter(x => x.item_price>=this.price).length;
            

            if((item1Selected && this.form.question1 == 1) || (!item1Selected && this.form.question1 == 2))
                q1=true;

            if((item2Selected && this.form.question2 == 1) || (!item2Selected && this.form.question2 == 2))
                q2=true;

            if((pricyItems>0 && this.form.question3 == 1)||(pricyItems==0 && this.form.question3 == 2))
                q3=true;


            if(q1&&q2&&q3)
                return new Promise((resolve, reject) => {resolve(true)});
            else
                return new Promise((resolve, reject) => {reject(new Error('.'))});

        },
        submit:async function(){
            
            this.$loading(true);

            new Promise((resolve, reject) => {
                
                this.$refs.ruleForm.validate((valid) => {
                    if(valid){
                        this.isConsistent=true;
                            
                        resolve(1)

                    } 
                    else{
                        this.isConsistent=false;
                        if(this.form.question1 == 0 || this.form.question2 == 0 || this.form.question3 == 0)
                            return;            
                    } 
                });
            })
            .then(async (consistant_value)=>{
                let participant_ID=localStorage.getItem("participant_ID");
                let time=localStorage.getItem("startTime");
                let tutorial_time=parseInt(localStorage.getItem("tutorial_finish"))-parseInt(localStorage.getItem("consent_finish"));
                let quiz_time=parseInt(localStorage.getItem("quiz_finish"))-parseInt(localStorage.getItem("tutorial_finish"));
                let response_time=parseInt(localStorage.getItem("budgeting_finish"))-parseInt(localStorage.getItem("budgeting_start"));
                let consistant=consistant_value;
                let senario="City";
                let stage=1;
                let items=JSON.parse(localStorage.getItem("final_items"));
                let participant_info=JSON.parse(localStorage.getItem("participant_info"));
                await this.axios.post("http://localhost:3000/addExperiment",{
                participant_ID:participant_ID,
                time:time,
                tutorial_time:tutorial_time,
                quiz_time:quiz_time,
                response_time:response_time,
                consistant:consistant,
                senario:senario,
                stage:stage,
                items:items,
                participant_info:participant_info
            });
            })
            .then(()=>{
                this.finished=true;
                this.$loading(false);

            });

        }
    }
}
</script>

<style>

</style>