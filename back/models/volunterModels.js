const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const personaSchema = new Schema({
    nombre: {
        type: "string",
        require: true
    },
    apellido: {
        type: "string",
        require: true
    },
    pais: {
        type: "string",
        require: true
    },
    opinion: {
        type: "string",
        require: true
    },
    timestamp: {
        type: "Date",
        default: new Date()
    }
})

const Persona = mongoose.model("persona", personaSchema)

module.exports = Persona;