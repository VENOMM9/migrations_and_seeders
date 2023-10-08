const mongoose = require("mongoose");

const products = require("./models/products");
const {connectionToMongodb}  = require("./db/connect");

require("dotenv").config()


connectionToMongodb();

const seedProducts = [
  {
    name: "patriot",
    size: "234",
    price: "10000",
    category: "defensive",
  },
  {
    name: "stinger",
    size: "104",
    price: "5000",
    category: "offensive",
  },
  {
    name: "saheed",
    size: "404",
    price: "1000",
    category: "offensive",
  },
  {
    name: "challenger",
    size: "484",
    price: "15000",
    category: "defensive",
    },
    {
        name: "samat",
        size: "2004",
        price: "198000",
        category: "catastrophic",
    },
    {
        name: "satan",
        size: "578",
        price: "120000",
        category: "catastrophic",
    },
    {
        name: "Abrams",
        size: "567",
        price: "45000",
        category: "defensive",
    },
    {
        name: "howitzer",
        size: "234",
        price: "10000",
        category: "offensive",
    },
    {
        name: "leopard",
        size: "294",
        price: "20000",
        category: "defensive",
    },
    {
        name: "pacat",
        size: "204",
        price: "18000",
        category: "defensive",
    },
    {
        name: "Jezebel",
        size: "934",
        price: "52000",
        category: "catastrophic",
      }
  
];


const seedDB = async () => {
    await products.deleteMany({});
    await products.insertMany(seedProducts);
};

seedDB().then(() => {
    mongoose.connection.close();
})
