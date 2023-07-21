const express = require("express");
const path = require("path");

const mainController = require("./controllers/main");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", mainController.getData);

app.listen(3000);
