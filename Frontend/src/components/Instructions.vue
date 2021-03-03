<template>
  <fieldset>
    <h2 style="text-align: center">Step 2: Instructions</h2>
    <br>
    <b-card style="background-color:#e8e8e8; max-width:850px;margin-left: 20%;">
      <h3>The Task:</h3>
       It is 10 am on a mid-August day and your plane has just crash-landed on a desert island. You are all right, however, getting out of this situation in one piece is going to require some quick thinking. While scavenging the area, you discover a variety of items in the wreckage that could prove helpful.
          Deciding what to utilize and what to set aside could mean the difference between success and failure. 
    </b-card>
    <b-card style="background-color:#e8e8e8; max-width:850px;margin-left: 20%;">
      <h3>What you need to do: </h3>
      You will be asked to distribute 100 points among 10 items. The more points you assign to an item, the more important you think the item is to your survival.
      
      <b-button variant="outline-primary" style="position: relative;margin-left:45%" @click="$bvModal.show('bv-modal-example')">See an example</b-button>

    </b-card>
    <b-modal size="lg" id="bv-modal-example" hide-footer>   
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
    </b-modal>
    <b-card style="background-color:#e8e8e8; max-width:850px;margin-left: 20%;">
      <h3>Your payment:</h3>
      <!-- <p> -->
        <ul>
            <li>20 cent payment for the task contingent on passing a quiz and doing the task. </li>
            <li>10 cent bonus for correctly answering a survey after submitting the task.</li>
            <li>10 cent bonus for answering a feedback quiz after submitting the task.</li>
        </ul>
      <!-- </p> -->
    </b-card>
  </fieldset>
</template>

<script>
export default {

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