$(document).ready(function () {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      duration: 148,
      genre: "Sci-Fi",
      director: "Christopher Nolan",
      rate: 8.8,
      img: "https://imgs.search.brave.com/NxF85Djf0-VWa_18PxjsbkufKn4oNXQrehUQkG8LWWA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5LzYx/LzEyL2U5NjExMmU2/Nzg1ZGM5NzU0MzNl/YmM0NzFiNGJjMmJl/LmpwZw",
      description:
        "A thief who enters the dreams of others to steal their secrets gets a chance at redemption.",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      duration: 152,
      genre: "Action",
      director: "Christopher Nolan",
      rate: 9.0,
      img: "https://imgs.search.brave.com/t8iDVVe4sDeQs8f8IRIb7pSuzWICHC0BA6Ewqx3R0VA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL3RoZV9kYXJr/X2tuaWdodF9rZXlf/YXJ0LmpwZw",
      description:
        "Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham.",
    },
    {
      title: "Interstellar",
      year: 2014,
      duration: 169,
      genre: "Sci-Fi",
      director: "Christopher Nolan",
      rate: 8.6,
      img: "https://imgs.search.brave.com/riNi1T_6PmpWK79oe98yZX66flQ-ugQvKdjNmRz62fI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6ZGpNREF4/WkdJdE1qSTJNeTAw/T0RBMUxUbGtOekl0/T1dGak1EVTVaREps/WVdZM1hrRXlYa0Zx/Y0djQC5qcGc",
      description:
        "A team of explorers travels through a wormhole in space to find a new habitable planet.",
    },
    {
      title: "The Matrix",
      year: 1999,
      duration: 136,
      genre: "Sci-Fi",
      director: "Lana Wachowski, Lilly Wachowski",
      rate: 8.7,
      img: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
      description:
        "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    },
    {
      title: "Gladiator",
      year: 2000,
      duration: 155,
      genre: "Action, Drama",
      director: "Ridley Scott",
      rate: 8.5,
      img: "https://imgs.search.brave.com/acZPN6nO5-Qr55GZQo-85f_XNIv6J9ZZNXvvguE69yk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmZpbG1hZmZpbml0/eS5jb20vZ2xhZGlh/dG9yLTg1MTk1ODI1/OC1tbWVkLmpwZw",
      description:
        "A betrayed Roman general seeks vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      duration: 142,
      genre: "Drama",
      director: "Frank Darabont",
      rate: 9.3,
      img: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
      description:
        "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    },
  ];

  const movieContainer = $(".movie-container");

  movies.forEach((movie) => {
    const movieCard = `
            <div class="movie-card">
                <img src="${movie.img}" alt="${movie.title}">
                <div class="movie-info">
                    <h2>${movie.title} (${movie.year})</h2>
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Duration:</strong> ${movie.duration} min</p>
                    <p><strong>Rate:</strong> ${movie.rate}/10</p>
                    <p>${movie.description}</p>
                </div>
            </div>
        `;

    movieContainer.append(movieCard);
  });
});
