<template>
  <fieldset>
    <h2 style="text-align: center">Step 3: Instructions</h2>
    <br>
    <b-card style="background-color:#e8e8e8; max-width:900px;margin: auto;">
      <h3>The task:</h3>
        <!-- <div  style="float:right; margin-left:20px"></div> -->
        You are a resident in Utopia City and the city council has decided to spend a portion 
        of the city budget this year on improving the residents’ quality of life. 
        Several types of infrastructure upgrades, located across the city, have been proposed. 
        Based on earlier discussions with the residents, the list has been narrowed down to 10 projects. 
        Unfortunately, the budget is not sufficient to implement all 10 projects, so you have the opportunity to 
        help decide which projects should be prioritized.
        
    </b-card>
    
    <b-card style="background-color:#e8e8e8; max-width:900px;margin: auto;">
      <insturcionsTodo ref="todo"></insturcionsTodo>
    </b-card>
    <!-- <b-card style="background-color:#e8e8e8; max-width:900px;margin: auto;">
      <h3>City map:</h3>
      <div  style="float:right; margin-left:20px"><img src="../assets/‏‏map_example.png" width="500px"></div>
      <br><br>
       You will be shown a map with the projects scattered around your city, take the placements of the project into account when making your choice.
    </b-card> -->
    <b-card style="background-color:#e8e8e8; max-width:900px;margin: auto;">
      <h3>Your payment:</h3>
        <ul>
            <li>50 cent payment for the task contingent on passing a quiz and doing the task. </li>
            <li>50 cent bonus for correctly answering a consistency test after submitting the task.</li>
        </ul>
    </b-card>
  </fieldset>
</template>

<script>
import insturcionsTodo from './insturcionsTodo.vue';
export default {
  components: { insturcionsTodo },

}
</script>

<style>
  /* p {
      max-width: 85%;
      padding-left: 20%;
  }
  h3 {
      max-width: 85%;
      padding-left: 20%;
  } */
</style>