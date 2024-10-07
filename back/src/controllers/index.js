
const moviesServices = require("../services");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await moviesServices.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createMovie: async (req, res) => {
    try {
      const { title, year , director, duration, genre, rate, poster } = req.body;
      await moviesServices.createMovie(title, year , director, duration, genre, rate, poster);
      res.status(201).json({ message: "Movie created successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message, message: "Movie not created" });
    }
  },
};

