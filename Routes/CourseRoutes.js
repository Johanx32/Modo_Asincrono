const express = require("express");
const { getAllCourses, getSingleCourse, createCourses, updateCourse, deleteCourse} = require('../Controllers/CourseController')
const router = express.Router();

router.route('/')
      .get(getAllCourses)
      .post(createCourses)

router.route('/:id')
      .get(getSingleCourse)
      .put(updateCourse)
      .delete(deleteCourse)

module.exports = router