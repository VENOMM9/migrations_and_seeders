const express = require("express");
const bodyParser = require("body-parser")
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const sequelize = require("./config/sequelize")


require("dotenv").config()

const PORT = process.env.PORT || 5200;
  
const app = express();

app.use(bodyParser.json());


app.use("/users", userRouter);
app.use("/products", productRouter);

sequelize.authenticate()
    .then(() => {
        console.log("successfully connected to sequelize")
    })
    .catch((err)=> {
    console.log(err)
    })
        

app.listen(PORT, () => {
    console.log(`app started successfully at ${PORT}`)
});