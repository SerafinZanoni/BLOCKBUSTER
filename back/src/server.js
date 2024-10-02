const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();


// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log("Using middleware");
    next();
});
    

app.use(router);

module.exports = app;
