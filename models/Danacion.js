import mongoose from 'mongoose';

const danacionSchema = new mongoose.Schema({
    donadorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El donador es obligatorio']
    },
    utilId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Util',
        required: [true, 'El útil donado es obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad es obligatoria'],
        min: [1, 'La cantidad debe ser al menos 1'],
        validate: {
            validator: Number.isInteger,
            message: 'La cantidad debe ser un número entero'
        }
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria'],
        default: Date.now
    }
}, {
    collection: 'Danaciones', // spelled exactly as in the DB
    versionKey: false
});

const Danacion = mongoose.model('Danacion', danacionSchema);

export default Danacion;
