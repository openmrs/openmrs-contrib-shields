const http = require("http");

var options = {
  host: "localhost",
  port: process.env.OMRS_SHIELDS_PORT || 3033,
  path: "/plan/TRUNK/MASTER",
  method: "GET",
  timeout: 2000
};

var request = http.request(options, (res) => {
  var data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    if (res.statusCode !== 200) {
      process.exit(1); // fail if any status received but 200 OK
    }
    // Extract value of <title> tag from SVG output
    var title = data.match(/(?<=<title>)[^<]+/g);
    if (title == null) {
      process.exit(1); // fail if response doesn't contain <title> tag
    }
    // Title is something like "TRUNK MASTER: passing". If the Bamboo API library
    // isn't working properly, it will be "TRUNK MASTER: unknown", so we accept any 
    // title as long as the last word isn't "unknown".
    var titleWords = title[0].split(" ");
    var titleLastWord = titleWords[titleWords.length - 1];
    if (titleLastWord == "unknown") {
      process.exit(1); // Bamboo API isn't working
    }
    // At this point, we have a valid title, so we assume all is good
    process.exit(0);
  });
});

request.on("error", function (err) {
  // If any error occurs, share it and fail
  console.log("ERROR");
  console.log(err);
  process.exit(1);
});

request.end();