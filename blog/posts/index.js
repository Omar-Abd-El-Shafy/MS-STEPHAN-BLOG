const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  try {
    await axios
      .post("http://localhost:4006/events", {
        type: "postCreated",
        data: {
          id,
          title,
        },
      })
      .then((res) => {
        console.log("inside try");
        console.log(res);
      });
  } catch (err) {
    console.log("inside err");
    console.log(err);
  }

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  res.send("done");
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
