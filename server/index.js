const express = require('express');
const app = express();
const fs = require('fs');
const sampleData = require('./sample_data.json');
const port = 3000;

app.use(express.static('public'));

app.get('/key', (req, res) => {
    res.send(sampleData);
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})