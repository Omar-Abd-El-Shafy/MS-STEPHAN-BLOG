const express = require("express");
const bodyParser = require("body-parser");
const { application } = require("express");
const { default: axios } = require("axios");

const app = express();

app.use(bodyParser.json);

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", events);
  axios.post("http://localhost:4001/events", events);
  axios.post("http://localhost:4002/events", events);

  res.send({ status: "ok" });
});

app.listen(4005, () => {
  console.log("listen on 4005");
});
