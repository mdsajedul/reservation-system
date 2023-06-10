const User = require("../models/User");
const error = require("../utils/error");

const findUser =()=>{
    return User.find();
}

const findUserByProperties =(key,value)=>{
    if(key==='_id'){
        return User.findById(value).exec()
    }
    return User.find({[key]: value}).exec()
}

const createNewUser = ({username,email,password,roles})=>{
    const user = new User({
        username,
        email,
        password,
        roles: roles? roles : ['User']
    })
    return user.save()
}

const updateUser = async(id,data)=>{
    const user = await findUserByProperties('email', data.email);
    if(user){
        throw error('Email already in use!', 200);
    }
    return User.findByIdAndUpdate(id,{...data},{new: true})
}

module.exports = {
    findUser, findUserByProperties, createNewUser, updateUser
}