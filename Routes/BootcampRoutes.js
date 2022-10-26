const express = require("express");
const { getAllBootcamps, getSingleBootcamp, createBootcamps, updateBootcamp, deleteBootcamp} = require('../Controllers/BootcampController')
const router = express.Router();

router.route('/')
      .get(getAllBootcamps)
      .post(createBootcamps)

router.route('/:id')
      .get(getSingleBootcamp)
      .put(updateBootcamp)
      .delete(deleteBootcamp)

module.exports = router