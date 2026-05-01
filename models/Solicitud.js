import mongoose from 'mongoose';

const solicitudSchema = new mongoose.Schema({
    institucionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institucion', required: true },
    utilId: { type: mongoose.Schema.Types.ObjectId, ref: 'Util', required: true },
    cantidad: { type: Number, required: true },
    fecha: { type: String } // Storing as String to match whatever format it's currently in, can be Date later
}, {
    collection: 'Solicitudes',
    versionKey: false
});

const Solicitud = mongoose.model('Solicitud', solicitudSchema);

export default Solicitud;
