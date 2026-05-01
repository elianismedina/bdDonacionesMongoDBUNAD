import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = "mongodb+srv://grupo:x2n1M8MdsXYZ14Ju@clusterdonaciones.q1r9dwu.mongodb.net/DonacionesDB?appName=ClusterDonaciones";

async function check() {
    try {
        console.log('Usando URL:', MONGO_URL);
        await mongoose.connect(MONGO_URL);
        console.log('--- Inspección de Base de Datos ---');

        console.log('\n[Danaciones - Muestra]');
        const danacion = await mongoose.connection.db.collection('Danaciones').findOne({});
        console.log(JSON.stringify(danacion, null, 2));

        console.log('\n[Solicitudes - Muestra]');
        const solicitud = await mongoose.connection.db.collection('Solicitudes').findOne({});
        console.log(JSON.stringify(solicitud, null, 2));

        console.log('\n--- Análisis de Referencias ---');
        
        if (danacion && danacion.donadorId) {
            const user = await mongoose.connection.db.collection('Usuario').findOne({ _id: danacion.donadorId });
            console.log(`Donación ${danacion._id} -> Usuario ${danacion.donadorId}: ${user ? 'VINCULADO CORRECTAMENTE' : 'VINCULO ROTO'}`);
        }

        if (solicitud && solicitud.institucionId) {
            const inst = await mongoose.connection.db.collection('Instituciones').findOne({ _id: solicitud.institucionId });
            console.log(`Solicitud ${solicitud._id} -> Institución ${solicitud.institucionId}: ${inst ? 'VINCULADO CORRECTAMENTE' : 'VINCULO ROTO'}`);
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

check();
