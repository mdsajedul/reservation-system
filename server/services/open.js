
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

async function getUpazilas(){
    const upazilas = await readData('bd-upazilas.json')
    return upazilas
}

async function getDistrictsByDivisionId (divisionId){
    const allDistricts = await getDistricts();
    const districts = allDistricts?.districts?.filter(district=>district.division_id===divisionId)
    return districts
}
 
async function getUpazilasByDistrictId (districtId){
    const allUpazilas =await getUpazilas()
    console.log(allUpazilas);
    let upazilas = allUpazilas?.upazilas?.filter((upazila)=> upazila?.district_id===districtId)
    return upazilas
}

module.exports = {
    getDivisions, getDistricts, getUpazilas, getUpazilasByDistrictId, getDistrictsByDivisionId
}