// Experimental
"use strict";

const express = require("express"),
      chalk   = require("chalk"),
      app     = express();

app.use(log, express.static(__dirname));

app.listen(5554);

function log(req, res, next) {
   console.log(chalk`{white.bold.bgBlack Got request for} {blue.underline ${req.url}}`,
      chalk`{white.bold.bgBlack from} {green.underline ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}}`,
      chalk`{bgRed.white :${req.connection.remotePort}}`,
      chalk`| {bgWhite.black ${req.connection.remoteFamily}}`
   );
   next();
}
