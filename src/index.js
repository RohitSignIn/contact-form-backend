const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server_config");
const apiRouter = require("./routes/api_router");
const connectDB = require("./config/db_config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(PORT, async (res) => {
  console.log(`Server Started on http://localhost:${PORT}`);
  connectDB();
});
