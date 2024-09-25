const star = "\u2B50";

const URL = "https://students-api.up.railway.app/movies";

// Función para obtener las películas desde la API usando jQuery
function fetchMoviesWithJQuery() {
  $.get(URL, (movies) => {
    renderMovies(movies);
  }).fail(() => {
    console.error("Error al obtener las películas");
  });
}

// Función para renderizar las tarjetas de películas
function renderMovies(movies) {
  const movieCardContainer = document.querySelector(".movie-container");

  movieCardContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieImage = document.createElement("img");
    movieImage.src = movie.poster;
    movieImage.alt = `${movie.title} poster`;
    movieCard.appendChild(movieImage);

    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.title;
    movieCard.appendChild(movieTitle);

    const movieRate = document.createElement("p");
    movieRate.textContent = `Rating: ${movie.rate} ${star}`;
    movieCard.appendChild(movieRate);

    movieCardContainer.append(movieCard);
  });
}

fetchMoviesWithJQuery();
