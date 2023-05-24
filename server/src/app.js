const express = require("express");
const cors = require("cors");
const path = require("path");
const planetRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

console.log("public path", path.join(__dirname, "..", "public"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetRouter);
app.use(launchesRouter);

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "..", "public") });
});

module.exports = app;

