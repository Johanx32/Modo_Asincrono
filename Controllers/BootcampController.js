const sequelize = require('../config/seq')
const { DataTypes } = require('sequelize')
const BootcampModel = require('../models/bootcamp')

const Bootcamp = BootcampModel(sequelize, DataTypes)

exports.getAllBootcamps = async (req, res) => {
    const allbootcamps = await Bootcamp.findAll()
    res.status(200)
    .json({
        "success" : true,
        "data": allbootcamps 
    })
}

exports.getSingleBootcamp = async (req, res)=>{
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200)
    .json({
        "success" : true,
        "data":  singleBootcamp
    })
}

exports.createBootcamps = async (req, res) => {
    const newUser = await Bootcamp.create(req.body)
    res.status(201)
    .json({
        "success" : true,
        "data": newUser  
    })
}

exports.updateBootcamp = async (req, res) => {
    await Bootcamp.update(req.body, {
        where: {
          id: req.params.id 
        }
      });
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200)
    .json({
        "success" : true,
        "data": singleBootcamp
    })
}

exports.deleteBootcamp = async (req, res) => {
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
    res.status(200)
    .json({
        "success" : true,
        "data": singleBootcamp
    })
}