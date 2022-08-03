const {mongoose} = require("../config/db")

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Name is required"],
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:[true,"Email was already registered"],
        match:[/^[\w\.-]+@[\w]+\.[\.\w]+$/,"Email invalid"]
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:1
    },
    provider:{
        local:Boolean,
        facebook:Boolean,
        google:Boolean,
    },
    idProvider:{
        facebook:String,
        google:String,
    }
})


const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel