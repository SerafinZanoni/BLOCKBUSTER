const validateMovie = (req, res, next) => {
    const { title, year } = req.body;
    if (!title || !year) {
        res.status(400).json({ error: "Title and year are required" });
        console.log("Title and year are required");
    } else {
        console.log("Movie created successfully");
        
        next();
    }
}

module.exports = validateMovie