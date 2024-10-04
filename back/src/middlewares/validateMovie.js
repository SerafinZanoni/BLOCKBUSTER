
const validateMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  // Lista de errores vacía
  let errors = [];

  // Verifica cada campo y agrega el error correspondiente si falta
  if (!title) errors.push("Title is required");
  if (!year) errors.push("Year is required");
  if (!director) errors.push("Director is required");
  if (!duration) errors.push("Duration is required");
  if (!genre) errors.push("Genre is required");
  if (!rate) errors.push("Rate is required");
  if (!poster) errors.push("Poster is required");

  // Si hay errores, devolver una respuesta con los errores
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  console.log("Movie created successfully");
  next(); // Si no hay errores, continúa al siguiente middleware o controlador
};

module.exports = validateMovie;
