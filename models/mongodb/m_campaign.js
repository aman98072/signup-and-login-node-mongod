const { CAMPAIGN_NOT_FOUND, CAMPAIGN_SAVED, CAMPAIGN_UPDATED, CREATE_JSON } = require("../../constants/response");
const Campaign = require("../../validations/campaign/campaign.db.schema");

const select = (editId = '') => {
    return Campaign.find(editId).then( result => {    
        return CREATE_JSON(200, result);
    }).catch(err => {
        if (err) {
            return CREATE_JSON(400, err);
        }
    });
}

const create = (data) => {
    let campaign = new Campaign(data);
    return campaign.save().then(campData => {
        CAMPAIGN_SAVED.campId = campData.camp_id;
        return CAMPAIGN_SAVED;
    }).catch(err => {
        return CREATE_JSON(400, err);
    });
}

const update = (data, where) => {
    return Campaign.updateMany(where, data, {new: true, useFindAndModify : false}).then(campaign => {
        if (!campaign) {
            return CAMPAIGN_NOT_FOUND;       
        } else {
            return CAMPAIGN_UPDATED;
        }
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return CAMPAIGN_NOT_FOUND;
        } else {
            return CREATE_JSON(201, 'Error updating in Campaign');
        }                      
    });
}

// const edit = (id) => {
//     Campaign.find({_id : id}).then( result => {        
        
//     }).catch(err => {
//         if (err) {
//             res.json({status : 201, message : err});
//         }
//     });
// }

const deleteData = (id) => {
    // User.findByIdAndRemove(id, {useNewUrlParser: true} ).then(user => {
    //     if (!user) {
    //         res.json({status : 404, message : 'User not found.'});
    //     }

    //     res.json({status : 200, message : 'User deleted successfully!'});       
    // }).catch(err => {
    //     if(err.kind === 'ObjectId' || err.name === 'NotFound') {
    //         res.json({status : 404, message : 'User not found.' + userId});            
    //     }

    //     res.json({status : 500, message : 'Could not delete user with id ' + userId});
    // });
}

const getLastCampid = () => {
    return Campaign.find({camp_id : {$exists : true}}).sort({created_at : -1}).limit(1).then( result => {   
        let lastId = '';
        if (result) {
            lastId = parseInt(result[0]['camp_id']) + parseInt(1);
        }

        return lastId;
    }).catch(err => {
        if (err) {
            return CREATE_JSON(400, err);
        }
    });
}


module.exports = {
    create,
    select,
    update,
    deleteData,
    getLastCampid
}