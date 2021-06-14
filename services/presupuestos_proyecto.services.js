const PresupuestosConProyecto = require('../models/presupuestos_proyecto')

const crearPresupuesto = async (req, res) => {
  let nuevoPresupuesto = req.body
  try {
    nuevoPresupuesto = await PresupuestosConProyecto.create({
      presupuesto_id: nuevoPresupuesto.presupuesto_id,
      Proyect_id: nuevoPresupuesto.Proyect_id,
      versiones: nuevoPresupuesto.versiones
    })
    res.status(200).json({ message: "presupuesto creado exitosamente", presupuesto: nuevoPresupuesto})
  } catch(err) {
    console.log(err)
    res.status(400).json({ message: 'Error en creación de presupuesto', error: err})
  }
}


module.exports = {
  crearPresupuesto
}