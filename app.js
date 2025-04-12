
// Basic Library Imports
const express = require('express');
const router = require('./src/route/api');
const app = express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// Cors Origin enable
app.use (cors());



// Security Implementation
app.use (helmet());
app.use (hpp());
app.use (express.json({limit:'20mb' }));
app.use (express.urlencoded({extended:true}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3000 // Limit each IP to 3000 requests per windowMs
});
app.use(limiter);




// Database Connection
// let URL = "mongodb+srv://mubin:mubin007@cluster0.1lz4ur6.mongodb.net/";
// let OPTION = {user:"", pass:"", autoIndex: true}
// mongoose.connect(URL, OPTION).then(() => {
//     console.log("Database Connected Successfully");
// }).catch((err) => {
//     console.log(err);
// });


const URL = "mongodb+srv://mubin:mubin007@cluster0.1lz4ur6.mongodb.net/task-manager?retryWrites=true&w=majority";
const OPTION = {
  autoIndex: true,
};

mongoose.connect(URL, OPTION)
  .then(() => {
    console.log("✅ Database Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err.message);
  });



// Route Implementation
app.use("/api/v1", router);

app.use("*",(req,res)=>{
    res.status(404).json({message:"Route Not Found"});
})


module.exports = app;