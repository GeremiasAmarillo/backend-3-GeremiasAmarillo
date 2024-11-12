**_DockerHub_**

    -- https://hub.docker.com/r/geremiasamarillo/adoption/tags --

    --  docker pull geremiasamarillo/adoption:1.0.0 --

# Proyecto de Adopciones

Este es un proyecto backend para un sistema de gestión de adopciones de mascotas.

## Funcionalidades

- **Gestión de Mascotas**: CRUD de mascotas (crear, obtener, actualizar, eliminar).
- **Adopciones**: Los usuarios pueden realizar una adopción de mascotas disponibles.
- **Usuarios**: Registro e inicio de sesión de usuarios, autenticación mediante JWT.
- **Roles de Usuario**: Diferentes niveles de acceso (usuario y administrador).
- **Generación de mocks de mascotas**: Creación de datos ficticios de mascotas para pruebas.

## Tecnologías Utilizadas

- **Node.js**: Plataforma para construir el servidor.
- **Express.js**: Framework web para gestionar las rutas y los middleware.
- **MongoDB**: Base de datos NoSQL para almacenar usuarios, mascotas y adopciones.
- **Mongoose**: ODM para MongoDB, facilitando la interacción con la base de datos.
- **JWT (JSON Web Token)**: Para la autenticación de usuarios.
- **bcryptjs**: Para la encriptación y verificación de contraseñas.
- **Passport.js**: Para la autenticación local y la gestión de sesiones.

## Instalación

### Requisitos

- **Node.js** instalado en tu máquina.
- **MongoDB** funcionando (puede ser en local o en un servicio como MongoDB Atlas).

### Pasos de Instalación

1. Clona este repositorio:

   git clone https://github.com/GeremiasAmarillo/backend-3-GeremiasAmarillo.git

2. Instala las dependencias

   npm intall

3. Inicia la aplicacion

   npm run dev

## Instrucciones de Prueba

_Para ejecutar las pruebas, asegúrate de tener las dependencias instaladas y luego corre el siguiente comando:_

    npm run test

## Problemas Conocidos

- **Problema**: Al intentar registrar un usuario con un correo ya existente, se recibe un error 500.
  **Solución**: Asegúrate de que el correo electrónico no esté previamente registrado en la base de datos.
