const axios = require("axios");

const { renderMovies } = require("./renderMovies");

const fetchData = async (URL) => {
  try {
    const { data } = await axios(URL);
    renderMovies(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {fetchData};
