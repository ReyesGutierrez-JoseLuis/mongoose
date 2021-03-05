const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema(
  {
    empresa: {
      type: String,
      required: true
    },
    persona: {
      type: String,
      required: true
    },
    puesto: {
        type: String,
        required: true
      },
    
      telefono: {
        type: String,
        required: true
      },  
      correo: {
        type: String,
        required: true
      },
    user: {
      type: String,
      required: true
    }
    
  },
  {
    timestamps: true
  }
);

module.exports = model("Cliente", ClienteSchema);

