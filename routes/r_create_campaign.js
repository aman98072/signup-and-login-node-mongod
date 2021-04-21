const express = require("express");
const router = express.Router();
const campValidate = require("../validations/campaign/campaign.validation");
const campController = require("../controllers/campaign/c_create_campaign");

router.post("/createCampaign", campValidate.validate, campController.create);

module.exports = router;