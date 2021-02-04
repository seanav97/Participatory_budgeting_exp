<template>
    <div style="padding-left: 30%;">
        <h4>Question 1: What is the main goal of this task?</h4>
        <br>
        <el-radio-group v-model="question1">
            <el-radio :label="1">To think like John</el-radio><br>
            <el-radio :label="2">To select what to take within a carrying capacity of 10 pounds from a list of 65 items.</el-radio><br>
            <el-radio :label="3">To select what to take within a carrying capacity of 65 pounds from a list of 10 items.</el-radio><br>
            <el-radio :label="4">To have fun</el-radio><br>
        </el-radio-group>
        <br><br>
        <h4>Question 2: You get a 10 cent bonus ...</h4>
        <br>
        <el-radio-group v-model="question2" type="vertical">
            <el-radio :label="1">for passing the quiz</el-radio><br>
            <el-radio :label="2">for correctly answering a survey after submitting the task</el-radio><br>
            <el-radio :label="3">for doing the task</el-radio><br>
            <el-radio :label="4">for nothing</el-radio><br>
        </el-radio-group>
        <br><br>
        <h4>Question 3: What's wrong with clicking SUBMIT in the image below?</h4>
        <br>
        <el-radio-group v-model="question3" type="vertical">
            <el-radio :label="1">Everything is normal</el-radio><br>
            <el-radio :label="2">Some items are unselected</el-radio><br>
            <el-radio :label="3">Current total is lower than the limit</el-radio><br>
            <el-radio :label="4">None of the items are selected</el-radio><br>
        </el-radio-group>
        <br><br>
        <h4>Question 4: What's wrong with clicking SUBMIT in the image below?</h4>
        <br>
        <el-radio-group v-model="question4" type="vertical">
            <el-radio :label="1">Everything is normal</el-radio><br>
            <el-radio :label="2">Some items are unselected</el-radio><br>
            <el-radio :label="3">Total is lower than the limit</el-radio><br>
            <el-radio :label="4">None of the items are selected</el-radio><br>
        </el-radio-group>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            question1:0,
            question2:0,
            question3:0,
            question4:0,
        };
    }
}
</script>

<style>

</style>