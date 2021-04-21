require("dotenv").config();  // load enviorment 
// require("./config/database/mongodb/database"); // load database
require("./libraries/database/mongodb/connection"); // load database

const express = require('express');
const app = express();
const helmet = require('helmet'); // for xss preventing
const cors = require("cors");  // for handle cross http to https request
const bodyParser = require('body-parser'); // for parse the body data
const port = process.env.PORT || 8001;

// Initialize Middlewares
app.use(helmet());
app.use(bodyParser.json()); // Parse body data into JSON
app.use(cors());

// app.use(require('./config/router/routers'));

// Require Middleware 
const auth = require("./middleware/auth");

// Require Routers
const routerList = require('./config/router/routers');
app.use("/api", auth.sentryAuth, routerList);

app.listen(port, () => {
    console.log(`Localhost running on port http://localhost:${port}`);
});