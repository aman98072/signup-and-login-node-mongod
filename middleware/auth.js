const { UNDEFINED_TOKEN, INVALID_TOKEN } = require("../constants/response");

const user = require("../models/mysql/m_user");
const sentryAuth = (req, res, next) => {
    authKey = req.headers.droom_token;
    if (!authKey) {        
        return res.json(UNDEFINED_TOKEN).end();
    }

    // Authenticate user
    user.verify( {persist_code : authKey} ).then( (data) => {
        if (data.length == 0) {
            return res.json(INVALID_TOKEN).end();
        } else {
            next();
        }
    });
}

module.exports = {
    sentryAuth
}