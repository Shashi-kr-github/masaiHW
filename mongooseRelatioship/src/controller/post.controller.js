const express = require('express');

const Post = require("../model/post.model"); 

const crudController = require('./crudcontroller')


 const router = express.Router();

 router.post("", crudController.post(Post));

 router.get("/post", async (req, res) => {
   const post = await Post
     .find()
     .populate("userId")
     .populate("tagIds")
     .lean()
     .exec();
   return res.status(201).send({ post });
 });

 router.get("/:id" , async (req,res) => {
      const post = await Post
        .findById(req.params.id).lean().exec();
      return res.status(201).send({ post });

 })

 router.patch('/:id', crudController.updateOne(Post));

 router.delete('/:id', crudController.deleteOne(Post));

 



module.exports = router;