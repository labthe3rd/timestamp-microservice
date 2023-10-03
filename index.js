/*
 * Programmer:    labthe3rd
 * date:          10/3/23
 * desc:          Takes a date in the api route and returns it as a json. This project was made for my freecodecamp certificate and uses their template with my own code
 */

// index.js
// where your node app starts
var server_port = process.env.PORT;
// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Return the date in the response
app.get("/api/:date", function (req, res) {
  let dateStr = req.params.date;
  // Check if dateStr is a timestamp number (like 1628862549000) using regex
  if (/^\d+$/.test(dateStr)) {
    dateStr = parseInt(dateStr);
  }
  //create dateOBJ
  const dateObj = new Date(dateStr);

  // If the date is invalid
  if (isNaN(dateObj.getTime())) {
    res.json({ error: "Invalid Date" });
    return;
  }
  //return date-time
  res.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString(),
  });
});

// listen for requests :)
var listener = app.listen(server_port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
