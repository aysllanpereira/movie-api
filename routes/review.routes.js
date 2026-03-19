
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

router.post('/', reviewController.createReview);
router.get('/', reviewController.getAllReview);
router.get('/:id', reviewController.getReviewId);

module.exports = router;