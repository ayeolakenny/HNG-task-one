const express = require("express");
const cors = require("cors");
const app = express();
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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
