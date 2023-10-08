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
      name: {
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
 









































































// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class products extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   products.init({
//     name: DataTypes.STRING,
//     size: DataTypes.STRING,
//     price: DataTypes.STRING,
//     category: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'products',
//   });
//   return products;
// };