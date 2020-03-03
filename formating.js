const readline = require('readline');
const fs = require('fs');

let rl = readline.createInterface({
    input: fs.createReadStream('task.csv')
});
let writeStream = fs.createWriteStream('result.csv');

let item_no = 0;

let infoItem = [""];
rl.on('line', function(line) {
    // check new item
    if(line.indexOf("Info 1:") == 0 && item_no > 0){
        // new item
        console.log("comment1");
        if(infoItem[8] != "")
            writeStream.write(`${infoItem[5]}:${infoItem[6]}:${infoItem[7]}:${infoItem[2]} ` + 
            `${infoItem[3]}:${infoItem[8]}:${infoItem[11]}:${infoItem[10]}:CANADA:${infoItem[12]}:${infoItem[0]}\n`, 'utf-8');
        else
            writeStream.write(`${infoItem[5]}:${infoItem[6]}:${infoItem[7]}:${infoItem[2]} ` + 
            `${infoItem[3]}:CANADA:${infoItem[0]}\n`, 'utf-8');
        infoItem = ["","","","","","","","","","","","",""];
    }
    if(line.indexOf("Info") == 0){
        let infoIndx = line.slice(5, line.indexOf(":"));
        let itemStr = line.slice(line.indexOf(":") + 2, line.length);
        itemStr = itemStr.replace(/\s/g,"");
        infoItem[infoIndx - 1] = itemStr.replace("/",":");
        if (infoIndx == 8) item_no ++;
        console.log(infoIndx);
    }
});

// end
rl.on('close', function(line) {
    console.log("end");
    for(let i=0; i < 13; i ++)
        console.log(infoItem[i]);
    if(infoItem[8] != "")
        writeStream.write(`${infoItem[5]}:${infoItem[6]}:${infoItem[7]}:${infoItem[2]} ` + 
        `${infoItem[3]}:${infoItem[8]}:${infoItem[11]}:${infoItem[10]}:CANADA:${infoItem[12]}:${infoItem[0]}`, 'utf-8');
    else
        writeStream.write(`${infoItem[5]}:${infoItem[6]}:${infoItem[7]}:${infoItem[2]} ` + 
        `${infoItem[3]}:CANADA:${infoItem[0]}`, 'utf-8');
});

writeStream.on('finish', () => {

});

