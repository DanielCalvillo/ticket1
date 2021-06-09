const express = require('express');
const router = express.Router();

//Services
const users = require('../services/users.services')

// MVC
const vistaUsuarios = require('../app/vista/vista.usuarios')

// Crear un nuevo usuario
router.post('/usuarios/crear', users.createNewUser)
// Logear usuario 
router.post('/usuarios/login', users.loginUser)

router.get('/signUp', vistaUsuarios.creacionDeUsuario)
router.get('/logIn', vistaUsuarios.loginUsuario)

module.exports = router