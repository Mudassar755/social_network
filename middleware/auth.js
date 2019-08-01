const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    //Get Token from header
    const token = req.header('x-auth-token');

    //Check if tken
    if(!token){
        res.status(401).json({ msg:'No token, Autherization denied'})
    }

    //Verify token
    try {
        const decoded = jwt.verify(token, config.get('JwtSecret'));
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid'})
    }
}