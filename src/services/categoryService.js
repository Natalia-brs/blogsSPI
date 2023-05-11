const { Category } = require('../models');

const catPost = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

module.exports = {
    catPost,
};
