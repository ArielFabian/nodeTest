const router = require('express').Router();
const mongoTestController = require('../controllers/mongoTest/mongoTestMethods')
const moviesController = require('../controllers/mongoTest/moviesMethods')

router.get("/test", mongoTestController.getTestConnection)
router.get("/movies/:title", moviesController.getMoviesPerTitle)
router.post("/movies/genres/search", moviesController.getMoviesPerGenre)
router.get("/movies/genres/:genre", moviesController.getMoviesPerGenre)
router.put("/movies/new", moviesController.setMovie)
router.delete("/movies/:id", moviesController.deleteMovie)
module.exports = router