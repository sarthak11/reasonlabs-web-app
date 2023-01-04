"use strict";

const db = require('./db');

async function saveFile(req) {
  let name = req.fields.name;
  let url = req.fields.url;
  let data = Buffer.from(req.fields.file).toString('base64');
  let params = [name];
  let fileNameArr = await db.query(`SELECT name from file WHERE name REGEXP ? ORDER BY updated_on DESC LIMIT 1`, params);
  if (fileNameArr.length != 0) {
    console.warn('file already exists but still saving as a new record!');
    let fileName = fileNameArr[0].name;
    if (fileName.indexOf('_') != -1) {
      name = fileName.substr(0, fileName.indexOf('_')) + '_' + (parseInt(fileName.substr(fileName.indexOf('_') + 1)) + 1).toString();
    }
    else {
      name = fileName + '_2';
    }
  }
  const result = await db.query(
    `INSERT INTO file (name, url, data, created_on, updated_on) VALUES ("${name}", "${url}", "${data}", NOW(), NOW())`
  );


  let message = 'Error in saving file';

  if (result.affectedRows) {
    message = 'File saved successfully!';
  }

  return {message};
}

module.exports = {
    saveFile
}