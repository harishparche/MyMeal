const http = require('http');
const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;
const app = express();

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

app.get('/', function(req, res) {
    const data = fs.readFileSync('index.html');
    res.end(data);
})

app.listen(3000);
