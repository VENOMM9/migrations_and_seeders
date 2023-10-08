const { Sequelize,DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")
// const { v4: uuidv4 } = require("uuid")
const User = require("./users")


  const Admin = sequelize.define(
    "Admin",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        unique: true,

      },
      
      
    }
  )
  
    
    Admin.belongsTo(User)
  
 
 



module.exports = Admin



























































































// 'use strict';
// const sequelize = require("../models/index.js")

// const Sequelize = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class admins extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   admins.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'admins',
//   });
//   return admins;
// };