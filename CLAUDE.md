# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Start dev server with nodemon (auto-reload) on PORT 8000
```

No test suite is configured. Use the Postman collection (`Donaciones_Postman_Collection.json`) to test API endpoints manually.

## Environment Setup

Requires a `.env` file in the project root with:
```
PORT = 8000
MONGO_URL = "mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/DonacionesDB?appName=<app>"
```

## Architecture

Express.js + Mongoose REST API connecting to MongoDB Atlas. Entry point is `index.js`, which registers routes and establishes the database connection.

**Collections and models** (`models/`):
- `Usuario` — donors (nombre, correo, telefono, direccion, tipo_usuario)
- `Institucion` — recipient institutions (nombre, direccion, telefono, contacto)
- `Util` — donatable items (nombre_util, descripcion, cantidad)
- `Danacion` — donation records; references `Usuario` (donadorId) and `Util` (utilId)
- `Solicitud` — item requests; references `Institucion` (institucionId) and `Util` (utilId)

**Routes** (`routes/`) follow a uniform CRUD pattern for all five resources at `/usuarios`, `/instituciones`, `/utiles`, `/danaciones`, `/solicitudes`. GET endpoints on `Danacion` and `Solicitud` use `.populate()` to resolve references.

Uses ES module syntax (`import`/`export`) — `package.json` has `"type": "module"`.
