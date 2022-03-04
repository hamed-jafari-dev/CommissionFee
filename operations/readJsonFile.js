const fs = require('fs');
const path = require('path');

const readJsonFile = (fileName) => {
    let rawdata = fs.readFileSync(path.resolve(`./${fileName}.json`));
    return JSON.parse(rawdata);
};

module.exports = readJsonFile;

