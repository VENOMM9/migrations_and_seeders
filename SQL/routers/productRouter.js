const express = require("express");
const controller = require("../controller/controller");
const middlewear = require("../middlewear/middlewear");
const globalMiddlewear = require("../globalMiddlewear/globalMiddlewear");

const productRouter = express.Router();

productRouter.post(
  "/products",
  middlewear.validateProduct,
  
  controller.createProduct
);
productRouter.get(
  "/",
  globalMiddlewear.authenticateUser,
  controller.getAllProduct
);
productRouter.get(
  "/:_id",
  globalMiddlewear.authenticateUser,
  controller.getOneProduct
);

module.exports = productRouter;
