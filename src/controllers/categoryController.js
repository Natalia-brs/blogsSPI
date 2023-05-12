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

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.token;
    const newPost = await serviceController.createPost({ title, content, categoryIds, userId });
    if (newPost === null) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return res.status(201).json(newPost);
};

module.exports = {
    catPost,
    getAllCategories,
    createPost,
};