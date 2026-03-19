const MovieServices = require('../services/movie.service')

class MovieController {

    async getAllMovies(req, res) {
        try {
            const movies = await MovieServices.getAllMovies()
            return res.status(200).json(movies)
        } catch (error) {
            return res.send(error)
        }
    }

    async getMovieById(req, res) {
        try {
            const movie = await MovieServices.getMovieById(req.params.id)

            if (!movie) res.json({ message: 'Movie not found' })

            return res.status(200).json(movie)
        } catch (error) {
            return res.json({ message: error })
        }
    }

    async getMoviesAndReviews(req, res) {
        try {
            const movie = await MovieServices.getMovieByIdAndReviews(req.params.id)

            if (!movie) res.json({ message: 'Movie not found' })

            return res.status(200).json(movie)
        } catch (error) {
            return res.json({ message: error })
        }
    }

     async getMoviesAndReviews(req, res) {
        try {
            const movies = await MovieServices.getMoviesAndReviews()                              

            if (!movies) res.json({ message: 'Movies not found' })

            return res.status(200).json(movies)
        } catch (error) {
            return res.json({ message: error })
        }
    }

    async createMovie(req, res) {
        try {
            const movie = await MovieServices.create(req.body)

            return res.status(201).json({ message: 'Movie created successfully.', movie })
        } catch (error) {
            return res.json({ message: error })
        }
    }

    async updateMovie(req, res) {
        try {
            const movie = await MovieServices.update(req.params.id, req.body)

            if (!movie) res.json({ message: 'Movie not found' })

            return res.json({ message: 'Movie updated successfully.', movie })
        } catch (error) {
            console.log(error);
            
            return res.json(error)
        }
    }

    async deleteMovie(req, res) {
        try {
            // const movie = await MovieServices.getMovieById(req.params.id)

            const movie = await MovieServices.delete(req.params.id);

            return res.json({ message: 'Movie deleted successfully.', movie})
        } catch (error) {
            return res.json({ message: error })
        }
    }
}

module.exports = new MovieController()
