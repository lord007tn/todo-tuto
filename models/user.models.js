const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: { type: String, maxlength: 256 },
    email: { type: String, unique: true, index: true },
    password: { type: String, maxlength: 1024 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
