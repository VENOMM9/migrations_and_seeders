const express = require("express");
const controller = require("../controller/controller")
const middlewear = require("../middlewear/middlewear")



const userRouter = express.Router();

userRouter.post("/signup", middlewear.validateCreateUser, controller.createUser)
userRouter.post("/login", middlewear.validateLogin, controller.login)





module.exports = userRouter

