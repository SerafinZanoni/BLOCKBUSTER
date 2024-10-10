const axios = require("axios");

let titleInput,
  yearInput,
  directorInput,
  durationInput,
  genreInput,
  rateInput,
  posterInput,
  descriptionInput;

const extractInputs = () => {
  titleInput = document.getElementById("title");
  yearInput = document.getElementById("year");
  directorInput = document.getElementById("director");
  durationInput = document.getElementById("duration");
  rateInput = document.getElementById("rate");
  posterInput = document.getElementById("urlImage");
  genreInput = document.getElementById("genre");
  descriptionInput = document.getElementById("description");
};

const clearInputs = () => {
  extractInputs();
  titleInput.value = "";
  yearInput.value = "";
  directorInput.value = "";
  durationInput.value = "";
  rateInput.value = "";
  posterInput.value = "";
  genreInput.value = "";
  descriptionInput.value = "";
};

const validateInputs = () => {
  let errors = [];

  // Verifica cada campo y agrega el error correspondiente si falta
  if (!titleInput.value.trim()) errors.push("Title");
  if (!yearInput.value.trim()) errors.push("Year");
  if (!directorInput.value.trim()) errors.push("Director");
  if (!durationInput.value.trim()) errors.push("Duration");
  if (!genreInput.value.trim()) errors.push("Genre");
  if (!rateInput.value.trim()) errors.push("Rate");
  if (!posterInput.value.trim()) errors.push("PosterURL");
  if (!descriptionInput.value.trim()) errors.push("Description");

  // Si hay errores, devolver una respuesta con los errores
  if (errors.length > 0) {
    alert("Please fill in all the required fields: " + errors.join(", "));
    return true;
  }

  return false;
};

const createMovie = (event) => {
  event.preventDefault();
  extractInputs();
  if (validateInputs()) {
    return;
  }

  const movie = {
    title: titleInput.value,
    year: yearInput.value,
    director: directorInput.value,
    duration: durationInput.value,
    genre: genreInput.value.split(","),
    rate: rateInput.value,
    poster: posterInput.value,
    description: descriptionInput.value,
  };

  axios
    .post("http://localhost:3000/movies", movie)
    .then((response) => {
      console.log(response);
      clearInputs();
    })
    .catch((error) => {
      console.error(error);
    });
 

  console.log(movie);

  return movie;
};

const submitButton = document.getElementById("add");
submitButton.addEventListener("click", createMovie);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearInputs);

module.exports = { createMovie };
