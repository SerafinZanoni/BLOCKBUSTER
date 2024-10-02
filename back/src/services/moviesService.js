const movies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
  },
  {
    id: 2,
    title: "The Matrix Reloaded",
    year: 2003,
  },
  {
    id: 3,
    title: "The Matrix Revolutions",
    year: 2003,
  },
];

let id = 4;

module.exports = {
  getAllMovies: () => {
    return movies;
  },

  createMovie: async (title, year) => {
    const newMovie = {
      id: id++,
      title,
      year,
    };
    movies.push(newMovie);
  },
};
