const readline = require('readline');
const fs = require('fs');
const infoStr = [];

let writeStream = fs.createWriteStream('result.csv');
let itemCount = 0;
let V = [];
let isKeySet = false;

let rl = readline.createInterface({
    input: fs.createReadStream('task.csv')
});


rl.on('line', function (line) {
    // Setting Information Keys
    if (isKeySet == false) {
        let keyIndex = line.slice(0, line.indexOf(":")).match(/\d+/);
        if (keyIndex != null) {
            if (keyIndex > 0 && keyIndex < 14)
                infoStr[keyIndex - 1] = line.slice(0, line.indexOf(":"));

            let itemStr = line.slice(line.indexOf(":") + 2, line.length);
            itemStr = itemStr.replace(/\s/g, "");
            V[keyIndex - 1] = itemStr.replace("/", ":");
            // console.log(`infoStr[${keyIndex-1}] = ${line.slice(0, line.indexOf(":"))}`);
            // console.log(`V[${keyIndex-1}] = ${itemStr.replace("/", ":")}`);
            if (keyIndex == 13) {
                isKeySet = true;
                itemCount++;
                writeStream.write(`${V[5]}:${V[6]}:${V[7]}:${V[2]} ` +
                    `${V[3]}:${V[8]}:${V[11]}:${V[10]}:CANADA:${V[12]}:${V[0]}\n`, 'utf-8');
                V = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
            }
        }
    } else {
        // check new item
        if (infoStr.indexOf(line.slice(0, line.indexOf(":"))) == 0 && itemCount > 1) {
            // new item
            // console.log(`first comm + ${line}`);
            if (V[8] != "")
                writeStream.write(`${V[5]}:${V[6]}:${V[7]}:${V[2]} ` +
                    `${V[3]}:${V[8]}:${V[11]}:${V[10]}:CANADA:${V[12]}:${V[0]}\n`, 'utf-8');
            else
                writeStream.write(`${V[5]}:${V[6]}:${V[7]}:${V[2]} ` +
                    `${V[3]}:CANADA:${V[0]}\n`, 'utf-8');
            V = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
        }

        if (line.indexOf(":") > 0) {
            let infoIndx = infoStr.indexOf(line.slice(0, line.indexOf(":")));
            // console.log(`index = ${infoIndx}`);
            if (infoIndx >= 0) {

                let itemStr = line.slice(line.indexOf(":") + 2, line.length);
                itemStr = itemStr.replace(/\s/g, "");
                V[infoIndx] = itemStr.replace("/", ":");
                // console.log(V[infoIndx]);
                if (infoIndx == 7) itemCount++;
            }
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