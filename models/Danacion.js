import mongoose from 'mongoose';

const danacionSchema = new mongoose.Schema({
    donadorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    utilId: { type: mongoose.Schema.Types.ObjectId, ref: 'Util', required: true },
    cantidad: { type: Number, required: true },
    fecha: { type: String }
}, {
    collection: 'Danaciones', // spelled exactly as in the DB
    versionKey: false
});

const Danacion = mongoose.model('Danacion', danacionSchema);

export default Danacion;
