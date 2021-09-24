

const express = require('express');

const Tag = require("../model/tag.model");

const crudController = require("./crudcontroller");

const router = express.Router();

router.get("", crudController.get(Tag));

router.get("/:id",crudController.getOne(Tag));

router.post("", crudController.post(Tag));

router.patch("/:id", crudController.updateOne(Tag));

 

router.delete("/:id", crudController.deleteOne(Tag));

module.exports = router;
