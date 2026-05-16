import mongoose from 'mongoose';

const institucionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la institución es obligatorio'],
        trim: true,
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [150, 'El nombre no puede superar 150 caracteres']
    },
    direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
        trim: true,
        maxlength: [200, 'La dirección no puede superar 200 caracteres']
    },
    telefono: {
        type: String,
        trim: true,
        match: [/^\+?[\d\s\-()]{7,20}$/, 'El teléfono no tiene un formato válido']
    },
    contacto: {
        type: String,
        required: [true, 'El nombre del contacto es obligatorio'],
        trim: true,
        maxlength: [100, 'El contacto no puede superar 100 caracteres']
    }
}, {
    collection: 'Instituciones',
    versionKey: false
});

const Institucion = mongoose.model('Institucion', institucionSchema);

export default Institucion;
