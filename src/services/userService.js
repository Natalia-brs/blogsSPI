const { User } = require('../models');

const loginUser = (email) => {
    const user = User.findOne({
        where: { email },
    }); 
    return user;
};

const addUser = async ({ displayName, email, password, image }) => {
    const userExist = await User.findOne({
        where: { email },
    });
    if (userExist) {
        return null;
    }
    const newUser = await User.create({ displayName, email, password, image });
      return newUser;
};

module.exports = {
    loginUser,
    addUser,
};