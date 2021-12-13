const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static(__dirname + '/src'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/src/index.html");
})

app.listen(PORT, HOST);