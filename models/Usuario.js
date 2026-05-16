import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [100, 'El nombre no puede superar 100 caracteres']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'El correo no tiene un formato válido']
    },
    telefono: {
        type: String,
        trim: true,
        match: [/^\+?[\d\s\-()]{7,20}$/, 'El teléfono no tiene un formato válido']
    },
    direccion: {
        type: String,
        trim: true,
        maxlength: [200, 'La dirección no puede superar 200 caracteres']
    },
    tipo_usuario: {
        type: String,
        required: [true, 'El tipo de usuario es obligatorio'],
        enum: {
            values: ['donador', 'receptor', 'admin'],
            message: 'tipo_usuario debe ser donador, receptor o admin'
        }
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
        select: false
    }
}, {
    // Specify the exact collection name in MongoDB to avoid Mongoose pluralizing it to 'usuarios'
    collection: 'Usuario',
    versionKey: false // Don't add __v field
});

// Hash password before saving
usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

usuarioSchema.methods.verificarPassword = function (candidato) {
    return bcrypt.compare(candidato, this.password);
};

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
