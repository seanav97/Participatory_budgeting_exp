require("dotenv").config();
//#region express configures
var express = require("express");
var path = require("path");
var logger = require("morgan");
const session = require("client-sessions");
const cors = require("cors");
const DButils = require("./DButils");

var app = express();
var corsOptions = {
  origin: true,
  credentials: true
}
app.use(cors(corsOptions))
app.use(logger("dev")); //logger
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

app.get("/userExists/participant_ID/:participant_ID/senario/:senario", async (req, res, next) => {
  try {
    const { participant_ID, senario } = req.params;
    res.status(200).send({exists:true});
  } catch (error) {
    next(error);
  }
});

app.get("/isBlacklisted/participant_ID/:participant_ID", async (req, res, next) => {
  try {
    const { participant_ID } = req.params;
    let queryRes = await DButils.executeQuery(`select * from BLACKLIST WHERE PARTICIPANT_ID='${participant_ID}'`);
    if(queryRes.length>0){
      console.log(true);
      res.status(200).send({blacklisted:true});
    }
    else{ 
      console.log(false);
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
    const participant_ID=req.participant_ID;
    const time=req.time;
    const tutorial_time=req.turorial_time;
    const quiz_time=req.quiz_time;
    const response_time=req.response_time;
    const consistant=req.consistant;
    const senario=req.senario;
    const stage=req.stage;
    const items=req.items;
    const participant_info=req.participant_info;
    await DButils.executeQuery(`INSERT INTO EXPERIMMENT (PARTICIPANT_ID,STAGE,CURTIME,TUTORIAL_TIME,QUIZ_TIME,RESPONSE_TIME,ISCONSISTENT,SENARIO_NAME)
                               VALUE ('${participant_ID}','${stage}','${time}','${tutorial_time}','${quiz_time}','${response_time}','${consistant}','${senario}')`);
    const exp_id=await DButils.executeQuery(`SELECT LAST_INSERT_ID('EXPERIMMENTS')`);

    await DButils.executeQuery(`INSERT INTO PARTICIPANTS (PARTICIPANT_ID,AGE,EDUCATION,GENDER)
                                VALUE ('${participant_ID}','${participant_info.age}','${participant_info.education}','${participant_info.gender}')`);

    for(item in items){
      await DButils.executeQuery(`INSERT INTO EXP_ITEMS (EXP_ID,ITEM_NAME,VALUE)
                                  VALUE ('${exp_id}','${item.item_name}','${item.item_value}')`);
    }

    res.status(201).send({ message: "expiriment added"});
  } catch (error) {
    next(error);
  }
});

app.get("/config/stages/:stages", async (req, res, next) => {
  try {
    const { stages } = req.params;
    let return_items=[];
    
    //choose random voting methods for stages
    voting_methods=['Knapsack','Ranking_value','Ranking_value_money','Threshold','k-approval','Utilities']
    chosen_methods=voting_methods.sort(() => Math.random() - Math.random()).slice(0, stages);

    //get all items in randomized order
    // let items = await DButils.executeQuery(`SELECT ij.ITEM_NAME,GROUP_NAME,VALUE from ITEMS_GROUPS ij join ITEMS i on i.ITEM_NAME=ij.ITEM_NAME ORDER BY rand()`);
    let items = await DButils.executeQuery(`SELECT ij.ITEM_NAME,GROUP_NAME,VALUE,URL,X_COORD,Y_COORD from ITEMS_GROUPS ij join ITEMS i on i.ITEM_NAME=ij.ITEM_NAME`);
    
    //filter from each group 2 items
    groups=[]
    items.forEach(row => {
      if(row.GROUP_NAME in groups){
        if(groups[row.GROUP_NAME]<2){
          groups[row.GROUP_NAME]=groups[row.GROUP_NAME]+1;
          return_items.push({'item_name':row.ITEM_NAME,'item_value':row.VALUE,'url':row.URL,'x_coord':row.X_COORD,'y_coord':row.Y_COORD});
        }

      }
      else {
        return_items.push({'item_name':row.ITEM_NAME,'item_value':row.VALUE,'url':row.URL,'x_coord':row.X_COORD,'y_coord':row.Y_COORD});
        groups[row.GROUP_NAME]=1;
      }
      });

    res.status(200).send({'items_from_groups':return_items,'voting_methods':chosen_methods});
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

setInterval(function(){ DButils.executeQuery(`SELECT 1`); console.log('1'); }, 100000);


process.on("SIGINT", function () {
  if (server) {
    server.close(() => console.log("server closed"));
  }
  process.exit();
});
