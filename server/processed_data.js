const { ModuleFilenameHelpers } = require('webpack');
const sampleData = require('./sample_data.json');

const busData = sampleData['buses'];
const linesData = sampleData['lines'];
const transformData = sampleData['transformers'];

let buses = {};

for (let i = 0; i < busData.length; i++) {
    buses[busData[i]['number']] = [];
};

for (let i = 0; i < linesData.length; i++) {
    if (linesData[i]['i'] in buses) {
        buses[linesData[i]['i']].push(linesData[i]['j'])
    } else if (linesData[i]['j'] in buses) {
        buses[linesData[i]['j']].push(linesData[i]['i'])
    }
}

module.exports = {
    buses
}