const r_user = require("../../routes/r_user");
const test1 = require("../../routes/test1");
const createCampaign = require("../../routes/r_create_campaign");

const routerList = [
    r_user,
    test1,
    createCampaign  
];

module.exports = routerList;


// const express = require("express");
// const router = express.Router();
// const userController = require("../../controllers/c_user");
// const campValidate = require("../../validations/campaign/create/campaign.validation");
// const campController = require("../../controllers/campaign/c_create_campaign");

// // Require Middleware 
// const auth = require("../../middleware/auth");
// router.use("/api", auth.sentryAuth);


// router.get("/api/getUsers", userController.getUser);
// router.get("/api/test1", (req, res) => {
//     res.json( {status : 200, msg : 'Test 1 Route..'} );
// });

// router.post("/api/createCampaign", campValidate.validate, campController.create);

// module.exports = router;





