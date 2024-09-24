console.log(tempData);

const star = '\u2B50';

const container = document.querySelector('.movie-container');

tempData.forEach(movie => {
    // Crear la tarjeta de película
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    // Añadir imagen del póster de la película
    const movieImage = document.createElement('img');
    movieImage.src = movie.poster;
    movieImage.alt = `${movie.title} poster`;
    movieCard.appendChild(movieImage);

    // Añadir el título de la película
    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.title;
    movieCard.appendChild(movieTitle);

    // Añadir el año de la película
    // const movieYear = document.createElement('p');
    // movieYear.textContent = `Year: ${movie.year}`;
    // movieCard.appendChild(movieYear);

    // Añadir el director de la película
    // const movieDirector = document.createElement('p');
    // movieDirector.textContent = `Director: ${movie.director}`;
    // movieCard.appendChild(movieDirector);

    // Añadir la duración de la película
    // const movieDuration = document.createElement('p');
    // movieDuration.textContent = `Duration: ${movie.duration}`;
    // movieCard.appendChild(movieDuration);

    // Añadir el género de la película
    // const movieGenre = document.createElement('p');
    // movieGenre.textContent = `Genres: ${movie.genre.join(', ')}`;
    // movieCard.appendChild(movieGenre);

    // Añadir la calificación de la película
    const movieRate = document.createElement('p');
    movieRate.textContent = `Rating: ${movie.rate} ${star}`;
    movieCard.appendChild(movieRate);

    // Añadir la tarjeta de película al contenedor
    container.appendChild(movieCard);
});