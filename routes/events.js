// event Routes
// /api/events

const { Router } = require("express");
const{check}=require("express-validator")
const {isDate}=require("../helpers/isDate")
const{validarCampos}= require("../middlewares/validar-campos")
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const router = Router(); 

router.use(validarJWT);
//obetenes eventos
router.get('/', getEventos);

// crear eventos
router.post(
  '/',
  
   [
    check("title","El titulo es obligatorio").not().isEmpty(),
    check("start","fecha de inicio es obligatoria").custom(isDate),
    check("end","fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos
   ],
    crearEvento
   );

// actualizar evento
router.put('/:id', actualizarEvento);

// borrar evento

router.delete('/:id', eliminarEvento);

module.exports = router;
