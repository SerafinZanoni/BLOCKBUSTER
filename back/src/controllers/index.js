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
     const response = await moviesServices.createMovie(req.body);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  // getMovieById: async (req, res) => {
  //   try {
  //     const movie = await moviesServices.getMovieById(req.params.id);
  //     res.status(200).json(movie);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },

  // findMovieByTitle: async (req, res) => {
  //   try {
  //     const movie = await moviesServices.findMovieByTitle(req.params.title);
  //     res.status(200).json(movie);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },
};
