// Experimental

"use strict";

const express = require("express"),
      chalk   = require("chalk"),
      app     = express();

app.use(log, express.static(__dirname));

app.listen(5554);

function log(req, res, next) {
   console.log(chalk.bluebright(`Got request for`),  chalk.blue.underline(req.url));
   console.log(chalk.bluebright(`From `), chalk.green.underline(req.headers['x-forwarded-for'] || req.connection.remoteAddress));
}
