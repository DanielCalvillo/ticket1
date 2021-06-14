const controladorPresupuestos = require('../controlador/controlador.presupuestos')

const homePresupuestos = async (req, res) => {
  try {
    res.render('home')
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Error Ingresando al home", error: err})
  }
}

module.exports = {
  homePresupuestos
}