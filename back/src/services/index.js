const Movie = require("../models/Movie");

module.exports = {
  getAllMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.error(error.message);
      throw error;
    } finally {
      console.log("Movies loaded");
    }
  },

  createMovie: async (movie) => {
    try {
      const newMovie = new Movie(movie);
      const resp =await newMovie.save();
      return resp
    } catch (error) {
      console.error(error.message);
      throw error;
    } finally {
      console.log("Movie created");
    }
  },

  getMovieById: async (id) => {
    try {
      const movie = await Movie.findById(id);
      return movie;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      console.log("Movie finded");
    }
  },

  findMovieByTitle: async (title) => {
    try {
      const movie = await Movie.findOne({ title });
      return movie;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      console.log("Movie finded");
    }
  },
};
