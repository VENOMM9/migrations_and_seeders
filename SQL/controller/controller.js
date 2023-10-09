
const userModel = require("../models/users")
const adminModel = require("../models/admins")
const productModel = require("../models/products")


const jwt = require("jsonwebtoken")

require('dotenv').config()



const createUser = async (req, res) => {
    const createUserProfile = req.body

    const existingUser = await userModel.findOne({
        where: { email: createUserProfile.email }

    }); 
    
    if (existingUser) {
        return res.status(409).json({
            message: "user created already",

        })
    };

    const user = await userModel.create({
        names: createUserProfile.names,
        email: createUserProfile.email,
        password: createUserProfile.password,
        

    });

    const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET)
    console.log(token)
    
    
    return res.status(201).json({
        message: "user successfully created",
        user,
        token

    });
}


const createAdmin = async (req, res) => {
    const createAdminProfile = req.body

    const existingAdmin = await adminModel.findOne({
        where: { email: createAdminProfile .email }

    }); 
    
    if (existingAdmin) {
        return res.status(409).json({
            message: "user created already",

        })
    };

    const admin = await adminModel.create({
        names: createAdminProfile .name,
        email: createAdminProfile .email,
        password: createAdminProfile.password,
        users_id: createAdminProfile .users_id
        

    });

    const token =  jwt.sign({ email:admin.email, id: admin.id }, process.env.JWT_SECRET)
    console.log(token)
    
    
    return res.status(201).json({
        message: "admin successfully created",
        admin,
        token

    });
}




const createProduct = async (req, res) => {
    const createProductProfile = req.body

    const existingProduct = await productModel.findOne({
        where: { names: createProductProfile.names }

    });
    
    if (existingProduct) {
        return res.status(409).json({
            message: "product created already",

        })
    };

    const product = await productModel.create({
        names: createProductProfile.names,
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
        const allProducts = await productModel.findAll()
        res.status(200).send(allProducts);
        console.log('All products successfully gotten') 
    } catch (error) {
        console.log(error)
        res.status(400)
    }
    
   
    
};

const getOneProduct = async (req, res) => {

    try {
        const productId = req.params.id
        console.log(productId)
        const oneProduct = await productModel.findOne({ where: { id: productId } })
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
        where: { email: createUserProfile.email }

    }); 
console.log(user)
    if (!user) {
        return res.status(404).json({
            message: "This user does not exist",

        })
    }

     
    const validPassword = await user.validPassword(createUserProfile.password)
    
    console.log(validPassword)

    if (!validPassword) {
        return res.status(422).json({
            message: "wrong email or password",
            
        })
    }
   

    const token = jwt.sign({ email: user.email, id: user.id}, 
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
    createProduct,
    createAdmin
   
}
  
