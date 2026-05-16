import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Donaciones API',
            version: '1.0.0',
            description: 'API REST para gestión de donaciones - UNAD Base de Datos Multimedia',
        },
        servers: [{ url: 'http://localhost:8000' }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                Usuario: {
                    type: 'object',
                    required: ['nombre', 'correo', 'password', 'tipo_usuario'],
                    properties: {
                        _id: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        nombre: { type: 'string', example: 'Juan Pérez' },
                        correo: { type: 'string', format: 'email', example: 'juan@mail.com' },
                        password: { type: 'string', format: 'password', example: '123456' },
                        telefono: { type: 'string', example: '+57 300 1234567' },
                        direccion: { type: 'string', example: 'Calle 10 # 5-20, Bogotá' },
                        tipo_usuario: { type: 'string', enum: ['donador', 'receptor', 'admin'], example: 'donador' },
                    },
                },
                Institucion: {
                    type: 'object',
                    required: ['nombre', 'direccion', 'contacto'],
                    properties: {
                        _id: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        nombre: { type: 'string', example: 'Cruz Roja Colombiana' },
                        direccion: { type: 'string', example: 'Av. 68 # 66-31, Bogotá' },
                        telefono: { type: 'string', example: '+57 1 4282121' },
                        contacto: { type: 'string', example: 'María González' },
                    },
                },
                Util: {
                    type: 'object',
                    required: ['nombre_util', 'cantidad'],
                    properties: {
                        _id: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        nombre_util: { type: 'string', example: 'Ropa de invierno' },
                        descripcion: { type: 'string', example: 'Abrigos y chaquetas en buen estado' },
                        cantidad: { type: 'integer', minimum: 0, example: 50 },
                    },
                },
                Danacion: {
                    type: 'object',
                    required: ['donadorId', 'utilId', 'cantidad'],
                    properties: {
                        _id: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        donadorId: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        utilId: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        cantidad: { type: 'integer', minimum: 1, example: 10 },
                        fecha: { type: 'string', format: 'date-time' },
                    },
                },
                Solicitud: {
                    type: 'object',
                    required: ['institucionId', 'utilId', 'cantidad'],
                    properties: {
                        _id: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        institucionId: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        utilId: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        cantidad: { type: 'integer', minimum: 1, example: 5 },
                        fecha: { type: 'string', format: 'date-time' },
                    },
                },
                AuthCredentials: {
                    type: 'object',
                    required: ['correo', 'password'],
                    properties: {
                        correo: { type: 'string', format: 'email', example: 'juan@mail.com' },
                        password: { type: 'string', format: 'password', example: '123456' },
                    },
                },
                TokenResponse: {
                    type: 'object',
                    properties: {
                        token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
                    },
                },
                Error: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                    },
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
