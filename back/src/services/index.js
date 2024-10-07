const axios = require("axios");
const URL = "https://students-api.up.railway.app/movies";

const Movie = require("../models/Movie");







module.exports = {
  getAllMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      console.log("Movies loaded");
    }
  },

  createMovie: async (title, year, director, duration, genre, rate, poster) => {
    const newMovie = {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    };
    await Movie.create(newMovie);
  },
};









