// const sequelize = require('sequelize');
const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'users'
    });

    return Category;
};

module.exports = CategoryModel;