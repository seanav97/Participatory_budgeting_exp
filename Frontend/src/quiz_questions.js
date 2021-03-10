import { Html } from "survey-vue";

export const data={
    Utilities:{
        q1:{
            q:"What is the main goal of this task?",
            ans1:"To think like John",
            ans2:"To distribute 100 items among 10 points according to how important you think each point is",
            ans3:"To distribute 100 points among 10 items according to how important you think each item is",
            ans4:"To have fun"
        },
        q2:{
            q:"What does the NORMALIZE button do?",
            ans1:"Automatically adjust your values to add up to 100 while keeping the ratio",
            ans2:"Finish the task",
            ans3:"Randomly splits the 100 points",
            ans4:"Nothing"
        },
        q3:{
            q:"What's wrong with the image below?",
            ans1:"Current total not equal to Target. NORMALIZE button will fix it",
            ans2:"Some items are assigned 0 points",
            ans3:"Target is larger than the current total",
            ans4:"Everything is normal, I can click on the CONTINUE button and finish the task"
        },
        q4:{
            q:"Suppose John's ratings for the items are as shown below",
            ans1:"John prefers 'Security Cameras' and 'Laundry Access in Public Schools' to '24H public toilet'",
            ans2:"John prefers 'Computers for the community learning center' to 'Security Cameras'",
            ans3:"John prefers 'Security Cameras' to 'Sheltered Bike Parking at the Main Library' and 'Laundry Access in Public Schools'",
            ans4:"John prefers '24H public toilet' to 'Security Cameras' and 'Laundry Access in Public Schools'"
        }
    },
    Knapsack:{
        q1:{
            q:"What is the main goal of this task?",
            ans1:"To think like John",
            ans2:"To select what to take within a carrying capacity of 10 pounds from a list of 65 items.",
            ans3:"To select what to take within a carrying capacity of 65 pounds from a list of 10 items.",
            ans4:"To have fun"
        },
        q2:{
            q:"You get a 10 cent bonus ...",
            ans1:"for passing the quiz",
            ans2:"for correctly answering a survey after submitting the task",
            ans3:"for doing the task",
            ans4:"for nothing"
        },
        q3:{
            q:"What's wrong with clicking SUBMIT in the image below?",
            ans1:"Everything is normal",
            ans2:"Some items are unselected",
            ans3:"Current total is lower than the limit",
            ans4:"None of the items are selected"
        },
        q4:{
            q:"What's wrong with clicking SUBMIT in the image below?",
            ans1:"Everything is normal",
            ans2:"Some items are unselected",
            ans3:"Total is lower than the limit",
            ans4:"None of the items are selected"
        }
    },
    k_approval:{
        q1:{
            q:"What is the main goal of this task?",
            ans1:"To think like John",
            ans2:"To select up to 10 items from a list of 5 items",
            ans3:"To select up to 5 items from a list of 10 items",
            ans4:"To have fun"
        },
        q2:{
            q:"You get a 10 cent bonus ...",
            ans1:"for passing the quiz",
            ans2:"for correctly answering a survey after submitting the task",
            ans3:"for doing the task",
            ans4:"for nothing"
        },
        q3:{
            q:"What's wrong with clicking SUBMIT in the image below?",
            ans1:"Everything is normal",
            ans2:"Some items are unselected",
            ans3:"Current total is lower than the limit",
            ans4:"None of the items are selected"
        },
        q4:{
            q:"What's wrong with clicking SUBMIT in the image below?",
            ans1:"Everything is normal",
            ans2:"Some items are unselected",
            ans3:"Total number of items is lower than the limit",
            ans4:"None of the items are selected"
        }
    },
    Ranking_value:{
        q1:{
            q:"Please select the correct answer:",
            ans1:"Items at the TOP of the list are LESS important than items on the BOTTOM of the list.",
            ans2:"Items at the BOTTOM of the list are MORE important than items on the TOP of the list.",
            ans3:"Items at the TOP of the list are MORE important than items on the BOTTOM of the list.",
            ans4:"There are no differences"
        },
        q2:{
            q:"You get a 10 cent bonus ...",
            ans1:"for passing the quiz",
            ans2:"for correctly answering a survey after submitting the task",
            ans3:"for doing the task",
            ans4:"for nothing"
        },
        q3:{
            q:"In the ranking below, which item is the most important?",
            ans1:"Computers for the community learning center",
            ans2:"Dog park",
            ans3:"Security Cameras",
            ans4:"24H public toilet"
        },
        q4:{
            q:"In the ranking below, which item is MORE important than 'Sheltered Bike Parking at the Main Library'?",
            ans1:"Dog Park",
            ans2:"Security Cameras",
            ans3:"24H public toilet",
            ans4:"Laundry Access in Public Schools"
        }
    },
    Threshold:{
        q1:{
            q:"What is the main goal of this task?",
            ans1:"To think like John",
            ans2:"To select the items that I think should receive at least 100 points, given that 10 points are to be distributed among the items based on their importance.",
            ans3:"To select the items that I think should receive at least 10 points, given that 100 points are to be distributed among the items based on their importance.",
            ans4:"To have fun"
        },
        q2:{
            q:"You get a 10 cent bonus ...",
            ans1:"for passing the quiz",
            ans2:"for correctly answering a survey after submitting the task",
            ans3:"for doing the task",
            ans4:"for nothing"
        },
        q3:{
            q:"What's wrong with clicking SUBMIT in the image below?",
            ans1:"Everything is normal",
            ans2:"Some items are unselected",
            ans3:"Current total is lower than the limit",
            ans4:"None of the items are selected"
        },
        q4:{
            q:"What's wrong with clicking SUBMIT in the image below?",
            ans1:"Everything is normal",
            ans2:"Some items are unselected",
            ans3:"Total number of items is lower than the limit",
            ans4:"None of the items are selected"
        }
    },
    Ranking_value_money:{
        q1:{
            q:"Please select the correct answer:",
            ans1:'Items at the TOP of the list are LOWER in "value for money" than items on the BOTTOM of the list',
            ans2:'Items at the BOTTOM of the list are HIGHER in "value for money" than items on the TOP of the list',
            ans3:'Items at the TOP of the list are HIGHER in "value for money" than items on the BOTTOM of the list',
            ans4:'There are no differences'
        },
        q2:{
            q:"Suppose the cost of a 'Dog Park' is equal to 250,000 and that your utility from Water is 25,000. Please select the correct answer:",
            ans1:"The value for money a 'Dog Park' is equal to 25,000",
            ans2:"The value for money a 'Dog Park' is equal to 0.1",
            ans3:"The value for money a 'Dog Park' is equal to 250,000",
            ans4:"The value for money a 'Dog Park' is equal to 10"
        },
        q3:{
            q:"In the image below, suppose your utility for '24H public toilet' is 100,000 and for 'Laundry Access in Public Schools' is 10,000",
            ans1:"I will rank 'Laundry Access in Public Schools' higher than '24H public toilet'",
            ans2:"I will rank '24H public toilet' higher than 'Laundry Access in Public Schools'",
            ans3:'There are no differences between the "value for money" of each item',
            ans4:"I don't know the utilities of John"
        },
        q4:{
            q:"In the image below, suppose your utility for '24H public toilet' is 250,000 , for 'Dog Park' is 200,000 and for 'The Sustainable Energy Pilot' is 10,000.What will be your ranking(from highest to lowest 'value for money')?",
            ans1:"'The Sustainable Energy Pilot', 'Dog Park', '24H public toilet'",
            ans2:"'24H public toilet', 'The Sustainable Energy Pilot', 'Dog Park'",
            ans3:"'Dog Park', '24H public toilet', 'The Sustainable Energy Pilot'",
            ans4:"'The Sustainable Energy Pilot', '24H public toilet', 'Dog Park'"
        }
    },

}