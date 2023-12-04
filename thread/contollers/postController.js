const Post = require("../models/postModel");
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
      return res.status(404).json({ message: "user not found" });
    }

    const maxLength = 500;

    if (text.length > maxLength) {
      return res
        .status(400)
        .json({ message: `Text must be less than ${maxLength} characters` });
    }
    const newPost = new Post({ postedBy, text, img });

    await newPost.save();

    res.status(201).json({ message: "Post created successfully", newPost });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in Create post", err.message);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in Get post:", err.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    if (post.postedBy.toString() !== req.user._id.toString()) {
      return res
        .status(404)
        .json({ message: "Unauthorized to delete  this post" });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in Delete post:", err.message);
  }
};

const likeUnlikePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const userLikePost = post.likes.includes(userId);

    if (userLikePost) {
      await Post.updateOne({ id: postId }, { $pull: { likes: userId } });
      res.status(200).json({ message: "Post unliked successfully" });
    } else {
      post.likes.push(userId);
      await post.save();

      res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in LikeUnlikePost:", err.message);
  }
};

const replyToPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;
    const userProfilePic = req.user.userProfilePic;
    const username = req.user.username;

    if (!text) {
      return res.status(400).json({ message: "Text field is Required" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const reply = { userId, text, userProfilePic, username };

    post.replies.push(reply);
    await post.save();

    res.status(200).json({ message: "reply added successfully", post });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in ReplyToPost:", err.message);
  }
};

const getFeedPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).jso({ message: "User not found" });
    }

    const following = user.following;

    const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
      createAt: -1,
    });

    res.status(200).json({ feedPosts });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in FeedPost:", err.message);
  }
};

const getUserPost = async (req, res) => {
  const {username} = req.params
  try {
    const user = await User.findOne({ username})
    if(!user) {
        return res.status(400).json({ message: "User not found"})
    }
    const posts = await Post.find({ postedBy: user._id}).sort({ createAt: -1})
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createPost,
  getFeedPost,
  getPost,
  deletePost,
  likeUnlikePost,
  replyToPost,
  getUserPost
};
