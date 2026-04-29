import mongoose from 'mongoose';

const utilSchema = new mongoose.Schema({
    nombre_util: { type: String, required: true },
    descripcion: { type: String },
    cantidad: { type: Number }
}, {
    collection: 'Utiles',
    versionKey: false
});

const Util = mongoose.model('Util', utilSchema);

export default Util;
