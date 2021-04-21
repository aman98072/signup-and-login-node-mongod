const { INVALID_STEP, CREATE_JSON } = require("../../constants/response");
const { campaign } = require("./campaign.schema");

module.exports = {
    validate: async (req, res, next) => {
        try {
            let inputs = req.body;
            let step = inputs.step;
            var value = '';
            
            if (step == 1) {
                value = await campaign.step1.validate(inputs);
            } else if (step == 2) {
                value = await campaign.step2.validate(inputs);
            } else if (step == 3) {
                value = await campaign.step3.validate(inputs);
            } else if (step == 4) {
                value = await campaign.step4.validate(inputs);
            } else if (step == 5) {
                value = await campaign.step5.validate(inputs);
            } else if (step == 6) {
                value = await campaign.step6.validate(inputs);
            } else if (step == 7) {
                value = await campaign.step7.validate(inputs);
            } else {
                return res.json(INVALID_STEP).end();
            }

            if (value.error) {
                let getError = CREATE_JSON(400, value.error.details[0].message);
                return res.json(getError).end();
            } else {
                next();
            }
        } catch (err) {
            let getError = CREATE_JSON(201, err);
            return res.json(getError).end();
        }
    }
}