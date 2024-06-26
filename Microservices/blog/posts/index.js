const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
const posts = {};
app.use(cors());

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
 await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });
  res.status(201).send(posts[id]);
});

app.post("/events", (req,res)=>{
  console.log("recived event",req.body.type)
  //const data = req.body.data

  res.send({})
})

app.listen(4000, () => {
  console.log("server running onn 4000");
});
