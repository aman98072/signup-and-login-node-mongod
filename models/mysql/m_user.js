const { select } = require("../../libraries/database/mysql/queryBuilder");
const { UNDEFINED_TOKEN, INVALID_TOKEN } = require("../../constants/response");

const TABLE = 'users';
const FILLABLE = ['id', 'first_name', 'last_name', 'email', 'password'];
// const GUARDED = ['email', 'last_name'];

var fields = ['id', 'email', 'handle_name', 'password', 'permissions', 'activated', 'activation_code', 'activated_at', 'last_login', 'persist_code', 'reset_password_code', 'first_name', 'last_name', 'created_at', 'updated_at', 'email_verified', 'gender', 'status', 'language_id', 'address1', 'address2', 'city', 'city_id', 'state', 'state_id', 'zip', 'alt_email', 'home_phone', 'mobile_phone', 'preferred_method', 'emergency_contact_person', 'emergency_contact_person_phone', 'reset_password_code_expiry', 'phone_verified', 'pan_verified', 'vat_verified', 'facebook_photo_url', 'profile_photo_path', 'facebook_id', 'vendor_id', 'droom_id', 'viewing_shipping', 'schedule', 'payment_option', 'banking_details', 'verified_status', 'seller_type', 'vehicle_types', 'authorized_dealer_for', 'pan_number', 'vat_number', 'business_description', 'dealership_photos', 'verified_date', 'verify_application_date', 'deleted_at', 'watchlist_ending_notification', 'rejected_offer_notification', 'received_offer_notification', 'commit_to_buy_notification', 'payment_received', 'persist_code1', 'persist_code2', 'persist_code3', 'persist_code4', 'is_offline', 'is_suspended', 'last_suspended_date', 'new_status', 'new_seller_type', 'source', 'suspension_count', 'suspended_from', 'suspended_to', 'offline_from', 'offline_to', 'campaign', 'login_code', 'landmark', 'return_policy', 'return_policy_option', 'rto_service', 'rto_service_type', 'rto_service_price', 'test_drive', 'test_drive_price', 'otp_verified', 'handle_name_alias', 'handle_name_old', 'subscription_notification', 'login_count', 'latitude', 'longitude', 'user_type', 'user_status', 't_email', 't_sms', 'm_email', 'm_sms', 'register_source', 'is_droom_user', 'garbage_user', 'location', 'middle_name', 'company_name', 'contact_email', 'aadhar_number', 'aadhar_verification'];

const verify = async (where) => {   
    return await select(TABLE, fields, where);  
}

const getUser = async (req, res) => {
    var authKey = req.headers.droom_token;
    if (!authKey) {
        return res.json(UNDEFINED_TOKEN).end();
    }

    let where = { persist_code : authKey };
    let response = await select(TABLE, fields, where);
    if (Array.isArray(response)) {
        return response[0]['id'];
    } else {
        return res.json(INVALID_TOKEN).end();
    }
}

module.exports = {
    verify,
    getUser
}
