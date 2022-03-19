const express = require('express');
const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')();
//const token = require('Token.js')
const app = express();


const api_url = "";
//const response = await fetch(api_url);
let outputFile = "";

let outputFileName = prompt('Name the file where you want to output your data: ');

let fileExtention = /$\.json/;

if(fileExtention.test(outputFileName) === true){
    console.log(`Your data will be output throught the file ${outputFileName}`);
} else {
    outputFileName = `${outputFileName}.json`;
    console.log(`Your data will be output throught the file ${outputFileName}.json`);
}


const projectIds = prompt("Enter the ids of the ressources you want to get separated by a space ' ':  ");
console.log(`Your ids are: ${projectIds}`);


let projectIdsArr = projectIds.trim().split(" ");
//console.log(projectIdsArr);

//Node does not support higher order functions so I did it the Java way
let trimmedIds = [];
for (let i = 0; i < projectIdsArr.length ; i++){
    //console.log(projectIdsArr.length);
    trimmedIds.push(projectIdsArr[i].trim());
}

console.log(trimmedIds);
  
// // We get our data in chucnks in order to avoid buffering problems that happen usaly in the CLI
//   https.get('', (resp) => {

//   let data = ''; // we initialize a 'data' variable

//   // A chunk of data has been received, and we add it to the previous one
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
// //End of getting data from the buffer


// Making the directory
fs.mkdir(path.join(__dirname, '/output'), {recursive : true}, err => {
    if(err) {
        throw err;
    }
    else {
        console.log('Folder created...')
    }
});

 // Writing to file
fs.writeFile(path.join(__dirname, '/output', 'o.json'), '${data}', err => {
    if(err) {
        throw err;
    }
    else {
        console.log('File written to...')
    }
});