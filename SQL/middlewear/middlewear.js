const joi = require("joi")

const validateCreateUser = async (req, res, next) => {
    try {
        const schema = joi.object({
            name: joi.string().empty().required().messages({
                "string.base": `"name" must be of type "text"`,
                "string.empty": `"name" cannot be empty`,
                "string.required": `"name" is required`,
            }),
            email: joi.string().empty().email().required().messages({
                "string.base": `"email" must be of type "text"`,
                "string.empty": `"email" cannot be empty`,
                "string.required": `"email" is required`,
            }),
            password: joi.string().empty().min(8).required().messages({
                "string.base": `"password" must be of type "text"`,
                "string.empty": `"password" cannot be empty`,
                "string.required": `"password" is required`,
            }),
           
        })
        await schema.validateAsync(req.body, { abortEarly: true })
        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
        
    }
}
const validateCreateAdmin= async (req, res, next) => {
    try {
        const adminSchema = joi.object({
            name: joi.string().empty().required().messages({
                "string.base": `name" must be of type "text"`,
                "string.empty": `"name" cannot be empty`,
                "string.required": `"name" is required`,
            }),
            email: joi.string().empty().email().required().messages({
                "string.base": `"email" must be of type "text"`,
                "string.empty": `"email" cannot be empty`,
                "string.required": `"email" is required`,
            }),
            password: joi.string().empty().min(8).required().messages({
                "string.base": `"password" must be of type "text"`,
                "string.empty": `"password" cannot be empty`,
                "string.required": `"password" is required`,

            }),
            users_id: joi.string().empty().min(8).required().messages({
                "string.base": `"users_id" must be of type "text"`,
                "string.empty": `"users_id" cannot be empty`,
                "string.required": `"users_id" is required`,
                
            }),
           
        })
        await adminSchema.validateAsync(req.body, { abortEarly: true })
        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
        
    }
}
    
const validateLogin = async (req, res, next) => {
    try {
        const loginSchema = joi.object({
            password: joi.string().empty().required().messages({
                "string.base": `"password" must be of type "text"`,
                "string.empty": `"password" cannot be empty`,
                "string.required": `"password" is required`,
                  
            }),
            email: joi.string().email().empty().required().messages({
                "string.base": `"email" must be of type "text"`,
                "string.empty": `"email" cannot be empty`,
                "string.required": `"email" is required`,
                      
            }),
        })

            await loginSchema.validateAsync(req.body, { abortEarly: true })
            next()
  
    }
    catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
    
    }
}


const validateProduct = async (req, res, next) => {
    try {
        const ProductSchema = joi.object({
            name: joi.string().empty().required().messages({
                "string.base": `"name" must be of type "text"`,
                "string.empty": `"name" cannot be empty`,
                "string.required": `"name" is required`,
            }),
            size: joi.string().empty().required().messages({
                "string.base": `"size" must be of type "text"`,
                "string.empty": `"size" cannot be empty`,
                "string.required": `"size" is required`,
            }),
            price: joi.string().empty().min(1).required().messages({
                "string.base": `"price" must be of type "text"`,
                "string.empty": `"price" cannot be empty`,
                "string.required": `"price" is required`,
            }),
            category: joi.string().empty().required().messages({
                "string.base": `"category" must be of type "text"`,
                "string.empty": `"category" cannot be empty`,
                "string.required": `"category" is required`,
            })
        })
        await ProductSchema.validateAsync(req.body, { abortEarly: true })
        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
    
    }
}



module.exports = {
    validateCreateUser,
    validateLogin,
    validateProduct,
    validateCreateAdmin

}