const express = require('express');
const router = express.Router();
const fileService = require('../service/fileService');

router.post('/save', async function(req, res, next) {
    try {
      res.json(await fileService.saveFile(req));
    } catch (err) {
      console.error(`Error while saving file`, err.message);
      next(err);
    }
});

module.exports = router;