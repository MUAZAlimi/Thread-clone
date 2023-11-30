const User = require("../models/useModel");

const createPost = async (req, res) => {
  try {
    const { postedBy, text, img } = req.body;

    if (!postedBy || !text) {
      return res
        .status(400)
        .json({ message: "postedBy and text fields aren required" });
    }

    const user = await User.findById(postedBy);

    if (!user) {
        return res.status(404).json({message: "user not found"})
    }
  } catch (err) {}
  res.status(500).json({ message: err.message });
  console.log("Error in Create post", err.message);
};

module.exports = {
  createPost,
};
