const readline = require('readline');
const fs = require('fs');

let rl = readline.createInterface({
    input: fs.createReadStream('task.csv')
});
let writeStream = fs.createWriteStream('result.csv');

// let line_no = 0;
let item_no = 0;

let infoItem = [""];
rl.on('line', function(line) {
    // line_no++;
    // check new item
    if(line.indexOf("Info 1:") == 0 && item_no > 0){
        // new item
        writeStream.write(`${infoItem[5]}:${infoItem[6]}:${infoItem[7]}:${infoItem[2]} ` + 
        `${infoItem[3]}:${infoItem[8]}:${infoItem[11]}:${infoItem[10]}:CANADA:${infoItem[12]}:${infoItem[0]}`, 'utf-8');
        writeStream.end();
        infoItem = ["","","","","","","","","","","","",""];
    }
    if(line.indexOf("Info") == 0){
        let infoIndx = line.slice(5, line.indexOf(":"));
        let itemStr = line.slice(line.indexOf(":") + 2, line.length);
        itemStr = itemStr.replace(/\s/g,"");
        infoItem[infoIndx - 1] = itemStr.replace("/",":");
        if (infoIndx == 8) item_no ++;
    }
});

// end
rl.on('close', function(line) {
    // console.log('Total lines : ' + line_no);
    writeStream.write(`${infoItem[5]}:${infoItem[6]}:${infoItem[7]}:${infoItem[2]} ` +
    `${infoItem[3]}:${infoItem[8]}:${infoItem[11]}:${infoItem[10]}:CANADA:${infoItem[12]}:${infoItem[0]}`, 'utf-8');
    writeStream.end();
});

writeStream.on('finish', () => {
    // console.log('wrote all data to file');
});

