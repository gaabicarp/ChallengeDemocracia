require('dotenv').config()

const multer = require('multer')
const express = require('express')
const Router = express.Router()

const {
  mandarConfirmacion,
  agregarEmail,
  mailContacto,
  mailTrabajo,
  mailTrabajoError
} = require('./lib/mailgun')

const {
  getPublicacionesUsers,
  getInfoUsers
} = require('./lib/users')

const {
  getPublicaciones
} = require('./lib/medium')

const {
  getPublicacionesCasos
} = require('./lib/medium-casos')

const upload = multer({ limits: { fileSize: 5000000, files: 1 } }) // 1 file 5MB max

//Agrego Ruta para los users
Router.get('/publicaciones-user', getPublicacionesUsers)
Router.get('/casos', getPublicacionesCasos)
Router.get('/publicaciones', getPublicaciones)
Router.get('/subscripcion', agregarEmail)
Router.post('/user-info', getInfoUsers)
Router.post('/validar-subscripcion', mandarConfirmacion)
Router.post('/contacto', mailContacto)
Router.post('/trabajo', upload.single('cv'), mailTrabajo, mailTrabajoError) 

module.exports = Router