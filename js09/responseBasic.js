const express = require('express');

const app = express();

app.get('*', (request, response) => {
    response.status(404);
    response.set('methoodA', 'ABCDE');
    response.set({
        'methoodB1': 'FGHIJ',
        'methoodB2': 'KLMNO',
    });
    response.send('본문 입력');
});

app.listen(52273, () => {
    console.log('server running at http://127.0.0.1:52273');
})