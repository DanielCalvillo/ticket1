const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion')

class PresupuestosConProyecto extends Model {}

PresupuestosConProyecto.init({
    //Model attributes are defined here
    presupuesto_id: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Proyect_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    versiones: {
      type: DataTypes.JSON,
      allowNull: false
    },
}, {
    sequelize,
    modelName: 'PresupuestosConProyecto'
})

module.exports = PresupuestosConProyecto