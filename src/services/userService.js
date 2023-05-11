const { User } = require('../models');

const loginUser = (email) => {
    const user = User.findOne({
        where: { email },
    }); 
    return user;
};

module.exports = {
    loginUser,
};