const express = require("express");
const formidable = require('express-formidable');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const fileRouter = require("./routes/fileRouter");
const db = require('../reasonlabs-web-app/service/db');

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(formidable());

app.listen(3001, async () => {
  console.log("application listening.....");
  await db.createTable();
});

app.use("/file", fileRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});