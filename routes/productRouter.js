const express = require("express");
const controller = require("../controllers/controller");
const middlewear = require("../middlewear/middlewear");
const globalMiddleWear = require("../globalMiddleWear/globalMiddleWear");

const productRouter = express.Router();

productRouter.post(
  "/products",
  middlewear.validateProduct,
  globalMiddleWear.checkAdmin,
  controller.createProduct
);
productRouter.get(
  "/",
  globalMiddleWear.authenticateUser,
  controller.getAllProduct
);
productRouter.get(
  "/:_id",
  globalMiddleWear.authenticateUser,
  controller.getOneProduct
);

module.exports = productRouter;
