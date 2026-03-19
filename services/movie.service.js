const { Movie, Review } = require('../models')

class MovieService {
    async getAllMovies() {
        return await Movie.findAll()
    }

    async getMovieById(id) {
        return await Movie.findByPk(id)
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
