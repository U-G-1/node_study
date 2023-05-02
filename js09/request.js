const request = require('request');

const url = 'https://www.swu.ac.kr/index.dox';
request(url, (error, response, body) => {
    console.log(body);
})