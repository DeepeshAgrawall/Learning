const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
const app = express();
const axios = require("axios");
app.use(cors());

app.use(bodyParser.json());
const commentsByPostId = {};

// Define a specific route or router where we want to use bodyParser.text() or json()
const router = express.Router();

// Apply bodyParser.text() middleware to the specific route or router
// router.use(bodyParser.text());
router.use(bodyParser.json());

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});
app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  console.log("con", content);
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({
    id: commentId,
    content,
    status: "pending",
  });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
      status: "pending",
    },
  }).catch(e => console.log("ee",e.message))
  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  console.log("recived event", req.body.data);
  const { data, type } = req.body;
console.log("")
  if (type == "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => comment.id === id);

    comment.status = status;
console.log("sending CommentUpdated")
    await axios.post("http://localhost:4005/events/", {
      type: "CommentUpdated",
      data: {
        id,
        postId,
        status,
        content,
      },
    }).catch(e => console.log("ee",e.message))
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("comment service ruuning on 4001");
});
