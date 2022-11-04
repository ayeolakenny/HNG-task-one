const express = require("express");
const cors = require("cors");
const { json } = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({
    slackUsername: "ayeolakenny",
    backend: true,
    age: 21,
    bio: "My name is Ayeola Kehinide and i am a fullstack developer based in lagos",
  });
});

app.post("/", (req, res) => {
  if (req.body.operation_type === "addition") {
    res.json({
      slackUsername: "ayeolakenny",
      operation_type: req.body.operation_type,
      result: req.body.x + req.body.y,
    });
  } else if (req.body.operation_type === "subtraction") {
    res.json({
      slackUsername: "ayeolakenny",
      operation_type: req.body.operation_type,
      result: req.body.x - req.body.y,
    });
  } else if (req.body.operation_type === "multiplication") {
    res.json({
      slackUsername: "ayeolakenny",
      operation_type: req.body.operation_type,
      result: req.body.x * req.body.y,
    });
  } else {
    res.send({
      message:
        "operation type can only be addition, subtraction or multiplication",
    });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
