// backend/middleware/secAuthUser.js
// - Default -
const config = require('config');
const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {

    const token = req.header('x-auth-token');
    console.log("token is valid : ", token)

    // Check token
    if (!token)
        return res.status(401).json({ msg: 'No token, authorization denied' });
    try {
        // Verify Token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = authenticate;