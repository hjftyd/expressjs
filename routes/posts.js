const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});



//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const author = req.query.author;
  const catName = req.query.cat;
  const tagName = req.query.tag;
  const dateName = req.query.date;
  try {
    let posts;
    if (author) {
      posts = await Post.find({ author });
    } else if (catName) {
      posts = await Post.find({ category: {
          $in: [catName],
        },
      });
    } else if (tagName) {
      posts = await Post.find({ tag: {
          $in: [tagName],
        },
      });
    } else if (dateName) {
      posts = await Post.find({ created: {
          $in: [dateName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;