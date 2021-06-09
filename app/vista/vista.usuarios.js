const controladorUsuarios = require('../controlador/controlador.usuarios')

const creacionDeUsuario = async (req, res) => {
  let data = req.params.metodo

  try {
    console.log(`entrando a la creacion del usuario: ${data}`)
    res.render('signUp')
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Error en la creación del usuario", error: err})
  }
}

const loginUsuario = async (req, res) => {
  try {
    console.log(`entrando al login del usuario`)
    res.render('login')
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Error en el login del usuario", error: err})
  }
}

module.exports = {
  creacionDeUsuario,
  loginUsuario
}