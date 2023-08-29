const { response } = require("express");
const Evento = require("../models/evento");
const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const eventoGuardado = await evento.save();
    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador",
    });
  }
};

const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizarEvento",
  });
};

const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminarrEvento",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
