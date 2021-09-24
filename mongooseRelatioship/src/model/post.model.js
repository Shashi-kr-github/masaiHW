const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tagIds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "tag",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
