const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Movie = sequelize.define('Movie', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    sinopse: {
        type: DataTypes.STRING,
        allowNull: false
    },

    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'movies',
    timestamps: true
});

Movie.associate = (models) => {
    Movie.hasMany(models.Review, {
        foreignKey: "movieId",
        as: "reviews"
    })
}

module.exports = Movie
