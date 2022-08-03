const {mongoose} = require("../config/db")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:[String],
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user" 
    },
    // brand: {
    //     type: [String],
    // },
})

const ProductModel = mongoose.model("product",productSchema)

module.exports = ProductModel 