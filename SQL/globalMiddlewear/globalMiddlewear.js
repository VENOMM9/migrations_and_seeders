const userModel = require("../models/users");
const adminModel = require("../models/admins");

const jwt = require("jsonwebtoken")


const authenticateUser = async (req, res, next) => {
    try {
        const authHeader = req.headers;
        console.log(authHeader)

    if (!authHeader.authorization) {
        return res.status(401).json({ message: 'You are not authenticated!' });
    }
     
    const token = authHeader.authorization.split(' ')[1]; 

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)


        const user = await userModel.findOne({ where:{email: decoded.email } })
    
    if (!user) {
        return res.status(401).json({
            message: "Unauthorized",
        })
    }

    req.user = user;

    next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Unauthorized",
        })
    }
}

const checkAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers;

        if (!authHeader.authorization) {
            return res.status(401).json({ message: 'You are not authenticated!' });
        }
     
        const token = authHeader.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
   


        const user = await userModel.findOne({ where: { email: decoded.email } })

        console.log(user)


        console.log(decoded.userPassword)
        if (user.email !== "manBar@gmail.com") {
            return res.status(401).json({
                message: "Unauthorized",
            })
        }
        if (user.email == "manBar@gmail.com") {

            req.user = user;
           
           

        }

        

   

        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Unauthorized",
        })


    }
}




module.exports = {
    checkAdmin,
    authenticateUser
}