

module.exports = {
    getAllPosts: (req, res) => {
        res.status(200).send("Endpoint para obtener todos los posts");
    },

    getPostById: (req, res) => {
        res.status(200).send("Endpoint para obtener un post por id");
    }
}