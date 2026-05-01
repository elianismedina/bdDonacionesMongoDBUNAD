import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/Usuario.js';
import Danacion from './models/Danacion.js';
import Institucion from './models/Institucion.js';
import Solicitud from './models/Solicitud.js';
import Util from './models/Util.js';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

async function migrate() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Conectado a MongoDB...');

        // --- MIGRAR DANACIONES ---
        console.log('Migrando Danaciones...');
        const danacionesRaw = await mongoose.connection.db.collection('Danaciones').find({}).toArray();
        
        for (const doc of danacionesRaw) {
            const updates = {};
            
            // Buscar Usuario por nombre si existe el campo 'donador' como string
            if (doc.donador && typeof doc.donador === 'string') {
                const usuario = await Usuario.findOne({ nombre: doc.donador });
                if (usuario) {
                    updates.donadorId = usuario._id;
                } else {
                    console.warn(`Usuario no encontrado para donación: ${doc.donador}`);
                }
            }

            // Buscar Util por nombre si existe el campo 'util' como string
            if (doc.util && typeof doc.util === 'string') {
                const utilDoc = await Util.findOne({ nombre_util: doc.util });
                if (utilDoc) {
                    updates.utilId = utilDoc._id;
                } else {
                    console.warn(`Útil no encontrado para donación: ${doc.util}`);
                }
            }

            if (Object.keys(updates).length > 0) {
                await mongoose.connection.db.collection('Danaciones').updateOne(
                    { _id: doc._id },
                    { 
                        $set: updates,
                        $unset: { donador: "", util: "" } 
                    }
                );
            }
        }

        // --- MIGRAR SOLICITUDES ---
        console.log('Migrando Solicitudes...');
        const solicitudesRaw = await mongoose.connection.db.collection('Solicitudes').find({}).toArray();

        for (const doc of solicitudesRaw) {
            const updates = {};

            // Buscar Institucion por nombre
            if (doc.institucion && typeof doc.institucion === 'string') {
                const inst = await Institucion.findOne({ nombre: doc.institucion });
                if (inst) {
                    updates.institucionId = inst._id;
                } else {
                    console.warn(`Institución no encontrada para solicitud: ${doc.institucion}`);
                }
            }

            // Buscar Util por nombre_util
            if (doc.util_solicitado && typeof doc.util_solicitado === 'string') {
                const utilDoc = await Util.findOne({ nombre_util: doc.util_solicitado });
                if (utilDoc) {
                    updates.utilId = utilDoc._id;
                } else {
                    console.warn(`Útil no encontrado para solicitud: ${doc.util_solicitado}`);
                }
            }

            if (Object.keys(updates).length > 0) {
                await mongoose.connection.db.collection('Solicitudes').updateOne(
                    { _id: doc._id },
                    { 
                        $set: updates,
                        $unset: { institucion: "", util_solicitado: "" } 
                    }
                );
            }
        }

        console.log('Migración completada con éxito.');
        process.exit(0);
    } catch (error) {
        console.error('Error durante la migración:', error);
        process.exit(1);
    }
}

migrate();
