const { check } = require('express-validator');

/* Ruta de Usuarios / Auth */
const express = require('express')
const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth')
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = express.Router()


// --------------------------
// http://localhost:4000/api/auth/new
router.post(
  '/new',
  [ //colecion de middleware
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'el password debe ser de 6 caracteres').isLength({min:6}),
    validarCampos
  ],
  crearUsuario)

// --------------------------
// ​http://localhost:4000/api/auth/
router.post(
  '/',
  [
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'el password debe ser de 6 caracteres').isLength({min:6}),
    validarCampos
  ],
  loginUsuario)

// --------------------------
// http://localhost:4000/api/auth/renew
router.get(
  '/renew',
  validarJWT,
  revalidarToken
)

module.exports = router
