// Experimental
"use strict";

const express = require("express"),
      chalk   = require("chalk"),
      app     = express();

app.use(log, express.static(__dirname));

app.listen(5554);

function log(req, res, next) {

   if (req.url === "/") {
      console.log(
         chalk.greenBright("---------------------------------------------------------------------------\n") +
         chalk.hex("#ff6b81").bold("New connection from") + " " +
         chalk.yellow.italic.underline((req.headers['x-forwarded-for'] || req.connection.remoteAddress).match(/([\d\.]+)/)[0]) + ":" +
         chalk.redBright(req.connection.remotePort) + " " +
         chalk.bgWhite.black(req.connection.remoteFamily) +
         "\non " + 
         chalk.hex("#34ace0")(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
      );
   }

   console.log(chalk`{white.bold.dim Requested} {blueBright.underline ${req.url}}`,
      
   );
   next();
}
