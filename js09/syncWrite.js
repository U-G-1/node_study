const fs = require('fs');

/*
fs.writeFileSync('output.txt', '안녕하세요');
console.log('파일쓰기 끝');
*/

fs.writeFile('output.txt', '안녕하세요', (error) => {
    console.log('파일쓰기 끝');
})
