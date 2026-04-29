import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String },
    direccion: { type: String },
    tipo_usuario: { type: String }
}, {
    // Specify the exact collection name in MongoDB to avoid Mongoose pluralizing it to 'usuarios'
    collection: 'Usuario',
    versionKey: false // Don't add __v field
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
