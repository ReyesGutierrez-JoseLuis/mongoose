const clientesCtrl = {};

// Models
const Cliente = require("../models/Cliente");

clientesCtrl.renderClienteForm = (req, res) => {
  res.render("clientes/new-cliente");
};

clientesCtrl.createNewCliente = async (req, res) => {
  const { empresa, persona, puesto, telefono, correo } = req.body;
  const errors = [];
  if (!empresa) {
    errors.push({ text: "Coloque el nombre de la empresa" });
  }
  if (!persona) {
    errors.push({ text: "Coloque el nombre de la persona" });
  }
  if (!puesto) {
    errors.push({ text: "Coloque el puesto de la persona" });
  }
  if (!telefono) {
    errors.push({ text: "Coloque el telefono" });
  }
  if (!correo) {
    errors.push({ text: "Coloque el correo electronico" });
  }
  if (errors.length > 0) {
    res.render("clientes/new-cliente", {
      errors,
      empresa,
      persona,
      puesto,
      telefono,
      correo
    });
  } else {
    const newCliente = new Cliente({  empresa, persona, puesto, telefono, correo });
    newCliente.user = req.user.id;
    await newCliente.save();
    req.flash("success_msg", "Cliente agregado correctamente");
    res.redirect("/clientes");
  }
};

clientesCtrl.renderClientes = async (req, res) => {
  const clientes = await Clientes.find().sort({ date: "desc" });
  res.render("clientes/new-cliente", { clientes });
};

clientesCtrl.renderEditForm = async (req, res) => {
  const cliente = await Clientes.findById(req.params.id);
  if (cliente.user != req.user.id) {
    req.flash("error_msg", "No autorizado");
    return res.redirect("/clientes");
  }
  res.render("clientes/edit-clientes", { clientes });
};

clientesCtrl.updateClientes = async (req, res) => {
  const { empresa, persona, puesto, telefono, correo } = req.body;
  await cliente.findByIdAndUpdate(req.params.id, { empresa, persona, puesto, telefono, correo });
  req.flash("success_msg", "Cliente Actualizado Correctamente");
  res.redirect("/clientes");
};

clientesCtrl.deleteNote = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Cliente Eliminado");
  res.redirect("/clientes");
};

module.exports = clientesCtrl;
