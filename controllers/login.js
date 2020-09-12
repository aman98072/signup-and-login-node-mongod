const User = require("../models/register");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.auth = (req, res) => {    
    let email = req.body.email;
    let password = req.body.password;

    User.findOne( { email } ).then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.json({status : 201, error : err});
                }
                
                if (result) {
                    let token = jwt.sign({name : user.name}, process.env.SECRET, {expiresIn : '1h'});
                    res.json({status: 200, message : 'Login Successfully.', token});
                } else {
                    res.json({status: 200, message : 'Password does not matched.'});
                }
            });
        } else {
            res.json({status: 200, message : 'User not found in DB.'});
        }
    });
}