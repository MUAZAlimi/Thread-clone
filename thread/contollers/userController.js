const User = require("../models/useModel");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/helper/generateTokenAndSetCookie");
const mongoose = require("mongoose")

const getUserProfile = async (req, res) => {
  // we fetch the user profile either by user name or userId
  // query is either username or userId

  const  { query } = req.params;
  try {
      let user;

      // query  is  userId
      if (mongoose.Types.ObjectId.isValid(query)) {
          user = await User.findOne({_id: query}).select("-password").select("-updateAt");
      }else {
        // query is username
        user = await User.findOne({username: query}).select("-password").select("-updateAt");
      }

      if(!user) {
        return res.status(400).json({message:"User not found"})
      }else{
        return res.status(200).json({user})
      }

  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in getUserProfile", err.message);
  }
};

const signUPUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in signupUser", error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect)
      return res
        .status(400)
        .json({ error: "Invalid username or password password" });

    if (user.isFrozen) {
      user.isFrozen = false;
      await user.save();
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      bio: user.bio,
      profilePic: user.profilePic,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in loginUser", err.message);
  }
};

const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "users logout successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in LogoutUser", err.message);
  }
};

const followUnFollowUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);

    if (id === req.user._id.toString())
      return res
        .status(400)
        .json({ error: "You can't follow/unfollow Your self" });
    if (!userToModify || !currentUser)
      return res.status(400).json({ error: "User not Found" });

    const isFollowing = currentUser.following.includes(id);
    if (isFollowing) {
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
      res.status(200).json({ success: "User unfollowed successfully " });
    } else {
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
      res.status(200).json({ success: "User followed successfully " });
    }
  } catch (err) {
    res.status(500).json({ error: err.messaUe });
    console.log("Error in follow/unfollow user", err.message);
  }
};

module.exports = {
  getUserProfile,
  signUPUser,
  loginUser,
  logoutUser,
  followUnFollowUser,
};
