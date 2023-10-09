// const { Sequelize,DataTypes } = require("sequelize")
// const sequelize = require("../config/sequelize")
// // const { v4: uuidv4 } = require("uuid")

const { Sequelize,DataTypes } = require("sequelize")

const sequelize = require("../config/sequelize")
const User = require("./users")

  const Admin = sequelize.define(
    "Admin",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
        type: Sequelize.INTEGER,
        unique: true,


      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
      user_id: {type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id"
      }
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
   
  )
 Admin.belongsTo(User, {foreignKey:"user_id"})
  
 module.exports = Admin
