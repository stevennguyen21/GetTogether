const { table } = require('console');
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
    let currentLine = linesData[i];
    if (currentLine['i'] in buses  && currentLine['j'] in buses) {
        if (buses[currentLine['i']].indexOf(currentLine['j']) === -1) {
            buses[currentLine['i']].push(currentLine['j'])
        }
        if (buses[currentLine['j']].indexOf(currentLine['i']) === -1) {
            buses[currentLine['j']].push(currentLine['i']);
        }
    }
}

for (let i = 0; i < transformData.length; i++) {
    let currentTransform = transformData[i];
    if (currentTransform['i'] in buses && currentTransform['j'] in buses) {
        if (currentTransform['k'] === 0) {
            if (buses[currentTransform['i']].indexOf(currentTransform['j']) === -1) {
                buses[currentTransform['i']].push(currentTransform['j']);
            }
            if (buses[currentTransform['j']].indexOf(currentTransform['i']) === -1) {
                buses[currentTransform['j']].push(currentTransform['i']);
            }
        } else if (currentTransform['k'] in buses) {
            if (buses[currentTransform['i']].indexOf(currentTransform['j']) === -1) {
                buses[currentTransform['i']].push(currentTransform['j']);
            }
            if (buses[currentTransform['j']].indexOf(currentTransform['i']) === -1) {
                buses[currentTransform['j']].push(currentTransform['i']);
            }
            if (buses[currentTransform['j']].indexOf(currentTransform['k']) === -1) {
                buses[currentTransform['j']].push(currentTransform['k']);
            }
            if (buses[currentTransform['k']].indexOf(currentTransform['j']) === -1) {
                buses[currentTransform['k']].push(currentTransform['j']);
            }
            if (buses[currentTransform['i']].indexOf(currentTransform['k']) === -1) {
                buses[currentTransform['i']].push(currentTransform['k']);
            }
            if (buses[currentTransform['k']].indexOf(currentTransform['i']) === -1) {
                buses[currentTransform['k']].push(currentTransform['i']);
            }
        }
    }
}

module.exports = {
    buses
}