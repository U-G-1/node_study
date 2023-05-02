const os = require('os');

console.log(os.hostname());

const url = require('url');

const parsedObject = url.parse('https://www.swu.ac.kr/index.dox');

console.log(parsedObject);