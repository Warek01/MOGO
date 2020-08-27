// Experimental
"use strict";

const express = require("express"),
      chalk   = require("chalk"),
      app     = express();

app.use(log, express.static(__dirname));

app.route("/connections").get((req, res, next) => {
   try {
      console.log(req.query);
      switch(req.query.ipname) {
         case "my":
            res.end(req.ip || req.connection.remoteAddress);
            break;

         default:
            res.sendFile(__dirname + "/administration/connections.html");
            res.end();
            break;
      }

   } catch (err) {
      res.end(err.name + "\n" + err.message);
   }
   next();
});

app.listen(5554);

function log(req, res, next) {

   if (req.url === "/") {
      console.log(
         chalk.greenBright("---------------------------------------------------------------------------\n") +
         chalk.hex("#ff6b81").bold("New connection from") + " " +
         chalk.yellow.italic.underline((req.connection.remoteAddress || req.ip).match(/([\d\.]+)/)[0]) + ":" +
         chalk.redBright(req.connection.remotePort) + " " +
         chalk.bgWhite.black(req.connection.remoteFamily) +
         "\non " +
         chalk.hex("#34ace0")(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`) + " " +
         chalk.hex("#3742fa")(`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`)  
      );
   }

   console.log(chalk`{white.bold.dim Requested} {blueBright.underline ${req.url}}`,
      
   );
   next();
}
