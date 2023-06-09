// const sequelize = require('sequelize');

const blogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
            references: {
                model: 'users',
                key: 'id',
            },
            foreignKey: true,
        },
        published: {
            type: DataTypes.DATE,
        },
        updated: {
            type: DataTypes.DATE,
        },
    }, {
        tablename: 'blog_posts',
        timestamps: false,
        underscored: true,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, 
            { foreignKey: 'userId', as: 'user' })
    }
    return BlogPost;
}

module.exports =  blogPostModel