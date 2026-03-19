
'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');
const Movie = require('./movie.model');
const Review = require('./review.model');

const db = {
    sequelize,
    Sequelize,
    User,
    Movie,
    Review
};

Object.keys(db).forEach(modelNome => {
    if(db[modelNome].associate) {
        db[modelNome].associate(db);
    }
});

module.exports = db;