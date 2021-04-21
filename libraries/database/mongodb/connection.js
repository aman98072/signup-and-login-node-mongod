const mongoose = require("mongoose");

//DB Connection
const db = mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("MongoDB CONNECTED");
});

exports.module = db;