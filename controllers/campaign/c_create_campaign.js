const { CAMPAIGN_NOT_FOUND, CAMPAIGN_SAVED, CAMPAIGN_UPDATED, CREATE_JSON } = require("../../constants/response");
const mCampaign = require("../../models/mongodb/m_campaign");
const User = require("../../models/mysql/m_user");
var dateFormat = require("dateformat");

const create = async (req, res) => {
    let inputs = req.body;
    let start_date = inputs.start_date;
    let step = inputs.step;

    // get user id from droom token
    let userId = await User.getUser(req, res);
    inputs['userId'] = userId;

    if (step == 1) {
        inputs['status'] = 'draft';
    } else if (step == 7 && (start_date != '' || start_date != null || start_date != undefined)) {
        let current_date = dateFormat(new Date(), "yyyy-m-d");
        if (current_date == start_date) {
            inputs['status'] = 'active';
        } else {
            inputs['status'] = 'scheduled';
        }
    }

    if (inputs['save_draft'] == 1) {
        inputs['status'] = 'draft';
    }

    let data = '';
    if (!inputs['camp_id']) {
        // get largest campaign id 
        let camp_id = await mCampaign.getLastCampid();
        if (!camp_id) {
            inputs['camp_id'] = 1;
        } else {
            inputs['camp_id'] = camp_id;
        }
        
        let result = await mCampaign.create(inputs);
        return res.json(result).end();
    } else { 
        // update campaign
        let where = { camp_id : inputs['camp_id'] };

        delete inputs['camp_id'];
        let result = await mCampaign.update(inputs, where);
        return res.json(result).end();
    }
}

module.exports = {
    create
}