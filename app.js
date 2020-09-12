require("dotenv").config(); // load enviorment 
require("./config/database"); // Database load

const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const port  = process.env.PORT || 8000;

// Routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const isLogined = require("./middleware/auth");

// Middlewares
app.use(bodyParser.json()); // Parse body data into JSON
app.use(cors());

app.use("/api", registerRoute, loginRoute);
app.get("/hello", isLogined, (req, res) => {
    res.json({status : 200, message : 'Hello World'});
});

app.listen(port, () => {
    console.log(`Localhost running on port ${port}`);
});