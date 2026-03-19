
const { User, Review, Movie } = require('../models');

class ReviewServices {
    
    async createReview(data) {
        return await Review.create(data);
    };    
    
    async getReview() {
        return await Review.findAll({
            include: [
                { model: User, as: 'users' },
                { model: Movie, as: 'movies' }
            ]
        });
    };

    async getReviewById(id) {
        return await Review.findByPk({
            where: { id },
            include: [{
                model: User,
                as: 'users'
            }]
        });
    };

}

module.exports = new ReviewServices();