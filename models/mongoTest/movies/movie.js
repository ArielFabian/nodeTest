class Movie {
    constructor({ _id, plot, genres, runtime, title, year }) {
        this._id = _id
        if(!plot){
            throw new Error("Plot is required")
        }
        this.plot = plot
        if(!genres || genres.length <= 0){
            throw new Error("Genres are required")
        }
        this.genres = genres
        if(!runtime){
            throw new Error("runtime is required")
        }
        this.runtime = runtime
        if(!title){
            throw new Error("title is required")
        }
        this.title = title
        if(!year){
            throw new Error("year is required")
        }
        this.year = year
    }

    getId() {
        return this.id
    }

    getPlot() {
        return this.plot
    }

    setPlot(newPlot) {
        this.plot = newPlot
    }

    getGenres() {
        return this.genres
    }

    setGenre(newGenre) {
        this.genres.push(newGenre)
    }

    getRuntime() {
        return this.runtime
    }

    setRuntime(newRuntime) {
        this.runtime = newRuntime
    }

    getTitle() {
        return this.title
    }

    setTitle(newTitle) {
        this.newTitle = newTitle
    }

    getYear() {
        return this.year
    }

    setYear(newYear) {
        this.year = newYear
    }
}

module.exports = Movie