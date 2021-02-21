<template>
  <fieldset>
    <h2 style="text-align: center">Step 2: Instructions</h2>
    <h3>The Task:</h3>
    <p> It is 10 am on a mid-August day and your plane has just crash-landed on a desert island. You are all right, however, getting out of this situation in one piece is going to require some quick thinking. While scavenging the area, you discover a variety of items in the wreckage that could prove helpful.
        Deciding what to utilize and what to set aside could mean the difference between success and failure. </p>
    <h3>What you need to do: </h3>
    <p>You will be asked to distribute 100 points among 10 items. The more points you assign to an item, the more important you think the item is to your survival.</p>
    
    <b-button variant="outline-primary" style="position: relative;margin-left:45%" @click="$bvModal.show('bv-modal-example')">See an example</b-button>

    <b-modal size="lg" id="bv-modal-example" hide-footer>
      <!-- <template  #modal-title >
        <div style="text-align:center">Example</div>
      </template> -->
      
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
    <!-- <p>
      <strong>Below is an example</strong> 
      of the interface you will be using shown for an imaginary worker called John.
      The items that John finds most useful (in decreasing order of importance) are:
    
      <ul>
          <li>Water</li>
          <li>Raincoat</li>
          <li>Compass</li>
          <li>Sunglasses</li>
      </ul>
    </p>

    <p>Your ratings tell us how much you like groups of items in addition to how much you like individual items.  For example,  according to the ratings above, John prefers the bundle of Water and Sunglasses (50+10=60) to the bundle of Raincoat and Compass (25+15=40).</p> -->
  
    <h3>Your payment:</h3>
    <p>
      <ul>
          <li>20 cent payment for the task contingent on passing a quiz and doing the task. </li>
          <li>10 cent bonus for correctly answering a survey after submitting the task.</li>
      </ul>
    </p>
  </fieldset>
</template>

<script>
export default {

}
</script>

<style>
  p {
      max-width: 85%;
      padding-left: 20%;
  }
  h3 {
      max-width: 85%;
      padding-left: 20%;
  }
</style>