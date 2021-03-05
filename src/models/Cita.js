const { Schema, model } = require("mongoose");

const CitaSchema = new Schema(
  {
    Empleado: {
      type: String,
      required: true
    },
    Citado: {
      type: String,
      required: true
    },
    Fecha: {
      type: Date,
      required: true
    },
    Hora: {
        type: Date,
        required: true
      }
  },
  {
    timestamps: true
  }
);

module.exports = model("Cita", CitaSchema);
