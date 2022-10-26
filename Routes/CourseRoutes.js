const express = require("express");
const router = express.Router();

//Listar todos los Cursos
router.get('/', (req, res) => {
    res.status(200)
    .json({
        "success" : true,
        "data": "Aqui Se van a listar todos los Cursos"  
    })
})

//Crear un nuevo curso
router.post('/', (req, res) => {
    res.status(201)
    .json({
        "success" : true,
        "data": "Aqui Se van a crear un nuevo curso"  
    })
})

//Listar un curso por id
router.get('/:id', (req, res)=>{
    res.status(200)
    .json({
        "success" : true,
        "data": `Aqui se va a mostrar el curso cuyo id es: ${req.params.id}`
    })
})

//Actualizar un curso por id
router.put('/:id', (req, res) => {
    res.status(200)
    .json({
        "success" : true,
        "data": `Aqui se va a actualizar el curso cuyo id es: ${req.params.id}`
    })
})

//Eliminar un curso por id
router.delete('/:id', (req, res) => {
    res.status(200)
    .json({
        "success" : true,
        "data": `Aqui se va a eliminar el curso cuyo id es: ${req.params.id}`
    })
})

module.exports = router