const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'trybe';

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }
 try {
    const token = jwt.verify(authorization, secret);
    req.token = token;
 } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
 }
    next();
};

module.exports = {
    validateToken,
};