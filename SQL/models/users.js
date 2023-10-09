
const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")
const bcrypt = require("bcrypt")
// const {v4: uuidv4 } = require("uuid")



const User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
        type: Sequelize.INTEGER,
        unique: true,


      },
      names: {
        type: DataTypes.STRING,
        
        unique: true,

      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      timestamps: true,
      sequelize,
      tableName: "users",
    }
   
  );

User.beforeCreate((user, option) => {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      throw new Error()
    });
  })
 
User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}


module.exports = User



















































// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   users.init({
//     names: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'users',
//   });
//   return users;
// };