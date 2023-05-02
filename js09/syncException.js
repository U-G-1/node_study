const fs = require('fs');

/*
try {
    const file = fs.readFileSync('none.txt');
    console.log(file);
    console.log(file.toString());
} catch (exception) {
    console.log('예외 발생');
    console.log(exception);
}
*/

fs.readFile('none.txt', (error, file) => {
    if (error) {
        console.log('에러발생');
        console.log(error);
    } else {
        console.log(file);
        console.log(file.toString());
    }
})