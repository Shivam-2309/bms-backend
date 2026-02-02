const MovieController = require('../controllers/movie.controller.js');

const routes = (app) => {
    app.post('/mba/api/v1/movies', MovieController.createMovie);
}

module.exports = routes;