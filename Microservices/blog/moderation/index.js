const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { data, type } = req.body;

  if (type == "CommentCreated") {
    const modifiedStatus = data.content.includes("orange")
      ? "rejected"
      : "approved";

    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        ...data,
        status: modifiedStatus,
      },
    });
  }

  res.send({})
});

app.listen(4003, () => {
  console.log("server ruunning on port 4003");
});
