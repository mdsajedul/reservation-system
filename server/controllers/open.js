const { getDivisions, getDistricts, getUpazilas, getDistrictsByDivisionId, getUpazilasByDistrictId } = require("../services/open")
const error = require("../utils/error")

const getDivitions = async (_req,res,next)=>{
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
    const {division_id} = req.query
    try {
        if(!division_id){
            const districts = await getDistricts()
            if(!districts){
                throw error('Districts not found!')
            }
            return res.status(200).json(districts)
        }else{
            const districts = await getDistrictsByDivisionId(division_id)
            if(!districts){
                throw error('District not found!',404)
            }
            return res.status(200).json(districts)
        }
    } catch (error) {
        next(error)
    }
}

const getAllUpazila = async (req,res,next)=>{
    const {district_id} = req.query
    try {
        if(!district_id){
            const upazilas = await getUpazilas()
            if(!upazilas){
                throw error('Upazila not found!')
            }
            return res.status(200).json(upazilas)
        }else{
            const upazilas = await getUpazilasByDistrictId(district_id)
            if(!upazilas){
                throw error('Upazila not found!',404)
            }
            return res.status(200).json(upazilas)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getDivitions, getAllDistricts, getAllUpazila
}