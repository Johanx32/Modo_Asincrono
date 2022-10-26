//1. Crear la dependencia a express
const express = require("express");
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const listEndpoints = require('express-list-endpoints');

//dependencias a las rutas
const bootcampRoutes = require('./Routes/BootcampRoutes')
const courseRoutes = require('./Routes/CourseRoutes')
const usersRoutes = require('./Routes/UserRoutes')



//Definiendo archivo .env
dotenv.config({
    path: './config/config.env'
})


//2. Crear el objeto
const app = express()

//Conectar con base de datos
connectDB()

//Relacionar rutas de dominio
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', courseRoutes)
app.use('/api/v1/users', usersRoutes)



//Primera ruta de prueba
app.get('/', (request, response) => {
    response.send('Ruta Funcional')
})

//Consultar rutas del proyecto
console.log(listEndpoints(app))


//3. Iniciar el servido de desarrollo que trae express por defecto
app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado'.bgCyan)
})

