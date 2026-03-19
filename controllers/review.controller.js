
const reviewServices = require('../services/review.services');

class ReviewController {

    async createReview(req, res) {
        try {
            const review = await reviewServices.createReview(req.body);
            return res.json(review);
        } catch (error) {
            console.error(error);
            return res.json(error);
        }
    };

    async getAllReview(req, res) {
        try {
            const reviews = await reviewServices.getReview();
            return res.json(reviews)
        } catch (error) {
            console.error(error);
            return res.json(error);
        }
    };

    async getReviewId(req, res) {
        try {
            const reviewId = await reviewServices.getReviewById(req.params.id);
            return res.json(reviewId);
        } catch (error) {
            console.error(error);
            return res.json(error);
        }
    }
}

module.exports = new ReviewController();