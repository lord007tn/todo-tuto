const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: { type: String, unique: true, maxlength: 256 },
    content: { type: String },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
