const express = require("express");
const router = express.Router();

router.get("/test1", (req, res) => {
    res.json( {status : 200, msg : 'Test 1 Route..'} );
});

module.exports = router;