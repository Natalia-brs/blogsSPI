const serviceController = require('../services/categoryService');

const catPost = async (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
       const newCategory = await serviceController.catPost(name);
       return res.status(201).json(newCategory);
};

const getAllCategories = async (req, res) => {
    const getCategories = await serviceController.getCategories();
    res.status(200).json(getCategories);
};

module.exports = {
    catPost,
    getAllCategories,
};