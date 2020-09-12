const express = require("express");
const router = express.Router();

const login = require("../controllers/login");
const loginValidation = require("../validations/login/login.validation");

router.post("/login", loginValidation.validate, login.auth);

module.exports = router;