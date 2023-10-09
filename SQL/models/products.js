const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")
// const {v4: uuidv4 } = require("uuid")


  //create productModel
  const Product = sequelize.define(
    "Product",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement:true,
        type: Sequelize.INTEGER,
      },
      names: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
    },
    {
      tableName: "products",
    }
  
  )


  module.exports = Product