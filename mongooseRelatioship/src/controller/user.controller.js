const express = require('express') ;

const User = require("../model/user.model");

const crudController = require("./crudcontroller");

const router = express.Router();

router.get("", crudController.get(User));

router.get("/:id", crudController.getOne(User));

router.post("", crudController.post(User));

router.patch("/:id", crudController.updateOne(User));

 

router.delete("/:id", crudController.deleteOne(User));




module.exports = router;