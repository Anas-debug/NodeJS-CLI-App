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

console.log(path.extname(outputFileName));
if(path.extname(outputFileName) === '.json'){
    console.log(`Your data will be output throught the file ${outputFileName}`);
} else {
    console.log(`Your data will be output throught the file ${outputFileName}.json`);
    outputFileName = `${outputFileName}.json`;
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


// Making the request  
var request = http.request({
  host: 'https://api.shotcut.com/api/v3/projects',
  port: 443,
  method: 'GET',
  headers: {
    'Shortcut-Token': `${SHORTCUT_API_TOKEN}`,
    'Content-Type': 'application/json',
    'Location': 'https://api.shotcut.com/api/v3/projects',
    'Content-Length': getBody.length
  }
}, function(response) {
  var reply = '';
  response.on('data', function(chunk) {
    reply += chunk;
  });

  response.on('end', function() {
    return cb(reply);
  });
});

request.write(getBody);
request.end();
//ends


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
fs.writeFile(path.join(__dirname, '/output', 'outputFileName'), '${reply}', err => {
    if(err) {
        throw err;
    }
    else {
        console.log('File written to...')
    }
});