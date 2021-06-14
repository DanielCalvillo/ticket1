const efectivo = require('../models/efectivo')

const crearFlujo = (req, res) => {
  let nuevoEfectivo = req.body
  try {
    nuevoEfectivo = efectivo.create({
      titulo: nuevoEfectivo.titulo,
      ingresos: nuevoEfectivo.ingresos,
      egresos: nuevoEfectivo.egresos
    })
    res.status(200).json({ message: "Nuevo Flujo Creado exitosamente", nuevoEfectivo})
  } catch(error) {
    res.status(400).json({ message: "Error Creando Efectivo", error: err})
  }
}

module.exports = {
  crearFlujo
}