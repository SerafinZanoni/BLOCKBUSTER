const app = require("./src/server");
const host = "localhost";
const port = 3000;
const dbConfig = require("./src/config/dbConfig");

dbConfig().then((res) => {
  app.listen(port, () => {
    console.log("Server running on http://" + host + ":" + port);
  });
})
.catch((err) => {
  console.log(err.message);
});
