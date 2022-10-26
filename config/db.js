const sequelize = require('./seq')
const colors = require('colors')

//Funcion para conectrame a la base de datos
const connectDB = async () =>{
    try {
        await sequelize.authenticate()
        console.log('Conectado a servidor mysql'. bgCyan.red) 
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB