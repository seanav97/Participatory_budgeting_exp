<template>
    <div>
        <h2>How old are you?</h2>
        <el-input-number v-model="age" :min="18" :max="90"></el-input-number>
        <br><br>
        <h2>Gender:</h2>
        <el-select v-model="gender" placeholder="Select your gender">
            <el-option
                v-for="item in genders"
                :key="item.value"
                :label="item.value"
                :value="item.value">
            </el-option>
        </el-select>
        <br><br>
        <h2>Education:</h2>
        <el-select v-model="education" placeholder="Select your education">
            <el-option
                v-for="item in educations"
                :key="item.value"
                :label="item.value"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data(){
        return{
            age:18,
            genders:[{
                    value:'Male'
                },
                {
                    value:'Female'
                }
                ],
            gender:'',
            education:'',
            educations:[{
                value: 'Less that High School'
            },
            {
                value: 'High School/GED'
            },
            {
                value: 'College'
            },
            {
                value: 'Graduate degree'
            }
            ]
        }
    }
}
</script>

<style>

</style>