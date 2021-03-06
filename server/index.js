const express = require('express');
const app = express();
const fs = require('fs');
const sampleData = require('./processed_data.js');
const port = 3000;

app.use(express.static('public'));

app.get('/key', (req, res) => {
    console.log(sampleData);
    res.send('hello');
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})