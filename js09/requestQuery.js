const express = require('express');

const app = express();

app.get('*', (request,response) => {
    console.log(request.query);
    response.send(requst.query);
});

app.listen(52273, () => {
    console.log('server running at http://127.0.0.1:52273');
});