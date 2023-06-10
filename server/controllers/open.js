const { getDivisions, getDistricts } = require("../services/open")
const error = require("../utils/error")

const getDivitions = async (req,res,next)=>{
    try {
        const divisions = await getDivisions()
        if(!divisions){
            throw error('Division not found!')
        }
        return res.status(200).json(divisions)
    } catch (error) {
        next(error)
    }
}
const getAllDistricts = async (req,res,next)=>{
    try {
        const districts = await getDistricts()
        if(!districts){
            throw error('Districts not found!')
        }
        return res.status(200).json(districts)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getDivitions, getAllDistricts
}