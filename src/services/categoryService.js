const { Category } = require('../models');

const catPost = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const getCategories = async () => {
   const listCategories = await Category.findAll();
   return listCategories;
};

module.exports = {
    catPost,
    getCategories,
};
