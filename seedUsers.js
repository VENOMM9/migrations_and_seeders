const mongoose = require("mongoose");

const userModel = require("./models/users");
const {connectionToMongodb}  = require("./db/connect");


require("dotenv").config()


connectionToMongodb();

const seedUsers = [
  {
    name: "Victor Nkwuo",
    email: "victorNkwuo@gmail.com",
    password: "victor2345",
    role: "admin",
  },
  {
    name: "nnenna Pascal",
    email: "nnennapascal@gmail.com",
    password: "victor2345",
    role: "users"
  },
  {
    name: "matins Kulia",
    email: "matinskulia@gmail.com",
    password: "matins7865",
    role: "users"
  },
  {
    name: "anastasia Gobey",
    email: "anastasiagoby@gmail.com",
    password: "anast2785",
    role: "users"
  }
  
];


const seedDB = async () => {
    await userModel.deleteMany({});
    await userModel.insertMany(seedUsers);
};

seedDB().then(() => {
    mongoose.connection.close();
})
