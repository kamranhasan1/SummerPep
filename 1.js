 let fs = require("fs"); //file system system package
var readlineSync = require('readline-sync');

let content = readlineSync.question('Enter content:- ');

function writeInFileSync() {
    console.log("start");
    fs.writeFileSync("/home/kamran/learnNode/2.txt", content);
    console.log("file written successfully");
}

writeInFileSync();

 

 


let f = require("fs");
var readlinee = require("readline-sync");

let things = readlinee.question('Enter additional content: ');

function xyz() {
    f.appendFile("/home/kamran/learnNode/2.txt", things, (err) => {
        if (err) {
            console.error("Error appending to file:", err);
            return;
        }
        console.log("Content appended successfully");
    });
}

xyz();






//non blocking


function readfileAync(){
    fs.readFile("/home/kamran/learnNode/2.txt","utf-8",(err,result)=>{
        if(err){
            console.log("err reading the file ");
        }else{ 
        console.log("this is the content of your file:- \n",result);
        }
    })
}
readfileAync()