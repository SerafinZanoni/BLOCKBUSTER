const moviesServices = require("../services/moviesService");

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
      const { title, year } = req.body;
      await moviesServices.createMovie(title, year);
      res.status(201).json({ message: "Movie created successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
