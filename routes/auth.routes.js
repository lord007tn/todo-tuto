const router = require("express").Router();
const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  //check if the email already exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json("Email exist");
  // hash password
  const salt = await bcrypt.genSalt(16);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // create new user
  const newUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  //check if the email already exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("Wrong Email/Password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).json("Wrong Email/Password");

  const token = jwt.sign({ _id: user._id }, "9d46f8sqdq8", {
    expiresIn: "2 days",
  });

  return res.status(200).json({ token: token, user: user})
});
module.exports = router;
