const express = require("express");
const { getAllUsers, getSingleUser, createUsers, updateUser, deleteUser} = require('../Controllers/UserController')
const router = express.Router();

router.route('/')
      .get(getAllUsers)
      .post(createUsers)

router.route('/:id')
      .get(getSingleUser)
      .put(updateUser)
      .delete(deleteUser)

module.exports = router