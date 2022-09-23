const { Router }= require('express')
const { validarJWT } = require('../middlewares/validar-jwt');
const {validarCampos} = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarevento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const {isDate} = require('../helpers/isDate')
const router = Router()

router.use ( validarJWT )
// --------------------------
// http://localhost:4000/api/events/
router.get(
  '/',
  getEventos)

// --------------------------
// http://localhost:4000/api/events/
router.post(
  '/',
  [
    check('title', 'el titulo tiene que ser obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom(isDate),
    check('end', 'Fecha de finalizacion es obligatorio').custom(isDate),
    validarCampos
  ],
  crearEvento)

// --------------------------
// http://localhost:4000/api/events/123456
router.put(
  '/:id',
  [
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalización es obligatoria').custom( isDate ),
    validarCampos
  ],
  actualizarevento)

// --------------------------
// http://localhost:4000/api/events/123456
router.delete('/:id', eliminarEvento)

module.exports = router

