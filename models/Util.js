import mongoose from 'mongoose';

const utilSchema = new mongoose.Schema({
    nombre_util: {
        type: String,
        required: [true, 'El nombre del útil es obligatorio'],
        trim: true,
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [100, 'El nombre no puede superar 100 caracteres']
    },
    descripcion: {
        type: String,
        trim: true,
        maxlength: [500, 'La descripción no puede superar 500 caracteres']
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad es obligatoria'],
        min: [0, 'La cantidad no puede ser negativa'],
        validate: {
            validator: Number.isInteger,
            message: 'La cantidad debe ser un número entero'
        }
    }
}, {
    collection: 'Utiles',
    versionKey: false
});

const Util = mongoose.model('Util', utilSchema);

export default Util;
