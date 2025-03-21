const { ObjectId } = require("mongodb")
const client = require("../../common/mongoConnection")
const Movie  = require('../../models/mongoTest/movies/movie')

exports.getMoviesPerTitle = async (req,res) => {
    try {
        await client.connect()
        const database = client.db('sample_mflix')
        const moviesCollection = database.collection('movies')
        const query = { 
            $or:[
                {
                    title: {
                        $regex: `^${req.params.title}`,
                        $options: "i"
                    }
                },
                {
                    title: {
                        $regex: `${req.params.title}`,
                        $options: "i"
                    }
                }
            ]
        }
        const response = await moviesCollection.find(query).toArray()
        let movies = []
        for (const movie of response) {
            movies.push(new Movie(movie))
        }
        res.status(200).json({
            message: "Ok",
            data: movies
        })
    } catch (error) {
        res.status(500).json({
            message: `An error occured: ${error}`
        })
    } finally {
        await client.close()
    }
}

exports.getMoviesPerGenre = async (req, res) => {
    try {
        let genreFilters = req.body.genres || [req.params.genre]

        if (genreFilters.length === 0) {
            return res.status(400).json({
                message: 'Error',
                details: "There is no body for this request" 
            })
        }

        await client.connect()
        const database = client.db('sample_mflix')
        const moviesCollection = database.collection('movies')

        const query = {
            genres: { $in: genreFilters }
        };

        const response = await moviesCollection.find(query).toArray()
        const movies = response.map(movie => new Movie(movie))

        res.status(200).json({
            message: "Ok",
            data: movies
        })

    } catch (error) {
        res.status(500).json({
            message: `An error occurred: ${error}`
        })
    } finally {
        await client.close()
    }
}

exports.setMovie = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).json({
                message: 'Error',
                details: "There is no body for this request" 
            })
        }
        await client.connect()
        const database = client.db('sample_mflix')
        const moviesCollection = database.collection('movies')
        const movie = new Movie(req.body)
        const result = await moviesCollection.insertOne(movie)
        res.status(200).json({
            message: "Ok",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: `An error occurred: ${error}`
        })
    } finally {
        await client.close()
    }
}

exports.deleteMovie = async (req,res) => {
    try {
        if(!req.params.id){
            return res.status(400).json({
                message: 'Error',
                details: "There is specified id" 
            })
        }
        await client.connect()
        const database = client.db('sample_mflix')
        const moviesCollection = database.collection('movies')
        console.log(req.params.id)
        const query = { _id: new ObjectId(req.params.id)}
        const result = await moviesCollection.deleteOne(query)
        res.status(200).json({
            message: "Ok",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: `An error occurred: ${error}`
        })
    } finally {
        await client.close()
    }
}

exports.updateMovie = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).json({
                message: 'Error',
                details: "There is no body for this request" 
            })
        }
        await client.connect()
        const database = client.db('sample_mflix')
        const moviesCollection = database.collection('movies')
        const movie = new Movie(req.body)
        const filter = {
            _id: new ObjectId(movie._id)
        }
        const movieFields = {
            $set: {
                plot: movie.plot,
                genres: movie.genres,
                runtime: movie.runtime,
                title: movie.title,
                year: movie.year
            }
        }
        const result = await moviesCollection.updateOne(filter, movieFields)
        res.status(200).json({
            message: "Ok",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: `An error occurred: ${error}`
        })
    } finally {
        await client.close()
    }
}