const { Category, BlogPost, PostCategory } = require('../models');

const catPost = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const getCategories = async () => {
   const listCategories = await Category.findAll();
   return listCategories;
};
 
const createPost = async ({ title, content, categoryIds, userId }) => {
    const getCat = await getCategories();
    const mapGet = getCat.map((category) => category.id);
    const filterIds = categoryIds.every((id) => mapGet.includes(id));
    if (!filterIds) {
        return null;
    }
    const newPost = await BlogPost.create({ title, content, userId });
    const { id } = newPost;
     
    categoryIds.forEach(async (categoryId) => {
        await PostCategory.create({ postId: id, categoryId });
    });
    return newPost;
};

module.exports = {
    catPost,
    getCategories,
    createPost,
};
