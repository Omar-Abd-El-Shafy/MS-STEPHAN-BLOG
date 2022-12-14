const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  try {
    await axios.post("http://localhost:4000/events", event);

    // axios.post("http://localhost:4001/events", event);
    // axios.post("http://localhost:4002/events", event);

    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4006, () => {
  console.log("listen on 4005");
});
