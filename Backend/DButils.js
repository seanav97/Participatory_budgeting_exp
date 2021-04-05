const mysqlssh = require('mysql-ssh');
const fs = require('fs');

exports.executeQuery = async function(query){
  let result= await dbQuery(query);
  
  return result;
};

async function dbQuery(databaseQuery) {

  let conProm=null;
  try {
    conProm= await mysqlssh.connect(
      {
          host: '3.8.178.219',
          user: 'ubuntu',
          privateKey: fs.readFileSync('LightsailDefaultKey-eu-west-2.pem')
      },
      {
          host: '127.0.0.1',
          user: 'root',
          password: 'mkmHAD20/',
          database: 'expKobi'
      }
    );
  } 
  catch (e) {
    console.log("Error", e.stack);
    console.log("Error", e.name);
    console.log("Error", e.message);
  }
  
  return new Promise(data => {
    conProm.query(databaseQuery, function (error, result) {
          if (error) {
              console.log(error);
              throw error;
          }
          try {
              // console.log(result);
              
              data(result);

          } catch (error) {
              data({});
              throw error;
          }

      });
    // conProm.end();
  });

}

async function getDatabase(){
  const Json2csvParser = require('json2csv').Parser;
  const fastcsv = require("fast-csv");
  const fs = require("fs");

  let experiments= await dbQuery('select * from EXPERIMMENTS');
  let arranged_items= await dbQuery('select * from ARRANGED_ITEMS');
  let blacklist= await dbQuery('select * from BLACKLIST');
  let exp_items= await dbQuery('select * from EXP_ITEMS');
  let items= await dbQuery('select * from ITEMS');
  let participants= await dbQuery('select * from PARTICIPANTS');
  const experiments_json = JSON.parse(JSON.stringify(experiments));
  // const experimentsFields = ['id', 'name', 'address', 'age'];
  const arranged_items_json = JSON.parse(JSON.stringify(arranged_items));
  const blacklist_json = JSON.parse(JSON.stringify(blacklist));
  const exp_items_json = JSON.parse(JSON.stringify(exp_items));
  const items_json = JSON.parse(JSON.stringify(items));
  const participants_json = JSON.parse(JSON.stringify(participants));

  fastcsv
      .write(experiments_json, { headers: true })
      .on("finish", function() {
        console.log("Write to experiments.csv successfully!");
      })
      .pipe(fs.createWriteStream("csv/experiments.csv"));
  fastcsv
      .write(arranged_items_json, { headers: true })
      .on("finish", function() {
        console.log("Write to arranged_items.csv successfully!");
      })
      .pipe(fs.createWriteStream("csv/arranged_items.csv")); 
  fastcsv
      .write(blacklist_json, { headers: true })
      .on("finish", function() {
        console.log("Write to blacklist.csv successfully!");
      })
      .pipe(fs.createWriteStream("csv/blacklist.csv"));
  fastcsv
      .write(exp_items_json, { headers: true })
      .on("finish", function() {
        console.log("Write to exp_items.csv successfully!");
      })
      .pipe(fs.createWriteStream("csv/exp_items.csv"));
  fastcsv
      .write(items_json, { headers: true })
      .on("finish", function() {
        console.log("Write to items.csv successfully!");
      })
      .pipe(fs.createWriteStream("csv/items.csv"));
  fastcsv
      .write(participants_json, { headers: true })
      .on("finish", function() {
        console.log("Write to participants.csv successfully!");
      })
      .pipe(fs.createWriteStream("csv/participants.csv"));

}

getDatabase();
