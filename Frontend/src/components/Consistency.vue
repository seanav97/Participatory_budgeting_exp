<template>
<div>
    <h1 style="font-family: 'Courier New', monospace;text-align:center">Consistency check</h1>
    <br>
    <div style="margin-left:20%; width:60%">
        <el-form :inline="true" :model="form" class="demo-form-inline" :rules="rules" ref="ruleForm">
            <el-form-item prop="allQuestions">
                <b-card style="background-color:#e8e8e8;">
                    <h4 class="q-title" >Question 1</h4>
                    <div class="q-body" >
                        <h4>{{this.questions[this.voting_method].q1}}</h4>
                        <br>
                        <el-form-item prop="question1">
                            <el-radio-group v-model="form.question1">
                                <el-radio :label="1">Yes</el-radio><br>
                                <el-radio :label="2">No</el-radio><br>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                </b-card>
                <!-- <br> -->
                <b-card style="background-color:#e8e8e8;">
                    <h4 class="q-title" >Question 2</h4>
                    <div class="q-body" style="word-wrap: break-word;">
                        <h4 >{{this.questions[this.voting_method].q2}}</h4>
                        <br>
                        <el-form-item prop="question2">
                            <el-radio-group v-model="form.question2" type="vertical">
                                <el-radio :label="1">Yes</el-radio><br>
                                <el-radio :label="2">No</el-radio><br>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                </b-card>
                    
                <!-- <br> -->
                <b-card style="background-color:#e8e8e8;">
                    <h4 class="q-title" >Question 3</h4>
                    <div class="q-body" >
                        <h4>{{this.questions[this.voting_method].q3}}</h4>
                        <br>
                        <el-form-item prop="question3">
                            <el-radio-group v-model="form.question3" type="vertical">
                                <el-radio :label="1">Yes</el-radio><br>
                                <el-radio :label="2">No</el-radio><br>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                </b-card>
            </el-form-item>
        </el-form>
    </div>
    <div style="text-align:center">
        <b-button variant="primary" @click="submit">Submit</b-button>
    </div>
</div>
  
</template>

<script>
import { asyncLoading } from 'vuejs-loading-plugin';
const config = require("../config.js");


export default {
    data(){
        let random_items=JSON.parse(localStorage.getItem('items')).sort(() => Math.random() - Math.random()).slice(0, 4);
        return{
            // random_items:JSON.parse(localStorage.getItem('items')).sort(() => Math.random() - Math.random()).slice(0, 2),
            random_items:random_items,
            voting_method: localStorage.getItem('voting_method'),
            price:100000,
            selected:JSON.parse(localStorage.getItem('final_items')).filter(x => x.item_value>0),
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
            finished:false,
            questions:{
                Knapsack:
                {
                    q1:`Was "`+ random_items[0].item_name +`" one of your choices?`,
                    q2:`Was "`+random_items[1].item_name+`" one of your choices?`,
                    q3:`Did you select any projects that cost $100,000 or more?`
                },
                Utilities:
                {
                    q1:`Was "`+random_items[0].item_name+`" your highest rated choise?`,
                    q2:`Was "`+random_items[1].item_name+`" your lowest rated choice?`,
                    q3:`Did you assign some project with 25 points or more?`
                },
                k_approval:
                {
                    q1:`Was "`+random_items[0].item_name+`" one of your choices?`,
                    q2:`Was "`+random_items[1].item_name+`" one of your choices?`,
                    q3:`Did you select 3 projects or more?`
                },
                Ranking_value:
                {
                    q1:`Was "`+random_items[0].item_name+ `" more importent to you than "`+random_items[1].item_name+`"?`,
                    q2:`Was "`+random_items[1].item_name+ `" more importent to you than "`+random_items[2].item_name+`"?`,
                    q3:`Was "`+random_items[2].item_name+ `" more importent to you than "`+random_items[3].item_name+`"?`
                },
                Ranking_value_money:
                {
                    q1:`Did you rank "`+random_items[0].item_name+ `" higher than "`+random_items[1].item_name+`"?`,
                    q2:`Did you rank "`+random_items[1].item_name+ `" higher than "`+random_items[2].item_name+`"?`,
                    q3:`Did you rank "`+random_items[2].item_name+ `" higher than "`+random_items[3].item_name+`"?`
                },
                Threshold:
                {
                    q1:`Was "`+random_items[0].item_name+`" one of your choices?`,
                    q2:`Was "`+random_items[1].item_name+`" one of your choices?`,
                    q3:`Did you select 5 projects or more?`
                }
            }
        }
    },
    methods:{
        qAll: async function(){
            if(this.form.question1 == 0 || this.form.question2 == 0 || this.form.question3 == 0){
                this.$loading(false);
                // let html ="<html> <body> ##Name## </body> </html>";
                // let ResultHtml = html.replace("##Name##","<b>blabla</b>");
                // return new Promise((resolve, reject) => {reject(new Error(ResultHtml))});
                return new Promise((resolve, reject) => {reject(new Error('<b>You must answer all questions</b>'))});
            }
            let q1=false;
            let q2=false;
            let q3=false;

            let q1_answer=false;
            let q2_answer=false;
            let q3_answer=false;

            if(this.voting_method=='Knapsack'){
                q1_answer=this.selected.some(cell => cell.item_name === this.random_items[0].item_name);
                q2_answer=this.selected.some(cell => cell.item_name === this.random_items[1].item_name);
                q3_answer=this.selected.filter(x => x.item_price>=100000).length>0;
            }
            if(this.voting_method=='Utilities'){
                q1_answer=this.selected.some(cell => cell.item_name === this.random_items[0].item_name);
                q2_answer=this.selected.some(cell => cell.item_name === this.random_items[1].item_name);
                q3_answer=Math.max.apply(Math, this.selected.map(function(o) { return o.item_value; })) > 25;
            }
            if(this.voting_method=='k_approval'){
                q1_answer=this.selected.some(cell => cell.item_name === this.random_items[0].item_name);
                q2_answer=this.selected.some(cell => cell.item_name === this.random_items[1].item_name);
                q3_answer=this.selected.length>=3;
            }
            if(this.voting_method=='Threshold'){
                q1_answer=this.selected.some(cell => cell.item_name === this.random_items[0].item_name);
                q2_answer=this.selected.some(cell => cell.item_name === this.random_items[1].item_name);
                q3_answer=this.selected.length>=3;
            }
            if(this.voting_method=='Ranking_value' || this.voting_method=='Ranking_value_money'){
                q1_answer=this.selected.filter(x => x.item_name==this.random_items[0].item_name)[0].item_value > 
                            this.selected.filter(x => x.item_name==this.random_items[1].item_name)[0].item_value;
                q2_answer=this.selected.filter(x => x.item_name==this.random_items[1].item_name)[0].item_value > 
                            this.selected.filter(x => x.item_name==this.random_items[2].item_name)[0].item_value;
                q3_answer=this.selected.filter(x => x.item_name==this.random_items[2].item_name)[0].item_value > 
                            this.selected.filter(x => x.item_name==this.random_items[3].item_name)[0].item_value;
            }
            

            if((q1_answer && this.form.question1 == 1) || (!q1_answer && this.form.question1 == 2))
                q1=true;

            if((q2_answer && this.form.question2 == 1) || (!q2_answer && this.form.question2 == 2))
                q2=true;

            if((q3_answer && this.form.question3 == 1) || (!q3_answer && this.form.question3 == 2))
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
                        resolve(0);
                    } 
                });
            })
            .then(async (consistant_value)=>{
                let consistant=consistant_value;
                let experiment_id=localStorage.getItem("experiment_id");
                try {
                    await this.axios.post("https://"+config.data.server+"/addConsistency",{
                        
                        experiment_id:experiment_id,
                        consistant:consistant
                    });
                } 
                catch (error) {
                    console.log(error);
                    this.$parent.server_error=true;
                }
            })
            .then(()=>{
                this.$loading(false);
                this.$router.push({ name: 'Feedback_quiz', params: {isConsistent: this.isConsistent }});
            });

        }
    }
}
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        width: 100%; /* full window width */
    }
    .q-body{
        padding-left:50px;
        border-left: thick solid #3f9396;
        float: left;
        margin-left: 150px;
        
        /* border-spacing: 50px 50px 50px 50px; */

    }
    .q-title{
        float: left;
        margin-top:60px;
        margin-right: 40px;
        position:absolute
    }


</style>