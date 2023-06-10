const { loginService, registerService } = require("../services/auth")

const loginController =async (req,res,next)=>{
    const {email,password} = req.body
    try {
        const user = await loginService({email,password})
        res.status(200).json({message:'User logged in successfully', user})
    } catch (error) {
        next(error)
    }
}

const registerController =async (req,res,next)=>{
    const {username,email,password} = req.body
    try {
        const user = await registerService({username,email,password})
        res.status(201).json({message:'User Created Successfully',user})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    loginController, registerController
}