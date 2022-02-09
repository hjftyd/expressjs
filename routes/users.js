const router = require("express").Router();
const User = require("../models/User");


// ADD NEW
router.post("/new", async (req, res) => {
  try {
    const newUser = new User({
      author: req.body.author,
    })
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});
      
//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;