const { Movie, Review, User } = require('../models')

class MovieService {
    async getAllMovies() {
        return await Movie.findAll()
    }

    async getMovieById(id) {
        return await Movie.findByPk(id)
    }

    async getMovieByIdAndReviews(id) {
        return await Movie.findByPk(id, {
            include: [{
                model: Review,
                as: 'reviews'
            }]
        })
    }

    async getMoviesAndReviews() {

        try {
            return await Review.findAll({
                include: [
                    { model: Movie, as: 'movies' },
                    { model: User, as: 'users' }
                ]
            })
        } catch (error) {
            console.log(error)
        }
    }

    async create(data) {
        return await Movie.create(data)
    }

    async update(id, data) {
        return await Movie.update(data,
            {
                where: { id: id }
            })
    }

    async delete(id) {
        return await Movie.destroy({
            where: { id: id }
        })
    }
}

module.exports = new MovieService()
