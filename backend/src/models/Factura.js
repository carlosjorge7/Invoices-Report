const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const factura = new Schema({
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    consumo: { type: String, required: true },
    precio: { type: String, required: true },
    coste: { type: String, required: true }
});

module.exports = mongoose.model('Factura', factura);