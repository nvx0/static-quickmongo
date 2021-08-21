function createConfig() {
    let Object = { "mongoURI": `Your MongoDB atlas URL` };

    fs.writeFileSync("./mongoConfig.json", JSON.stringify(Object, null, 4), (err) => {
        if (err) throw new Error(err);
        return true;
    });
}
 
const { Database } = require("quickmongo");
const fs = require("fs");

  if (fs.existsSync("./mongoConfig.json")) {
    //file exists
  } else {
    console.log("error | File ./mongoConfig.json is not present in current folder.")
    console.log("  ")
    console.log("info | Creating config file.. (One-Time fix)")
    createConfig()
    console.log("info | Please set your MongoDB atlas URL to proceed.")
    console.log("  ")
    console.log("info | *Check if NodeJS has permissions to write / read files ")
    process.exit()
  }

let getURLFromConfig = fs.readFileSync("./mongoConfig.json")

const data = JSON.parse(getURLFromConfig);

const db = new Database(data.mongoURI);
module.exports = db;



