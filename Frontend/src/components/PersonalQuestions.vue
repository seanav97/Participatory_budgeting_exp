<template>
    <div >
        <h2 style="text-align: center">Step 4: Just a few questions</h2>
        <br><br><br>
        <el-form :inline="true" :model="form" class="demo-form-inline" :rules="rules" ref="ruleForm" >
            <el-form-item style="margin-left:18%">
                <h2>How old are you?</h2>
                <el-input-number size="medium" v-model="form.age" :min="18" :max="90"></el-input-number>
            </el-form-item>
            <!-- <br><br> -->
            <el-form-item prop="gender" style="margin-left:10%">
                <h2>Gender:</h2>
                <el-select v-model="form.gender" placeholder="Select your gender" style="text-align:center "> 
                    <el-option
                        v-for="item in genders"
                        :key="item.value"
                        :label="item.value"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <!-- <br><br> -->
            <el-form-item prop="education" style="margin-left:10%">
                <h2>Education:</h2>
                <el-select v-model="form.education" placeholder="Select your education">
                    <el-option
                        v-for="item in educations"
                        :key="item.value"
                        :label="item.value"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <br><br>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            rules: {
                gender: {
                    required: true,
                    message: 'Please enter your gender.',
                    trigger: 'change'
                },
                education: {
                    required: true,
                    message: 'Please enter your education',
                    trigger: 'change'
                },
            },
            form:{
                age:18,
                gender:'',
                education:'',
            },
            genders:[{value:'Male'},{value:'Female'}],
            educations:[{value: 'Less that High School'},{value: 'High School/GED'},{value: 'College'},{value: 'Graduate degree'}]
        }
    }
}
</script>

<style>

</style>