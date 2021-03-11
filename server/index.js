const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sampleData = require('./processed_data.js');
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.post('/key', (req, res) => {
    let number = req.body.data.number;
    let connections = req.body.data.connections;
    let result = [];
    let first = sampleData.buses[number];
    let second = sampleData.buses[first[0]]
    console.log(number, first, second);

    res.send('hello');
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})