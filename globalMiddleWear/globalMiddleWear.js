const userModel = require("../models/users")
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


    const user = await userModel.findOne({ email: decoded.email })
    
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

    const authHeader = req.headers;

    if (!authHeader.authorization) {
        return res.status(401).json({ message: 'You are not authenticated!' });
    }
     
    const token = authHeader.authorization.split(' ')[1]; 

    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
   


    const user = await userModel.findOne({ email: decoded.email })
    console.log(user)

    const userPassword = await userModel.findOne({ password: decoded.password })

    console.log(decoded.userPassword)
    if (!user  ) {
        return res.status(401).json({
            message: "Unauthorized",
        })
    }

    req.user = user;

    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'You are not authorized!' });
    }


    next()

} 




module.exports = {
    checkAdmin,
    authenticateUser
}