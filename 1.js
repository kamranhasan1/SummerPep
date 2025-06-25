let fs = require("fs")//file system ..system package
var readlineSync = require('readline-sync')

let content  = readlineSync.question('Enter content:- ');

function writeInFileSync(){
	console.log("start");
	fs.writeFileSync("/home/kamran/learnNode/2.txt",content,(err)=>{
        if (err){
            console.log("there is an err")
        }
        console.log("file written successfuly ")
    })

}

 writeInFileSync();

 




writeInFileAsync();

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
