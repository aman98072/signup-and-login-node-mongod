const { UNDEFINED_TOKEN, CREATE_JSON } = require("../constants/response");
const user = require("../models/mysql/m_user");

const getUser = async (req ,res) => {
    await user.getUser(req, res);

    // var authKey = req.body.droom_token;
    // if (!authKey) {
    //     return res.json(UNDEFINED_TOKEN).end();
    // }

    // user.getUser( {persist_code : authKey} ).then( (data) => {
    //     if (data) {
    //         let response = CREATE_JSON(200, data);
    //         return res.json(response).end();
    //     }
    // });
}

module.exports = {
    getUser
}
