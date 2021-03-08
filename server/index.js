const express = require('express');
const app = express();
const sampleData = require('./processed_data.js');
const port = 3000;

app.use(express.static('public'));

app.get('/key', (req, res) => {

    res.send('hello');
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})