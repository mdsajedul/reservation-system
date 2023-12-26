const Profile = require("../models/Profile");
const User = require("../models/User");
const { findProfileByProperties } = require("../services/profile");
const { findUserByProperties, updateUser, createNewUser, findUser } = require("../services/user");
const error = require("../utils/error");
const { getProfileByUserId } = require("./profile");

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
        return res.status(201).json({message:'User created successfully.'},user)
    } catch (error) {
        next(error)
    }
}


const getUsers = async (req, res, next) => {
    try {
        let users = await User.find();
        const profilePromises = users.map((user) => findProfileByProperties('userId', user._id));
        
        const profiles = await Promise.all(profilePromises);
        users = users.map((user, index) => {
            const profile = profiles[index];
            return { ...user.toObject(), profile };
        });

        if (!users || users.length === 0) {
            throw new Error('Users not found!', 404);
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// const getAllUsers = async (req,res,next)=>{
//     let profiles = await Profile.find().populate({path:'userId',select:'username'})
// }


module.exports = {
    getUserById, patchUserById, postUser, getUsers
}