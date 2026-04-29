import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import route files
import usuariosRoutes from './routes/usuarios.js';
import solicitudesRoutes from './routes/solicitudes.js';
import danacionesRoutes from './routes/danaciones.js';
import institucionesRoutes from './routes/instituciones.js';
import utilesRoutes from './routes/utiles.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

// Middleware to parse JSON requests
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
    res.send('Server is running and connected to MongoDB');
});

// Use routes
app.use('/usuarios', usuariosRoutes);
app.use('/solicitudes', solicitudesRoutes);
app.use('/danaciones', danacionesRoutes);
app.use('/instituciones', institucionesRoutes);
app.use('/utiles', utilesRoutes);

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB database successfully!');
        
        // Start the server only after connecting to the database
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
