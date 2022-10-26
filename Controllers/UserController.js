const { DataTypes } = require("sequelize")
const UserModel = require('../models/user')
const sequelize = require('../config/seq')

//Objeto user
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async (req, res) => {
    const allUsers = await User.findAll()
    res.status(200)
    .json({
        "success" : true,
        "data": allUsers 
    })
}

exports.getSingleUser = (req, res)=>{
    res.status(200)
    .json({
        "success" : true,
        "data": `Single User cuyo id es: ${req.params.id}`
    })
}

exports.createUsers = (req, res) => {
    res.status(201)
    .json({
        "success" : true,
        "data": "Create User"  
    })
}

exports.updateUser = (req, res) => {
    res.status(200)
    .json({
        "success" : true,
        "data": `Actualizar el User cuyo id es: ${req.params.id}`
    })
}

exports.deleteUser = (req, res) => {
    res.status(200)
    .json({
        "success" : true,
        "data": `Delete User cuyo id es: ${req.params.id}`
    })
}