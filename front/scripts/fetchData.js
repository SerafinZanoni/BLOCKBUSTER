const axios = require("axios");

const renderMovies = require("./renderMovies");


// Función para obtener las páliculas desde la API con axios
const fetchData = (URL) => {
  axios(URL)
    .then((res) => {
      renderMovies(res.data);
    })
    .catch((err) => {
      console.error(`Error al obtener listado de peliculas: ${err}`);
    })
    .finally(() => {
      console.log("Proceso terminado");
    });
};

module.exports = fetchData;

// Función para obtener las páliculas desde la API usando async/await

// const fetchData = async (URL) => {
//   try {
//     const {data} = await axios(URL);
//     renderMovies(data);
//   } catch (reason) {
//     console.error(`Error al obtener listado de peliculas: ${reason}`);
//   } finally {
//     console.log("Proceso terminado");
//   }
// }

// Función para obtener las películas desde la API usando jQuery ajax

// function fetchMoviesWithJQuery() {
//   $.get(URL, (movies) => {
//     renderMovies(movies);
//   }).fail(() => {
//     console.error("Error al obtener las películas");
//   });
// }
