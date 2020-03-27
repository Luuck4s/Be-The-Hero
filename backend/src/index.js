const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, () => {
  console.log(`[SERVER] Server is running on  http://localhost:3333`);
});

module.exports = app;
