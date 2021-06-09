const sequelize = require('../db/conexion');
const Users = require('../models/users');
const jwt = require('jsonwebtoken')

const generaToken = async (data)=>{
  try {
      let resultado = jwt.sign({
          data}, process.env.SECRET_KEY
      )
      return resultado
  }catch (err){
      console.log(err)
      throw new Error (err)
  }
}

const createNewUser = async (req, res) => {
  const usuarioNuevo = req.body
  try {
      const newUser = await Users.create({
          name: usuarioNuevo.name,
          first_name: usuarioNuevo.first_name,
          last_name: usuarioNuevo.last_name,
          password: usuarioNuevo.password,
          email: usuarioNuevo.email
      })
      res.status(200).json({ message: "User Created succesfully", User: newUser})
  } catch (err) {
      res.status(400).json({ message: "Error creating User", error: err })
  }
}

const userExistOnDatabase = async (usr) => {
  let resultado = await Users.findOne({where: { name: usr.name, password: usr.password}})
  // null
  if (resultado === null){
      return false
  }else {
      return true
  }
}

const loginUser = async (req, res) => {
  let user = req.body
  try {
      let userExist = await userExistOnDatabase(user);
      if (userExist) {
          let tokenGenerated = await generaToken(user)
          res.status(200).json({ message: "token generado correctamente", token: tokenGenerated})
      } else {
          throw new Error (err)
      }
  } catch (err) {
      console.log(err)
      res.status(400).json({ message: "Error en el login", error: err})
  }
}

module.exports = {
  createNewUser,
  loginUser
}