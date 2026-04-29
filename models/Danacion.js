import mongoose from 'mongoose';

const danacionSchema = new mongoose.Schema({
    donador: { type: String, required: true },
    util: { type: String, required: true },
    cantidad: { type: Number, required: true },
    fecha: { type: String }
}, {
    collection: 'Danaciones', // spelled exactly as in the DB
    versionKey: false
});

const Danacion = mongoose.model('Danacion', danacionSchema);

export default Danacion;
