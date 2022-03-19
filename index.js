const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express()
const api_url = "";
//const response = await fetch(api_url);

fs.mkdir(path.join(__dirname, '/output'), {recursive : true}, err => {
    if(err) {
        throw err;
    }
    else {
        console.log('Folder created...')
    }
});

fs.writeFile(path.join(__dirname, '/output', 'o.json'), `${data}`, err => {
    if(err) {
        throw err;
    }
    else {
        console.log('File written to...')
    }
});