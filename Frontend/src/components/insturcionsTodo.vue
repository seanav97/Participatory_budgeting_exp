<template>
  <div>
    <div v-if="voting_method==`Utilities`">
        <h3>What you need to do: </h3>
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
            You will only be able to press the SUBMIT button if the values add up to 100.
    </div>
    <div v-else-if="voting_method==`Knapsack`">
        <h3>What you need to do: </h3>
        <br>
        You need to select which projects you would like to see funded given a budget limit of $500,000.
        <br><br>
        <b>Below is an example</b> of the interface you will be using for an imaginary citizen called Alex.
        The projects that Alex prefers are:
        <ul>
            <li>24H public toilet</li>
            <li>Laundry Access in Public Schools</li>
            <li>Let's Rest: Picnic Tables & Benches for Our Parks</li>
        </ul>
        On the left you can see the total cost of the selected projects.
        <br><br>
        <img src="../assets/knapsack_example.png" width="90%" style="margin:auto; display:block">
        <br><br>
        <b>Note:</b>
        <br>
            Alex can no longer add another project even through he has not exhausted his entire budget.
    </div>
    <div v-else-if="voting_method==`k_approval`">
        <h3>What you need to do: </h3>
        <br>
        You need to select up to 5 projects from a list of 10 projects according to your best judgment.
        <br><br>
        <b>Below is an example</b> of the interface you will be using shown for an imaginary citizen called John. <br>
        The projects that John finds most useful are:
        <ul>
            <li>Laundry Access in Public Schools</li>
            <li>24H public toilet</li>
            <li>Dog Park</li>
        </ul>
        In the following image, you can see the choices of John and the number of projects selected.
        <br><br>
        <img src="../assets/approval_example.png" width="90%" style="margin:auto; display:block">
    </div>
    <div v-else-if="voting_method==`Ranking_value`">
        <h3>What you need to do: </h3>
        <br>
        You need to rank the items from the most important to the least important according to your best judgement.
        <br><br>
        <b>Below is an example</b> of the interface you will be using shown for an imaginary citizen called John. <br>
        Rank the items from MOST important (top of the list) to the LEAST important (bottom of the list). <br>
        CLICK and DRAG on the item to change its ranking in the list.
        <br><br>
        <img src="../assets/ranking_value_example.gif" width="60%" style="margin:auto; display:block">

    </div>
    <div v-else-if="voting_method==`Threshold`">
        <h3>What you need to do: </h3>
        <br>
        Select each of the following projects ONLY if the answer to the following question is YES. <br>
        If 100 points are divided among the projects based on their importance, should this project get AT LEAST 10 points?
        <br> Use your best judgement.
        <br><br>
        <b>Below is an example</b> of the interface you will be using shown for an imaginary citizen called John. <br>
        The projects that John finds worth at least 10 out of 100 points are:
        <ul>
            <li>Laundry Access in Public Schools</li>
            <li>24H public toilet</li>
            <li>Dog Park</li>
        </ul>
        In the following image, you can see the choices of John and the number of selected proejcts.
        <br><br>
        <img src="../assets/Threshold_example.png" width="90%" style="margin:auto; display:block">
    </div>
    <div v-else-if="voting_method==`Ranking_value_money`">
        <h3>What you need to do: </h3>
        <br>
        You need to rank the projects by “value for money”, which measures the project's importance to you relative to the cost of the project.
        <br><br>
        <b>Below is an example</b> of the interface you will be using shown for an imaginary citizen called John. <br>
        The “value for money” for a project is computed as the utility of the project divided by cost. <br>
        Rank the projects from greatest “value for money”  (top of the list) to least “value for money” (bottom of the list). <br> 
        CLICK and DRAG on the project to change its ranking in the list. <br>
        You need to sort the list in DECREASING order of “value for money” (from the highest value to the lowest value).
        <br><br>
        <img src="../assets/ranking_value_money_example.gif" width="60%" style="margin:auto; display:block">
        <br><br>
        <b>Note:</b>
        <br>
            The interface you will use won’t include the columns “utility for John” and “Value for money”. 
            You need to think independently about what is the utility for each project and compute the “value for money” for each project.

    </div>

    <div v-else> no todo</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            voting_method:localStorage.getItem('voting_method')
        }
    }
}
</script>

<style>

</style>