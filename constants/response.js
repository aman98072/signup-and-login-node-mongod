const statusCode = require("../constants/status_codes");
const resMessage = {
    UNDEFINED : {
        TOKEN_MSG : 'Kindly please add droom token',
        TABLE_MSG : 'Table Name is required',
        DB_COLUMN_MSG : 'Column Name is required',
        DATA_MSG : 'Data is required',
        FIELDS_NAME_MSG : 'Database fields name is required',
    },   
    INVALID : {
        TOKEN_MSG : 'Invalid Token kindly please try again after sometime',
    },
    ATLEAST_ONE_FILLABLE_OR_GUARDED_MSG : 'Please select atleast one Fillable OR Guarded property',
    FILLABLE_OR_GUARDED_REQUIRED_MSG : 'Fillable Or Guarded fields are required',
    CAMPAIGN : {
        NOT_FOUND : 'Campaign not found',
        STEP : 'Invalid Step',
        SAVED : 'Campaign Saved',
        UPDATED : 'Campaign Details Successfully Updated',
        UNABLE_TO_CREATE : 'Unable to create campaign'
    }
};

module.exports = {
    REQUIRED : (fieldName) => {
        return fieldName + ' is required'
    },
    CREATE_JSON : (status, msg) => {
        return {status, msg};
    },
    INVALID_TOKEN : {
        status : statusCode.BAD_REQUEST,
        message : resMessage.INVALID.TOKEN_MSG
    },
    INVALID_STEP : {
        status : statusCode.SUCCESS,
        message : resMessage.CAMPAIGN.STEP
    },
    UNDEFINED_TOKEN : {
        status : statusCode.BAD_REQUEST,
        message : resMessage.UNDEFINED.TOKEN_MSG
    },
    UNDEFINED_TABLE : {
        status : statusCode.VALIDATION,
        message : resMessage.UNDEFINED.TABLE_MSG
    },
    UNDEFINED_DB_COLUMN : {
        status : statusCode.VALIDATION,
        message : resMessage.UNDEFINED.DB_COLUMN_MSG
    },
    UNDEFINED_DATA : {
        status : statusCode.VALIDATION,
        message : resMessage.UNDEFINED.DATA_MSG
    },
    UNDEFINED_FIELDS_NAME : {
        status : statusCode.VALIDATION,
        message : resMessage.UNDEFINED.FIELDS_NAME_MSG
    },
    ATLEAST_FILLABLE_OR_GUARDED : {
        status : statusCode.VALIDATION,
        message : resMessage.ATLEAST_ONE_FILLABLE_OR_GUARDED_MSG
    },
    FILLABLE_OR_GUARDED_REQUIRED : {
        status : statusCode.VALIDATION,
        message : resMessage.FILLABLE_OR_GUARDED_REQUIRED_MSG
    },
    CAMPAIGN_NOT_FOUND : {
        status : statusCode.NOT_FOUND,
        message : resMessage.CAMPAIGN.NOT_FOUND
    },
    CAMPAIGN_SAVED : {
        status : statusCode.SUCCESS,
        message : resMessage.CAMPAIGN.SAVED
    },
    CAMPAIGN_UPDATED : {
        status : statusCode.SUCCESS,
        message : resMessage.CAMPAIGN.UPDATED
    },
}