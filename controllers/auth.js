const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

// -------------------------------
// crearUsuario
// -------------------------------
const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "un usuario existe con ese correo",
      });
    }

    usuario = new Usuario(req.body);
    // encriptar contraseña
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    // create token(JWT)
    const token = await generarJWT(usuario.id, usuario.name)

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msm: "porfavor hable con el administrador",
    });
  }
};

// -------------------------------
// loginUsuario
// -------------------------------
const loginUsuario = async(req, res = response) => {
  const { email, password } = req.body;

  try {

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "el usuario no existe con ese email",
      });
    }

    // confirmar los password
    const validPassword = bcrypt.compareSync(password, usuario.password)

    if( !validPassword){
      return res.status(400).json({
        ok:false,
        msg:'password incorrecto'
      })
    }

    // create token(JWT)
    const token = await generarJWT(usuario.id, usuario.name)

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msm: "porfavor hable con el administrador",
    });
  }
};

// -------------------------------
// revalidarToken
// -------------------------------
const revalidarToken = async(req, res = response) => {

  const uid = req.uid
  const name = req.name

  // create token(JWT)
  const token = await generarJWT(uid, name)

  res.json({
    ok: true,
    token
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
