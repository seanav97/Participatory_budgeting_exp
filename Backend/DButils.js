const mysqlssh = require('mysql-ssh');
const fs = require('fs');

exports.executeQuery = async function(query){
  let result= await dbQuery(query);
  
  return result;
};

async function dbQuery(databaseQuery) {

  const conProm= await mysqlssh.connect(
    {
        host: '3.9.16.135',
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


// exports.execQuery = async function (query) {
//   let res;
//   const conProm= await mysqlssh.connect(
//     {
//         host: '3.9.16.135',
//         user: 'ubuntu',
//         privateKey: fs.readFileSync('LightsailDefaultKey-eu-west-2.pem')
//     },
//     {
//         host: '127.0.0.1',
//         user: 'root',
//         password: 'mkmHAD20/',
//         database: 'expKobi'
//     }
//   );

//   return await new Promise((res, rej) => {
//     conProm.query(query, function (err, results, fields) {
//           if (err) throw err
//           mysqlssh.close();
//           // Promise.resolve(results);
//           // return res;
//       });
//   });
//   let dd=0;



  // const queryProm=await conProm.then(client => {
  //   res=client.query(query, function (err, results, fields) {
  //       if (err) throw err
  //       res=results;
  //       mysqlssh.close();
  //       Promise.resolve(results);
  //       // return res;
  //   })
  // });

  // queryProm.then((res)=>{
  //   return res;
  // });
  // return queryPromp;
  // let x=0;
  // return res;
  // .catch(err => {
  //   console.log(err)
  // })
// };