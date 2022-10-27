const { DataTypes } = require("sequelize")
const CourseModel = require('../models/courses')
const sequelize = require('../config/seq')

//Objeto user
const Course = CourseModel(sequelize, DataTypes)

exports.getAllCourses = async (req, res) => {
    const allCourses = await Course.findAll()
    res.status(200)
    .json({
        "success" : true,
        "data": allCourses 
    })
}

exports.getSingleCourse = async (req, res)=>{
    const singleCourse = await Course.findByPk(req.params.id)
    res.status(200)
    .json({
        "success" : true,
        "data": singleCourse
    })
}

exports.createCourses = async (req, res) => {
    const newCourse = await Course.create(req.body)
    res.status(201)
    .json({
        "success" : true,
        "data": newCourse 
    })
}

exports.updateCourse = async (req, res) => {
    await Course.update(req.body, {
        where: {
          id: req.params.id 
        }
      });
    const singleCourse = await Course.findByPk(req.params.id)
    res.status(200)
    .json({
        "success" : true,
        "data": singleCourse
    })
}

exports.deleteCourse = async (req, res) => {
    const singleCourse = await Course.findByPk(req.params.id)
    await Course.destroy({
        where: {
          id: req.params.id
        }
      });
    res.status(200)
    .json({
        "success" : true,
        "data": singleCourse
    })
}