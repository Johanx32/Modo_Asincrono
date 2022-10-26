exports.getAllBootcamps = (req, res) => {
    res.status(200)
    .json({
        "success" : true,
        "data": "Todos los bootcamps"  
    })
}

exports.getSingleBootcamp = (req, res)=>{
    res.status(200)
    .json({
        "success" : true,
        "data": `Single Bootcamp cuyo id es: ${req.params.id}`
    })
}

exports.createBootcamps = (req, res) => {
    res.status(201)
    .json({
        "success" : true,
        "data": "Create bootcamp"  
    })
}

exports.updateBootcamp = (req, res) => {
    res.status(200)
    .json({
        "success" : true,
        "data": `Actualizar el bootcamp cuyo id es: ${req.params.id}`
    })
}

exports.deleteBootcamp = (req, res) => {
    res.status(200)
    .json({
        "success" : true,
        "data": `Delete bootcamp cuyo id es: ${req.params.id}`
    })
}