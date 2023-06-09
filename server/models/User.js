const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true
    },
    email:{
        type: String,
        validate: {
            validator : function (v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `Invalid email ${props.value}`
        },
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password is too short']
    },
    roles:{
        type: [String],
        required: true,
        default: ['User']
    }
})
const User = model('User',userSchema);
module.exports = User;