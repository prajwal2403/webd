import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs",{
    numberOfLetters : numLetters
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
