// event Routes
// /api/events

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const router = Router();

//obetenes eventos
router.get('/', validarJWT, getEventos);

// crear eventos
router.post('/', validarJWT, crearEvento);

// actualizar evento
router.put('/:id', validarJWT, actualizarEvento);

// borrar evento

router.delete('/:id',validarJWT, eliminarEvento);

module.exports = router;
