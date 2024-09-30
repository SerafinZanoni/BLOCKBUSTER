
const URL = "https://students-api.up.railway.app/movies";
const renderMovies = require("./renderMovies");
// Función para obtener las películas desde la API usando jQuery
function fetchMoviesWithJQuery() {
  $.get(URL, (movies) => {
    renderMovies(movies);
  }).fail(() => {
    console.error("Error al obtener las películas");
  });
}

fetchMoviesWithJQuery();
