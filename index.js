const express = require("express");
const coursesRouter = require("./routes/courses");
const bodyParser = require("body-parser");
require("dotenv").config();

const mongoose = require('mongoose');
const app = express();

// app.get('/', (req,res) => {

//     // this is called with the help of res- we send the data to the client from the server
//     // with the help of this req - we request the data from the client
//     res.send("Hello , your url is working fine! how are you !");
// })

// here we are using middile ware layer to use routers and use it
app.use(bodyParser.json());
app.use("/api/v1/courses", coursesRouter);

mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
    console.log("Connected to database");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 2000...");
});
