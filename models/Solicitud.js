import mongoose from 'mongoose';

const solicitudSchema = new mongoose.Schema({
    institucionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institucion',
        required: [true, 'La institución es obligatoria']
    },
    utilId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Util',
        required: [true, 'El útil solicitado es obligatorio']
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
    collection: 'Solicitudes',
    versionKey: false
});

const Solicitud = mongoose.model('Solicitud', solicitudSchema);

export default Solicitud;
