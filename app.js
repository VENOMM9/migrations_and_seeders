const express = require("express");
const userRoute = require("./routes/userRouter");
const productRoute = require("./routes/productRouter");

require("dotenv").config()
const {connectionToMongodb}  = require("./db/connect")



const PORT = process.env.PORT || 3700
const app = express();
app.use(express.json())



//connect to mongodb instance
connectionToMongodb()


app.use("/users", userRoute)
app.use("/products", productRoute)
// app.use("/roles", roleRoute)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
