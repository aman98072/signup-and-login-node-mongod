const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {        
        let token = req.headers.authorization.split(' ')[1];    
        const decode = jwt.verify(token, process.env.SECRET);
        console.log(decode);
        req.user = decode;
        next();
    } catch (err) {        
        res.json({status : 201, message : 'Authentication Failed!', error : err});
    }
}

module.exports = auth;