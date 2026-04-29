# Base de Datos de Donaciones - Backend

Este proyecto es el backend para una aplicación de gestión de donaciones, desarrollado como parte del curso de **Base de Datos Multimedia** de la **UNAD** (Universidad Nacional Abierta y a Distancia). 

Está construido utilizando **Node.js**, **Express**, y se conecta a una base de datos **MongoDB** (en Atlas) a través de la librería **Mongoose**.

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework para la creación de la API REST.
- **MongoDB**: Base de datos NoSQL para el almacenamiento de información.
- **Mongoose**: Modelado de objetos de MongoDB para Node.js.
- **Dotenv**: Gestión de variables de entorno.
- **Nodemon**: Herramienta de desarrollo que reinicia automáticamente el servidor al detectar cambios.

## Estructura de la API (Rutas)
La API REST expone operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las diferentes colecciones de la base de datos (`DonacionesDB`):

* **Usuarios** (`/usuarios`): Gestión de usuarios, donadores y roles.
* **Instituciones** (`/instituciones`): Gestión de las organizaciones que reciben y solicitan ayudas.
* **Útiles** (`/utiles`): Catálogo o inventario de los recursos y artículos disponibles/necesarios.
* **Solicitudes** (`/solicitudes`): Peticiones de recursos creadas por las instituciones.
* **Donaciones** (`/danaciones`): Registro de los aportes realizados por los donadores.

## Instrucciones para Ejecutar Localmente

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/elianismedina/bdDonacionesMongoDBUNAD.git
   cd bdDonacionesMongoDBUNAD
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno:**
   Crea un archivo llamado `.env` en la raíz del proyecto y agrega tus credenciales:
   ```env
   PORT=8000
   MONGO_URL="mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/DonacionesDB?appName=ClusterDonaciones"
   ```

4. **Iniciar el servidor:**
   ```bash
   npm start
   ```
   El servidor arrancará en el puerto 8000. Puedes acceder a las rutas usando `http://localhost:8000`.
