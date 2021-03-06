const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use('/css',express.static(__dirname +'/css'));
app.use('/assets',express.static(__dirname +'/assets'));
app.use('/scripts',express.static(__dirname +'/scripts'));

app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + "/src/index.html");
})
app.get('/customers.html', (request, response) => {
    response.sendFile(__dirname + "/src/customers.html");
})
app.get('/pricing.html', (request, response) => {
    response.sendFile(__dirname + "/src/pricing.html");
})
app.get('/resources.html', (request, response) => {
    response.sendFile(__dirname + "/src/resources.html");
})

app.listen(PORT, HOST);