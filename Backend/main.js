require("dotenv").config();
//#region express configures
var express = require("express");
var path = require("path");
var logger = require("morgan");
const session = require("client-sessions");
const cors = require("cors");
const DButils = require("./DButils");
var fs = require('fs');

var app = express();
var corsOptions = {
  origin: true,
  credentials: true
}
app.use(cors(corsOptions));
let logStream = fs.createWriteStream(path.join("./", 'logger.log'), {flags: 'a'});
app.use(logger('combined', { stream: logStream }));
// app.use(logger("dev")); //logger
app.use(express.json()); // parse application/json
app.use(
  session({
    cookieName: "session", // the cookie key name
    secret: 'secret', // the encryption key
    duration: 20 * 60 * 1000, // expired after 20 sec
    activeDuration: 0, // if expiresIn < activeDuration,
    //the session will be extended by activeDuration milliseconds
  }
));
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"))); //To serve static files such as images, CSS files, and JavaScript files
var port = process.env.PORT || "3000";

//#region cookie middleware
// app.use(function (req, res, next) {
//   if (req.session && req.session.username) {
//     DButils.execQuery("SELECT username FROM users")
//       .then((users) => {
//         if (users.find((x) => x.username === req.session.username)) {
//           req.username = req.session.username;
//         }
//         next();
//       })
//       .catch((error) => next());
//   } else {
//     next();
//   }
// });
//#endregion

app.get("/userExists/participant_ID/:participant_ID", async (req, res, next) => {
  try {
    const { participant_ID } = req.params;
    console.log("part_id: "+participant_ID);
    let queryRes = await DButils.executeQuery(`select * from PARTICIPANTS WHERE PARTICIPANT_ID='${participant_ID}'`);
    if(queryRes.length>0){
      res.status(200).send({exists:true});
    }
    else{ 
      res.status(200).send({exists:false});
    }
  } catch (error) {
    next(error);
  }
});

app.get("/dummy", async (req, res, next) => {
  res.status(200).send({dummy:'works'});
});

app.get("/isBlacklisted/participant_ID/:participant_ID", async (req, res, next) => {
  try {
    const { participant_ID } = req.params;
    let queryRes = await DButils.executeQuery(`select * from BLACKLIST WHERE PARTICIPANT_ID='${participant_ID}'`);
    if(queryRes.length>0){
      res.status(200).send({blacklisted:true});
    }
    else{ 
      res.status(200).send({blacklisted:false});
    }

  } catch (error) {
    next(error);
  }
});

app.post("/insertToBlacklist", async (req, res, next) => {
  try {
    const participant_ID=req.body.partisipant_ID;
    await DButils.executeQuery(`INSERT INTO BLACKLIST VALUE ('${participant_ID}')`);
    res.status(201).send({ message: "user blacklisted"});
  } catch (error) {
    next(error);
  }
});

app.post("/addExperiment", async (req, res, next) => {
  try {
    const participant_ID=req.body.participant_ID;
    const time=req.body.time;
    const tutorial_time=req.body.tutorial_time;
    const quiz_time=req.body.quiz_time;
    const response_time=req.body.response_time;
    const consistant=req.body.consistant;
    const items=req.body.items;
    const participant_info=req.body.participant_info;

    await DButils.executeQuery(`INSERT INTO PARTICIPANTS (PARTICIPANT_ID,AGE,EDUCATION,GENDER)
                                VALUE ('${participant_ID}','${participant_info.age}','${participant_info.education}','${participant_info.gender}')`);

    await DButils.executeQuery(`INSERT INTO EXPERIMMENTS (PARTICIPANT_ID,CURTIME,TUTORIAL_TIME,QUIZ_TIME,RESPONSE_TIME,ISCONSISTENT)
                               VALUE ('${participant_ID}','${time}','${tutorial_time}','${quiz_time}','${response_time}','${consistant}')`);
    
    const exp_id=await DButils.executeQuery(`SELECT max(EXP_ID) as max FROM EXPERIMMENTS`);
    console.log("epx id: "+exp_id[0]["max"]);


    items.forEach(async function(item) {
      await DButils.executeQuery(`INSERT INTO EXP_ITEMS (EXP_ID,ITEM_ID,VALUE)
                                  VALUE ('${exp_id[0]["max"]}','${item.item_id}','${item.item_value}')`);
    });


    res.status(201).send({ experiment_id: exp_id[0]["max"]});
  } catch (error) {
    next(error);
  }
});

app.post("/addFeedback", async (req, res, next) => {
  try {
    const experiment_id=req.body.experiment_id;
    const q_ease=req.body.q_ease;
    const q_interface=req.body.q_interface;
    const q_capture=req.body.q_capture;
    await DButils.executeQuery(`UPDATE EXPERIMMENTS SET FEEDBACK_EASE = '${q_ease}',
                                FEEDBACK_INTERFACE ='${q_interface}', FEEDBACK_CAPTURE = '${q_capture}'
                                WHERE EXP_ID = '${experiment_id}';`);

    res.status(201).send({ message: "feedback added"});
  } catch (error) {
    next(error);
  }
});

app.get("/config", async (req, res, next) => {
  try {
    let return_items=[];
    
    voting_methods=['Knapsack','Ranking_value','Ranking_value_money','Threshold','k-approval','Utilities']
    chosen_method=voting_methods[Math.floor(Math.random() * voting_methods.length)];

    let num_of_senarios=await DButils.executeQuery('SELECT count(distinct(SENARIO)) as count from ARRANGED_ITEMS');
    let senario_number=Math.floor(Math.random() * (num_of_senarios[0].count)) + 1
    let items = await DButils.executeQuery(`SELECT ITEMS.ITEM_ID,ITEM_NAME,GROUP_NAME,VALUE,URL,X_COORD,Y_COORD,DESCRIPTION from ARRANGED_ITEMS JOIN ITEMS ON ITEMS.ITEM_ID=ARRANGED_ITEMS.ITEM_ID where SENARIO='${senario_number}'`);
    
    items.forEach(row => {
      return_items.push({'item_id':row.ITEM_ID,'item_name':row.ITEM_NAME,'item_value':row.VALUE,'item_group':row.GROUP_NAME,'item_desc':row.DESCRIPTION,'url':row.URL,'x_coord':row.X_COORD,'y_coord':row.Y_COORD});
    });
    // groups=[]
    // items.forEach(row => {
    //   if(row.GROUP_NAME in groups){
    //     if(groups[row.GROUP_NAME]<2){
    //       groups[row.GROUP_NAME]=groups[row.GROUP_NAME]+1;
    //       return_items.push({'item_name':row.ITEM_NAME,'item_value':row.ITEM_VALUE,'item_group':row.GROUP_NAME,'item_desc':row.DESCRIPTION,'url':row.URL,'x_coord':row.X_COORD,'y_coord':row.Y_COORD});
    //     }

    //   }
    //   else {
    //     return_items.push({'item_name':row.ITEM_NAME,'item_value':row.ITEM_VALUE,'item_group':row.GROUP_NAME,'item_desc':row.DESCRIPTION,'url':row.URL,'x_coord':row.X_COORD,'y_coord':row.Y_COORD});
    //     groups[row.GROUP_NAME]=1;
    //   }
    //   });

    res.status(200).send({'items_from_groups':return_items,'voting_method':chosen_method});
  } catch (error) {
    next(error);
  }
});

app.get("/", (req, res) => res.send("welcome"));
// app.use("/auth", auth);
// app.use("/users", users);
// app.use("/recipes", recipes);

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send({ message: err.message, success: false });
});

const server = app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

// setInterval(function(){ DButils.executeQuery(`SELECT 1`); console.log('1'); }, 100000);


process.on("SIGINT", function () {
  if (server) {
    server.close(() => console.log("server closed"));
  }
  process.exit();
});
