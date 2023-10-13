const userModel = require("../models/users")
const productModel = require("../models/products")
const jwt = require("jsonwebtoken")

require('dotenv').config()



const createUser = async (req, res) => {
    const createUserProfile = req.body
    console.log(createUserProfile)

    const existingUser = await userModel.findOne({
        email: createUserProfile.email

    }); 
    
    if (existingUser) {
        return res.status(409).json({
            message: "user created already",

        })
    };

    const user = await userModel.create({
        name: createUserProfile.name,
        email: createUserProfile.email,
        password: createUserProfile.password,
        role: createUserProfile.role

    });

    const token =  jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET)
    console.log(token)
    
    
    return res.status(201).json({
        message: "user successfully created",
        user,
        token

    });
}




const createProduct = async (req, res) => {
    const createProductProfile = req.body
    console.log(createProductProfile)

    const existingProduct = await productModel.findOne({
        name: createProductProfile.name

    });
    
    if (existingProduct) {
        return res.status(409).json({
            message: "product created already",

        })
    };

    const product = await productModel.create({
        name: createProductProfile.name,
        size: createProductProfile.size,
        price: createProductProfile.price,
        category: createProductProfile.category

    });

    
    return res.status(201).json({
        message: "product successfully created",
        product,
        

    });
};

const getAllProduct = async (req, res) => {
    try {
        const allProducts = await productModel.find({})
        res.status(200).send(allProducts);
        console.log('All products successfully gotten') 
    } catch (error) {
        console.log(error)
        res.status(400)
    }
    
   
    
};

const getOneProduct = async (req, res) => {

    try {
        const productId = req.params._id
        console.log(productId)
        const oneProduct = await productModel.findById(productId)
        console.log(oneProduct)
        res.status(200).send(oneProduct);
    console.log('product successfully gotten')
    } catch (error) {
        console.log(error)
        res.status(400)
    }
    
   
};




const login = async (req, res) => {
    const createUserProfile = req.body
    console.log(createUserProfile)
    
    if (!(createUserProfile.email && createUserProfile.password)) {
        res.status(400).send("email or password required")
    }

    const user = await userModel.findOne({
        email: createUserProfile.email

    }); 
// console.log(user)
    if (!user) {
        return res.status(404).json({
            message: "This user does not exist",

        })
    }

     
    const validPassword = await user.isValidPassword(createUserProfile.password)
    console.log(createUserProfile.email)

    if (!validPassword) {
        return res.status(422).json({
            message: "wrong email or password",
            
        })
    }
   

    const token = await jwt.sign({ email: user.email, _id: user._id}, 
        process.env.JWT_SECRET, 
        { expiresIn: "2h" })
        
    
        return res.status(201).json({
            message: "successfully logged in",
            user,
            token
        })
    
    
}






module.exports = {
    createUser,
    login,
    getAllProduct,
    getOneProduct,
    createProduct
   
}
  
