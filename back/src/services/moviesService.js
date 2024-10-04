const axios = require("axios");
const URL = "https://students-api.up.railway.app/movies";
const localMovies = [];
let id = 1;


module.exports = {
  getAllMovies: async () => {
    try {
      const { data } = await axios(URL);
      const movies = data;
      const allMovies = [...movies, ...localMovies];
      return allMovies;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      console.log("Proceso terminado");
    }
  },

  createMovie: async (title, year, director, duration, genre, rate, poster) => {
    const newMovie = {
      id: id++,
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    };
    localMovies.push(newMovie);
  },
};
