const mongoose = require("mongoose");
const shortid = require("shortid");
const bcrypt = require("bcrypt");


const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;

const productSchema = new schema({
 _id: {
        type: String,
     default: shortid.generate
    },
    name: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: String, required: true },
    category:{type:String, required: true}
    

})



const productModel = mongoose.model("products", productSchema);
module.exports = productModel;