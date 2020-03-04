const readline = require('readline');
const fs = require('fs');
const infoStr = [
    "Info 1",
    "Info 2",
    "Info 3",
    "Info 4",
    "Info 5",
    "Info 6",
    "Info 7",
    "Info 8",
    "Info 9",
    "Info 10",
    "Info 11",
    "Info 12",
    "Info 13"
];

let rl = readline.createInterface({
    input: fs.createReadStream('task.csv')
});
let writeStream = fs.createWriteStream('result.csv');

let itemCount = 0;
//let itemIndex = 0;

let V = [];
rl.on('line', function (line) {
    // check new item
    if (infoStr.indexOf(line.slice(0, line.indexOf(":"))) == 0 && itemCount > 0) {
        // new item
        console.log(`first comm + ${line}`);
        if (V[8] != "")
            writeStream.write(`${V[5]}:${V[6]}:${V[7]}:${V[2]} ` +
                `${V[3]}:${V[8]}:${V[11]}:${V[10]}:CANADA:${V[12]}:${V[0]}\n`, 'utf-8');
        else
            writeStream.write(`${V[5]}:${V[6]}:${V[7]}:${V[2]} ` +
                `${V[3]}:CANADA:${V[0]}\n`, 'utf-8');
        V = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
        itemIndex = 0;
    }
    // check itemIndex
    if (line.indexOf(":") > 0) {

        let infoIndx = infoStr.indexOf(line.slice(0, line.indexOf(":"))); // ().indexOf(infoStr);

        console.log(`index = ${infoIndx}`);
        if (infoIndx >= 0) {

            let itemStr = line.slice(line.indexOf(":") + 2, line.length);
            itemStr = itemStr.replace(/\s/g, "");
            V[infoIndx] = itemStr.replace("/", ":");
            console.log(V[infoIndx]);
            if (infoIndx == 7) itemCount++;
        }
    }
});

// end
rl.on('close', function (line) {
    if (V[8] != "")
        writeStream.write(`${V[5]}:${V[6]}:${V[7]}:${V[2]} ` +
            `${V[3]}:${V[8]}:${V[11]}:${V[10]}:CANADA:${V[12]}:${V[0]}`, 'utf-8');
    else
        writeStream.write(`${V[5]}:${V[6]}:${V[7]}:${V[2]} ` +
            `${V[3]}:CANADA:${V[0]}`, 'utf-8');
});

writeStream.on('finish', () => {

});