const express = require('express')
const app = express()
const port = 80
const path = require("path");
const pug = require('pug');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("test", { title: "Home" });
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))