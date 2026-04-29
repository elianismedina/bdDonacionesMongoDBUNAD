import mongoose from 'mongoose';

const institucionSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String },
    telefono: { type: String },
    contacto: { type: String }
}, {
    collection: 'Instituciones',
    versionKey: false
});

const Institucion = mongoose.model('Institucion', institucionSchema);

export default Institucion;
