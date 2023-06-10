const jwt = require('jsonwebtoken');
const { JWTSecret } = require('../config/config');
const { findUserByProperties } = require('../services/user');

const authenticate = async(req,res,next)=>{
    try {
        let token = req.headers.authorization;
        if(!token){
            return res.status(401).json({message:'Unauthorized'})
        }
        token = token.split(' ')[1]
        const decode = jwt.decode(token,JWTSecret)
        const user = await findUserByProperties('_id',decode._id)
        if(!user){
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next()
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token' });
    }
}

module.exports = authenticate;