const { JWTSecret, bcryptSalt } = require("../config/config")
const error = require("../utils/error")
const { findUserByProperties, createNewUser } = require("./user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerService = async({username, email, password, roles})=>{
    let user = await findUserByProperties('email', email)
    if(user) throw error('User already exist!',400)

    const salt = await bcrypt.genSalt(bcryptSalt);
    const hash = await bcrypt.hash(password, salt);

    return createNewUser({username, email, password: hash, roles})
}

const loginService =async ({email,password})=>{
    const user = await findUserByProperties('email',email)
    if(!user){
        throw error('Invalid Credential',400);
    }
    const isMatch = await bcrypt.compare(password,user?.password);
    if(!isMatch) {
        throw error('Invalid Credential',400)
    }
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
        roles: user.roles
    }
    return jwt.sign(payload,JWTSecret,{expiresIn:'3h'})
}

module.exports = {
    registerService, loginService
}