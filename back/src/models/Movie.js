const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  duration: Number,
  genre: String,
  rate: Number,
  poster: String,
});
const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
