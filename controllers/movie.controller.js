const Movie = require('../models/movie.model')

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body)

        return res.status(201).json({
            success : true,
            error : {},
            data : movie,
            message : "Movie is successfully created",
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            succes : false,
            error: err,
            data : {},
            message : "Something went wrong",
        })
    }
}

module.exports = { 
    createMovie
};