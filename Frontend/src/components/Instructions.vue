<template>
  <fieldset>
    <h2 style="text-align: center">Step 2: Instructions</h2>
    <br>
    <b-card style="background-color:#e8e8e8; max-width:900px;margin: auto;">
      <h3>The Task:</h3>
        <div  style="float:right; margin-left:20px"><img src="../assets/‏‏map_example.png" width="350px"></div>
        You are a resident in imagine-city and the city council decided they want to improve the citizens life quality.
        To do so, they suggest a variety of different types of projects which will make the citizens more happy. 
        <br><br> In order to do so, they published a map of the city with projects in different locations to all citizens.
        However, they don't have enough funds to implement all of the projects, therefore, you will need to help choose which projects should be funded.
        
    </b-card>
    
    <b-card style="background-color:#e8e8e8; max-width:900px;margin: auto;">
    <insturcionsTodo></insturcionsTodo>
      <!-- <h3>What you need to do: </h3>
      <br>
      You will be asked to distribute 100 points among 10 projects. The more points you assign to an item, the more important you think the item is to your city.
      <br><br>
      <b>Below is an example</b> of the interface you will be using shown for an imaginary citizen called John.
      The projects that John finds most useful (in decreasing order of importance) are:
      <ul>
        <li>Laudry Access in Public Schools</li>
        <li>Security Cameras</li>
        <li>The Sustainable Energy Pilot</li>
      </ul>
      For example, in the following image, you can see a <b>possible rating</b> by John:
      <br><br>
      <img src="../assets/utilities_example.png" width="70%" style="margin:auto; display:block">
      <br><br>
      Your ratings tell us how much you like groups of items in addition to how much you like individual items.
      For example, according to the ratings above, John prefers the bundle of 
      <br><br>
      <b>Note:</b>
      <br>
        You can use the Normalize button to automatically adjust your values to add up to 100 while keeping the relative importance of items intact.
        You will only be able to press the SUBMIT button if the values add up to 100. -->
      
      <!-- <b-button variant="outline-primary" style="position: relative;margin-left:45%" @click="$bvModal.show('bv-modal-example')">See an example</b-button> -->

    </b-card>
    <!-- <b-modal size="lg" id="bv-modal-example" hide-footer>   
      <div class="d-block text-center">
        <h4>The items found most useful in the example: are New chairs for public schools and a dog park.</h4>
        <img src="../assets/‏‏knapsack_example.png" width="600" height="400">
      </div>
      <div class="text-left">
        <h4 >Notes:</h4>
        <ul >
          <li> You can see how much money you spent and how much you have left in the chart area.</li>
          <li>You can view more details about each item by clicking the arrow near it.</li>
        </ul>
      </div>
      <b-button variant="outline-primary" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
    </b-modal> -->
    <b-card style="background-color:#e8e8e8; max-width:900px;margin: auto;">
      <h3>Your payment:</h3>
      <!-- <p> -->
        <ul>
            <li>20 cent payment for the task contingent on passing a quiz and doing the task. </li>
            <li>10 cent bonus for correctly answering a survey after submitting the task.</li>
            <li>10 cent bonus for answering a feedback survey about the experiment.</li>
        </ul>
      <!-- </p> -->
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