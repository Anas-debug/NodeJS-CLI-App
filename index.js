const express = require('express');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const app = express();
const api_url = "";
//const response = await fetch(api_url);
let outputFile = "";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Output File Name?', oFileName => {
    console.log(`Output file name is: ${oFileName}!`);
    readline.close();
  });


fs.mkdir(path.join(__dirname, '/output'), {recursive : true}, err => {
    if(err) {
        throw err;
    }
    else {
        console.log('Folder created...')
    }
});

fs.writeFile(path.join(__dirname, '/output', 'o.json'), '${data}', err => {
    if(err) {
        throw err;
    }
    else {
        console.log('File written to...')
    }
});