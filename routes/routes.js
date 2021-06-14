const express = require('express');
const router = express.Router();

//Services
const users = require('../services/users.services')
const presupuestos = require('../services/presupuestos_proyecto.services');
const efectivo = require('../services/efectivo.services')

// MVC
const vistaUsuarios = require('../app/vista/vista.usuarios')
const vistaPresupuestos = require('../app/vista/vista.presupuestos')

//Middlewares
const { verificacionCliente } = require('../middleware/midd.cliente')

// Crear un nuevo usuario
router.post('/usuarios/crear', users.createNewUser)
// Logear usuario 
router.post('/usuarios/login', users.loginUser)

// MVC Routes

// Authentication
router.get('/signUp', vistaUsuarios.creacionDeUsuario)
router.get('/logIn', vistaUsuarios.loginUsuario)

// HomePage
router.get('/home', vistaPresupuestos.homePresupuestos)

//Presupuestos
router.post('/presupuestos/crear', presupuestos.crearPresupuesto)

//Efectivo
router.post('/efectivo/flujo', efectivo.crearFlujo)

module.exports = router