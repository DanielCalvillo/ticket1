const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion')

class efectivo extends Model {}

efectivo.init({
    //Model attributes are defined here
    titulo: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    ingresos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    egresos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
}, {
    sequelize,
    modelName: 'efectivo'
})

module.exports = efectivo