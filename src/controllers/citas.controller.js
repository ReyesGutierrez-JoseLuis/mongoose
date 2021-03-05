const citasCtrl = {};

// Models
const Cita = require("../models/Cita");

clientesCtrl.renderClienteForm = (req, res) => {
  res.render("clientes/new-cliente");
};

clientesCtrl.createNewCliente = async (req, res) => {
  const { empleado, citado, fecha, hora} = req.body;
  const errors = [];
  if (!empleado) {
    errors.push({ text: "Coloque el nombre del empleado encargado" });
  }
  if (!citado) {
    errors.push({ text: "Coloque el nombre del la persona citada" });
  }
  if (!fecha) {
    errors.push({ text: "Coloque la fecha de la cita " });
  }
  if (!hora) {
    errors.push({ text: "Coloque la hora de la cita" });
  }

  if (errors.length > 0) {
    res.render("clientes/new-cliente", {
    empleado,
    citado, 
    fecha,
    hora
    });
  } else {
    const newCita = new Cita({  empleado, citado, fecha, hora });
    newCita.user = req.user.id;
    await newCita.save();
    req.flash("success_msg", "Cita agregada correctamente");
    res.redirect("/cita");
  }
};

clientesCtrl.renderClientes = async (req, res) => {
  const citas = await Citas.find().sort({ date: "desc" });
  res.render("citas/new-cita", { citas });
};

clientesCtrl.renderEditForm = async (req, res) => {
  const cita = await Citas.findById(req.params.id);
  if (cita.user != req.user.id) {
    req.flash("error_msg", "No autorizado");
    return res.redirect("/clientes");
  }
  res.render("citas/edit-citas", { citas });
};

citasCtrl.updateCita = async (req, res) => {
  const { empleado, citado, fecha, hora } = req.body;
  await cita.findByIdAndUpdate(req.params.id, { empleado, citado, fecha, hora });
  req.flash("success_msg", " Actualizado Correctamente");
  res.redirect("/citas");
};

clientesCtrl.deleteCita = async (req, res) => {
  await cita.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Cita Eliminado");
  res.redirect("/citas");
};

module.exports = citasCtrl;
