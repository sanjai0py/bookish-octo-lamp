const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    console.log(__dirname)
    res.send('Hello World!');
});

app.get('/big-json', (req, res) => {
    res.sendFile(__dirname + '/data/really-big.json');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
