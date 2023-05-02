const fs = require('fs');
const async = require('async');

async.parallel({
    fileA: (callback) => {
        fs.readFile('textfile.txt', callback);
    },
    fileB: (callback) => {
        fs.readFile('textfile.txt', callback);
    },
    fileC: (callback) => {
        fs.readFile('textfile.txt', callback);
    }
}, (error, result) => {
    console.log(result.fileA);
    console.log(result.fileB);
    console.log(result.fileC);
})