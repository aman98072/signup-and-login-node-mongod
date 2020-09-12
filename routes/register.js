const express = require("express");
const router = express.Router();

const register = require("../controllers/register");
const rgstValidation = require("../validations/register/register.validation");

router.post("/register", rgstValidation.validate, register.create);

module.exports = router;