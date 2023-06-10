
const fs = require('fs');
const path = require('path');
const error = require('../utils/error')
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

async function readData (filename){
    const filePath = path.join(__dirname,`../data/${filename}`)
    try {
        const data = await readFileAsync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        throw error(err,404);
    }
}

async function getDivisions() {
    const divisions = await readData('bd-divisions.json');
    return divisions;
  }

async function getDistricts(){
    const districts = await readData('bd-districts.json');
    return districts;
}

module.exports = {
    getDivisions,getDistricts
}