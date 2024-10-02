const { Router } = require("express");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const moviesRouter = require("./moviesRouter");



const router = Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/movies", moviesRouter);

module.exports = router;
