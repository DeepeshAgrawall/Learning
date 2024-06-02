const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios")
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
//  posts = {
//     "abcdId" : {
//         id: "abcdId",
//         title: "post",
//         coments: {
//             id: "123",
//             content:"Comment"
//         }
//     }
// }

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = {
      id,
      title,
      comments: [],
    };
  }

  if (type === "CommentCreated") {
    console.log("data Query servce", data);
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  // generic update, can update every property
  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => comment.id == id);

    comment.status = status;
    comment.content = content;
  }
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log("data in query", data, type);
  handleEvent(type, data);
  res.send({});

  console.log("posts", posts);
});

app.listen(4002, async () => {
  console.log("Listening on 4002");
  try {
    const res = await axios.get("http://localhost:4005/events");
 
    for (let event of res.data) {
      console.log("Processing event:", event.type);
 
      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});
