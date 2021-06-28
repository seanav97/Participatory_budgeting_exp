const { format } = require("mysql2");
const DButils = require("./DButils");


  setInterval(run, 60 * 1000 * 40);

async function run(){
    let data=await DButils.executeQuery(`SELECT * FROM ELECTIONS_INPUT_FORMATS;`);

    let queries=[];
    data.forEach(async (row)=>{
        if(row.STARTED>0){
            let expired=0;
            let timeArr=row.TIMES.split('#');

            timeArr.forEach((ts)=>{
                if(ts.length>0){
                    let userDate=new Date(parseInt(ts));
                    let currentDate=new Date();
                    let minutesPassed=Math.floor(((currentDate-userDate)/1000)/60);
                    if(minutesPassed>30) expired++;
                }
            })
            // console.log(expired);
            timeArr=timeArr.slice(expired+1);
            let updatedTimes='';
            timeArr.forEach((ts)=>{
                updatedTimes=updatedTimes+"#"+ts;
            })

            let started=row.STARTED-expired;

            if(row.STARTED-expired<row.FINISHED)
                started=row.FINISHED+row.STARTED-expired;

            let query=`UPDATE ELECTIONS_INPUT_FORMATS SET STARTED = '${started}', TIMES = '${updatedTimes}' WHERE INPUT_FORMAT = '${row.INPUT_FORMAT}' AND ELECTION = '${row.ELECTION}';`
            queries.push(query);
            await DButils.executeQueries(queries);
        }
    });
}