// 모듈 추출
const fs = require('fs');
const async = require('async');

// const { fileURLToPath } = require('url');

// 파일을 읽어들이고 출력
// const file = fs.readFileSync('textfile.txt');
// console.log(file);
// console.log(file.toString());

// 파일을 읽어 들입니다.
/* fs.readFile('textfile.txt', (error, file) => {
    console.log(file);
    console.log(file.toString());
});
*/

// 병렬 파일 읽기
async.parallel([
    (callback) => { fs.readFile('textfile.txt', callback); },
    (callback) => { fs.readFile('textfile.txt', callback); },
    (callback) => { fs.readFile('textfile.txt', callback); },
],(error, results) => {
    console.log(results.toString());
});