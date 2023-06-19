import jwt from 'jsonwebtoken'

export const decodeJWT = (token)=>{
    try {
        const decoded = jwt.decode(token,{complete: true})
        return decoded;
    } catch (error) {
        console.log('Error decoding JWT:',error.message)
        return null;
    }
}