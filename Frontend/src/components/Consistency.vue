<template>
<div>
    <h1 style="font-family: 'Courier New', monospace;text-align:center">Consistency check</h1>
    <br>
    <div style="padding-left: 25%;">
        <el-form :inline="true" :model="form" class="demo-form-inline" :rules="rules" ref="ruleForm">
            <el-form-item prop="allQuestions">
                <h4>Question 1: Was the {{this.random_items[0].item_name}} one of your choices?</h4>
                <br>
                <el-form-item prop="q1">
                    <el-radio-group v-model="form.question1">
                        <el-radio :label="1">Yes</el-radio><br>
                        <el-radio :label="2">No</el-radio><br>
                    </el-radio-group>
                </el-form-item>
                <br><br>
                <h4>Question 2: Was the {{this.random_items[1].item_name}} one of your choices?</h4>
                <br>
                <el-form-item prop="q2">
                    <el-radio-group v-model="form.question2" type="vertical">
                        <el-radio :label="1">Yes</el-radio><br>
                        <el-radio :label="2">No</el-radio><br>
                    </el-radio-group>
                </el-form-item>
                <br><br>
                <h4>Question 3: Did you select any items that cost {{this.price}} pounds or more?</h4>
                <br>
                <el-form-item prop="q3">
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
  
</template>

<script>
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
            },
        }
    },
    methods:{
        qAll: async function(){
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

            console.log(q1);
            console.log(q2);
            console.log(q3);

            if(q1&&q2&&q3)
                return new Promise((resolve, reject) => {resolve(true)});
            else
                return new Promise((resolve, reject) => {reject(new Error('Wrong!'))});

        },
        submit:function(){
            this.$refs.ruleForm.validate((valid) => {
                if(valid) this.isConsistent=true;
                else this.isConsistent=false;
            });

        }
    }
}
</script>

<style>

</style>