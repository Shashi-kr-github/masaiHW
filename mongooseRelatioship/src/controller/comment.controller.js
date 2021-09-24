const express = require('express');
const Comment = require("../model/comment.model");

const router = express.Router();

const crudController = require("./crudcontroller");



router.get("", async (req, res) => {
  const comment = await Comment.find().populate("postId").lean().exec();
  return res.status(200).send({ comment });
});

router.get("/:id", crudController.getOne(Comment));

router.post("", crudController.post(Comment));

router.patch("/:id", crudController.updateOne(Comment));

  

router.delete("/:id", crudController.deleteOne(Comment));

module.exports = router;
