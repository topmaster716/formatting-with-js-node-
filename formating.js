const readline = require("readline");
const fs = require("fs");
let rl = readline.createInterface({
  input: fs.createReadStream("task.csv")
});
let writeStream = fs.createWriteStream("result.csv");
const outPattern = "V1:V2:V3:V4:V5:V6 V7:V8:CANADA:V9:V13";
const infoStr = [
  "email",
  "Gaming name",
  "firstname",
  "lastname",
  "dob",
  "favorite color",
  "code",
  "picture",
  "address",
  "city",
  "province",
  "postal",
  "tel",
  "V14",
  "V15",
  "V16",
  "V17",
  "V18",
  "V19",
  "V20"
];
let V = [
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " "
];
function writeInfo() {
  let outInfo = outPattern.slice(0);
  for (let i = 19; i >= 0; i--) {
    outInfo = outInfo.replace(`V${i + 1}`, `${V[i]}`);
  }
  writeStream.write(outInfo.replace(/ :/g, "").replace(/: /g, ""), "utf-8");
}

let itemCount = 0;
//let V = [];

rl.on("line", function(line) {
  // check new item
  let infoKey = line
    .slice(0, line.indexOf(":") + 1)
    .replace(" :", "")
    .replace(":", "");
  let infoIndex = -1;
  if (infoStr.includes(infoKey)) {
    infoIndex = infoStr.indexOf(infoKey);
    let itemStr = line.slice(line.indexOf(":") + 1);
    itemStr = itemStr.replace("/", ":").replace(/[^a-zA-Z0-9]/g, "");
    if (infoIndex == 0) {
      //new item
      itemCount && writeInfo();
      V = [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
      ];
      itemCount++;
    }
    V[infoIndex] = itemStr;
    //  console.log(V[infoIndex]);
  }
});

// end
rl.on("close", function(line) {
  writeInfo();
});

writeStream.on("finish", () => {});
