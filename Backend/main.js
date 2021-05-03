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
  let queries=[];
  queries.push('SELECT * from ARRANGED_ITEMS');
  queries.push('SELECT * from PARTICIPANTS');
  queries.push('SELECT * from EXP_ITEMS');
  let answer=await DButils.executeQuery('SELECT * from ARRANGED_ITEMS');
  let answers=await DButils.executeQueries(queries);
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
    const consistant=0;
    const items=req.body.items;
    const participant_info=req.body.participant_info;
    const input_format=req.body.input_format;

    const election_num=req.body.election_num;

    let queries=[];
    queries.push(`INSERT INTO PARTICIPANTS (PARTICIPANT_ID,AGE,EDUCATION,GENDER) VALUE ('${participant_ID}','${participant_info.age}','${participant_info.education}','${participant_info.gender}')`);
    queries.push(`INSERT INTO EXPERIMMENTS (PARTICIPANT_ID,CURTIME,TUTORIAL_TIME,QUIZ_TIME,RESPONSE_TIME,ISCONSISTENT,INPUT_FORMAT,ELECTION_NUM) VALUE ('${participant_ID}','${time}','${tutorial_time}','${quiz_time}','${response_time}','${consistant}','${input_format}','${election_num}')`);

    // await DButils.executeQuery(`INSERT INTO PARTICIPANTS (PARTICIPANT_ID,AGE,EDUCATION,GENDER)
    //                             VALUE ('${participant_ID}','${participant_info.age}','${participant_info.education}','${participant_info.gender}')`);

    // await DButils.executeQuery(`INSERT INTO EXPERIMMENTS (PARTICIPANT_ID,CURTIME,TUTORIAL_TIME,QUIZ_TIME,RESPONSE_TIME,ISCONSISTENT,INPUT_FORMAT,ELECTION_NUM)
    //                            VALUE ('${participant_ID}','${time}','${tutorial_time}','${quiz_time}','${response_time}','${consistant}','${input_format}','${election_num}')`);
    
    let exp_id=await DButils.executeQuery(`SELECT max(EXP_ID) as max FROM EXPERIMMENTS`);
    exp_id[0]["max"]=parseInt(exp_id[0]["max"])+1;
    // console.log("epx id: "+exp_id[0]["max"]);


    let items_query="INSERT INTO EXP_ITEMS (EXP_ID,ITEM_ID,VALUE) VALUES ";
    for (let index = 0; index < items.length; index++) {
      let item=items[index];
      if(index>0) items_query+=",";
      items_query+="("+exp_id[0]["max"]+","+item.item_id+",'"+item.item_value+"')";
    }
    // await DButils.executeQuery(items_query);
    queries.push(items_query);
    await DButils.executeQueries(queries);


    res.status(201).send({ experiment_id: exp_id[0]["max"]});
  } catch (error) {
    next(error);
  }
});

app.post("/addConsistency", async (req, res, next) => {
  try {
    const experiment_id=req.body.experiment_id;
    const consistant=req.body.consistant;
    const consistency_time=req.body.consistency_time;
    await DButils.executeQuery(`UPDATE EXPERIMMENTS SET ISCONSISTENT = '${consistant}', CONSISTENCY_TIME='${consistency_time}'
                                WHERE EXP_ID = '${experiment_id}';`);

    res.status(201).send({ message: "consistency added"});
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
    const total_time=req.body.total_time;
    await DButils.executeQuery(`UPDATE EXPERIMMENTS SET FEEDBACK_EASE = '${q_ease}',
                                FEEDBACK_INTERFACE ='${q_interface}', FEEDBACK_CAPTURE = '${q_capture}', TOTAL_TIME = '${total_time}'
                                WHERE EXP_ID = '${experiment_id}';`);

    res.status(201).send({ message: "feedback added"});
  } catch (error) {
    next(error);
  }
});

app.get("/config", async (req, res, next) => {
  try {
    let return_items=[];
    
    voting_methods=['Knapsack','Ranking_value','Ranking_value_money','Threshold','k_approval','Utilities']
    chosen_method=voting_methods[Math.floor(Math.random() * voting_methods.length)];

    let num_of_senarios=await DButils.executeQuery('SELECT count(distinct(SENARIO)) as count from ARRANGED_ITEMS');
    let senario_number=Math.floor(Math.random() * (num_of_senarios[0].count)) + 1
    let items = await DButils.executeQuery(`SELECT ITEMS.ITEM_ID,ITEM_NAME,GROUP_NAME,VALUE,URL,COORDS,DESCRIPTION from ARRANGED_ITEMS JOIN ITEMS ON ITEMS.ITEM_ID=ARRANGED_ITEMS.ITEM_ID where SENARIO='${senario_number}' ORDER BY RAND ( ) `);
    
    items.forEach(row => {
      return_items.push({'item_id':row.ITEM_ID,'item_name':row.ITEM_NAME,'item_value':row.VALUE,'item_group':row.GROUP_NAME,'item_desc':row.DESCRIPTION,'url':row.URL,'coords':row.COORDS});
    });

    res.status(200).send({'items_from_groups':return_items,'voting_method':chosen_method,'election_num':senario_number});
  } catch (error) {
    next(error);
  }
});

app.get("/", (req, res) => res.send("welcome"));

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send({ message: err.message, success: false });
});

const server = app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});



process.on("SIGINT", function () {
  if (server) {
    server.close(() => console.log("server closed"));
  }
  process.exit();
});
