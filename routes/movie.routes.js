const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/movie.controller')

router.get('/', MovieController.getAllMovies)
router.get('/movies-with-reviews', MovieController.getMoviesAndReviews)
router.get('/:id', MovieController.getMovieById)
router.get('/:id/reviews', MovieController.getMoviesAndReviews)
router.post('/', MovieController.createMovie)
router.put('/:id', MovieController.updateMovie)
router.delete('/:id', MovieController.deleteMovie)

module.exports = router
