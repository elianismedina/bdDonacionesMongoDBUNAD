# Medidas de Seguridad de la API

A continuación se detallan las medidas de seguridad implementadas en el backend de este proyecto (Node.js/Express) para proteger la integridad de los datos y asegurar las comunicaciones de la API:

## 1. Autenticación y Autorización

**JSON Web Tokens (JWT):** Se utiliza JWT para implementar un sistema de autenticación sin estado (stateless). Una vez que el usuario se autentica correctamente, recibe un token que debe incluir en los encabezados (`Authorization: Bearer <token>`) de las siguientes peticiones.

**Passport.js:** Se implementa `passport` junto con la estrategia `passport-jwt` como middleware para proteger las rutas privadas (`/usuarios`, `/solicitudes`, `/danaciones`, etc.). Cualquier petición sin un token válido es rechazada automáticamente.

**Expiración de Tokens:** Los tokens generados tienen un tiempo de vida limitado (configurado a `8h`), lo que mitiga el riesgo de que un token robado pueda ser utilizado indefinidamente.

## 2. Gestión Segura de Contraseñas

**Hashing Fuerte:** Las contraseñas de los usuarios no se guardan en texto plano. Se utiliza la librería `bcryptjs` para aplicar una función hash a la contraseña antes de guardarla en la base de datos, utilizando un factor de coste de `12` para mayor resistencia contra ataques de fuerza bruta.

**Ocultamiento por Defecto:** En el modelo de Mongoose (`Usuario.js`), el campo `password` está configurado con `select: false`. Esto asegura que al realizar consultas a la base de datos, el hash de la contraseña nunca se envíe accidentalmente en las respuestas de la API.

## 3. Validación y Saneamiento de Datos

**Esquemas Estrictos de Mongoose:** Se validan todos los datos entrantes a nivel de la base de datos. Esto incluye:
    *Campos obligatorios (`required`).
    *Límites de tamaño (`minlength`, `maxlength`) para prevenir ataques de desbordamiento o saturación.
    *Validaciones de formato mediante Expresiones Regulares (Regex) para correos electrónicos y números de teléfono, asegurando que los datos tienen el formato correcto.
    *Valores permitidos exactos mediante `enum` (ej. `tipo_usuario`).

## 4. Gestión de Variables de Entorno y Secretos

**Uso de `dotenv`:** Las credenciales y claves sensibles, como la cadena de conexión a MongoDB (`MONGO_URL`) y la clave secreta para firmar los tokens JWT (`JWT_SECRET`), no están "hardcodeadas" en el código fuente. Se leen desde un archivo `.env` que, por buenas prácticas, se excluye del control de versiones.

## 5. Manejo Controlado de Errores

*La API devuelve códigos de estado HTTP semánticos (como `400 Bad Request`, `401 Unauthorized`, `409 Conflict`) acompañados de mensajes genéricos que informan al cliente del problema (ej. "Credenciales inválidas" o "El correo ya está registrado") sin revelar detalles internos de la base de datos o de la estructura del backend.
