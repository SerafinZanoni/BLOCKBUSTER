
if (window.location.href.includes("movies.html")) {
  require("./createMovie");
} else {
  const { fetchData } = require("./fetchData");
  const URL = "http://localhost:3000/movies";
  fetchData(URL);
}
