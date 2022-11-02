'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //AddColumn: Argumentos
        //      1. Nombre de la tabla donde poner la columna
        //      2. Nueva columna a poner
        //      3. Opciones de configuración
    await queryInterface.addColumn('bootcamps', 'user_id', 
                                  {
                                    type:Sequelize.INTEGER,
                                    references:{
                                      model: 'users',
                                      key: 'id'
                                    },
                                    onUpdate: 'CASCADE',
                                    onDelete: 'SET NULL'
                                  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps', 'user_id')
  }
};
