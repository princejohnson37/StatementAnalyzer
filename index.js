const csvParser = require("csv-parser");
const fs = require("fs");
const path = require("path");
const csvResults = [];

const readStream = fs.createReadStream(
  path.join(__dirname, "csv", "march.csv")
);
readStream
  .pipe(csvParser())
  .on("data", (data) => csvResults.push(data))
  .on("end", () => {
    // console.log(csvResults);
    console.log([csvResults.length - 1]);
    for (var i = 0; i < csvResults.length; i = i + 1) {
      console.log(csvResults[i]._1.trim());
      console.log(i);
      console.log(csvResults[i]._1.trim().split(" "));
    }
  });
