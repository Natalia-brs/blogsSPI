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

const getUsers = async () => {
    const listUsers = await User.findAll();
    return listUsers;
};

const getById = async (id) => {
    const userId = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!userId) {
        return null;
    }
    return userId;
};

module.exports = {
    loginUser,
    addUser,
    getUsers,
    getById,
};