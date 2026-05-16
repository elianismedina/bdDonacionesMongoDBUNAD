import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import passport from './middleware/passport.js';

// Import route files
import authRoutes from './routes/auth.js';
import usuariosRoutes from './routes/usuarios.js';
import solicitudesRoutes from './routes/solicitudes.js';
import danacionesRoutes from './routes/danaciones.js';
import institucionesRoutes from './routes/instituciones.js';
import utilesRoutes from './routes/utiles.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(passport.initialize());

const auth = passport.authenticate('jwt', { session: false });

// Basic test route
app.get('/', (req, res) => {
    res.send('Server is running and connected to MongoDB');
});

// Swagger UI (public)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Public routes
app.use('/auth', authRoutes);

// Protected routes
app.use('/usuarios', auth, usuariosRoutes);
app.use('/solicitudes', auth, solicitudesRoutes);
app.use('/danaciones', auth, danacionesRoutes);
app.use('/instituciones', auth, institucionesRoutes);
app.use('/utiles', auth, utilesRoutes);

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
