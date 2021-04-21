const express = require("express");
const router = express.Router();
const userController = require("../controllers/c_user");

router.get("/getUsers", userController.getUser);

module.exports = router;