// const sequelize = require('sequelize');
const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        displayName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        }
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'users'
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost,
            {foreignKey: 'user_id', as: 'blogpost'})
    };
    return User;
};

module.exports = userModel
