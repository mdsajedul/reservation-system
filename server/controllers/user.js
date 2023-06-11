const { findUserByProperties, updateUser, createNewUser, findUser } = require("../services/user");
const error = require("../utils/error");

const getUserById =async (req,res,next)=>{
    const {userId} = req.params;
    try {
        const user =await findUserByProperties('_id',userId);
        if(!user){
            throw error('User not found!',404);
        }
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

const patchUserById = async (req,res,next)=>{
    const {userId} = req.params;
    const data = req.body;
    try {
        let user = await findUserByProperties('_id',userId)
        if(!user){
            throw error('User not found!',404);
        }
        user = await updateUser(userId,data);
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

const postUser = async (req,res,next)=>{
    const {username,email,password,roles} = req.body
    try {
        const user = createNewUser({username,email,password,roles})
        if(!user){
            throw error('User not created!',400);
        }
        return res.status(201).json({message:'User created succussfuly.'},user)
    } catch (error) {
        next(error)
    }
}

const getUsers = async (req,res,next)=>{
    try {
        const users = await findUser()
        if(!users){
            throw error('Users not found!',404)
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUserById, patchUserById, postUser, getUsers
}