const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

async function createTable() {
  let sql = "CREATE TABLE file (id int NOT NULL AUTO_INCREMENT, name VARCHAR(256) NOT NULL, url VARCHAR(256) NOT NULL, data LONGBLOB, created_on datetime, updated_on datetime, PRIMARY KEY (id))"
  const connection = await mysql.createConnection(config.db);
  try {
    const [results, ] = await connection.execute(sql, []);
    return results;
  } catch(e) {
    return
  }
  
}


module.exports = {
  query,
  createTable
}