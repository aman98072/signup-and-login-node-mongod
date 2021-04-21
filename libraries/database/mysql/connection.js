const mysql = require('mysql');

const db = () => {
  return new Promise( (resolve, reject) => {
    // connection create
    const connection = mysql.createConnection({
      host: process.env.mysql_host,
      user: process.env.mysql_user,
      password: process.env.mysql_password,
      database : process.env.mysql_database
    });

    // connection connect
    connection.connect(function(err) {
      if (err) {
        reject(err);
      } else {
        console.log("Mysql Connected...");
        resolve(connection);
      }
    });
  });
}

const query = (connection, queries, whereData) => {
  return new Promise( async (resolve, reject) => {
    if (!connection) {
      connection = await db();
    }

    connection.query(queries, whereData, (error, results, fields) => {
      closeDB(connection);

      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

const closeDB = (connection) => {
  connection.end();
}

module.exports = {
  db,
  query
}