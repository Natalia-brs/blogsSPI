const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET || 'trybe';

const loginUser = async (req, res) => {
        const { email, password } = req.body;
        const payload = await userService.loginUser(email); 
        if (!payload || payload.password !== password) {
           return res.status(400).json({ message: 'Invalid fields' });
        } 
            const token = jwt.sign({ data: payload.email }, secret, {
                expiresIn: '7d',
                algorithm: 'HS256',
             });
           return res.status(200).json({ token });
};

module.exports = {
    loginUser,
};