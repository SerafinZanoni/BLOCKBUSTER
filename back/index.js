const app = require("./src/server");
const host = "localhost";
const port = 3000;


app.listen(port, () => {
    console.log("Server running on http://" + host + ":" + port);
});