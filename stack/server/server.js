// const express = require("express");
// const app = express();
// const dbconn = require("./config/db");

// require("dotenv").config();

// const port = process.env.PORT || 7777;

// app.get("/", (req, res) => {
//   res.json({ message: "welcome bharath" });
// });

// app.listen(port, () => {
//   console.log(`app is listening port....${port}`);
// });



require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const dbConn = require('./config/db')
const Projects = require('./routes/projectRoute')


// const dotenv = require('dotenv')
// dotenv.config()

const port = process.env.PORT || 7778
app.use('/projects', Projects)
app.get('/', (req, res) => {
    res.status(400).json("Welcome")
})

app.listen(port, () => {
    console.log(`Server running in : ${port}`)
})