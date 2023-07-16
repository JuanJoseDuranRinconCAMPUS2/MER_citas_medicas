# 💉🩺✨**CitasNodeExpress**💉🩺

Este es un proyecto de API que permite gestionar las bases de datos de una clínica en la cual se busca poder manejar la informacion de la misma para realizar diferentes consultas para facilitar el trabajo de la clinica. La API está construida utilizando Node.js, Express y MySQL para la base de datos.

## **🛠️Apartados del Proyecto🛠️**

[TOC]

## 💉**Funciones de los EndPoints**💉 

- [x] Obtener todos los pacientes alfabéticamente

- [x] Obtener todas las citas por fechas

- [x] Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**)

- [x] Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**)

- [x] Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)

- [x] Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)

- [x] Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)

- [x] Obtener los médicos y sus consultorios

- [x] Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)

- [x] Obtener los consultorio donde se aplicó las citas de un paciente (por ejemplo, el paciente con **usu_id 1**)

- [x] Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendida

- [x] Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.

- [x] Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.

## **💫Requisitos Previos💫**

1. Node.js instalado en tu máquina.
2. Una base de datos MySQL disponible.

## **🎉Instalación🎉**

1. Clona este repositorio en tu máquina: `git clone https://github.com/JuanJoseDuranRinconCAMPUS2/citasNodeExpress`

2. Accede al directorio del proyecto: `cd citasNodeExpress`

3. Accede a la carpeta de backend: `cd backend`

4. Instala las dependencias:

   **Dependencias usadas**

   - Nodemon

     `npm i -E -D nodemon`

   - Dotenv

     `npm i -E -D dotenv`

   - Express

     `npm i -E -D express`

   - Mysql2

     `npm i -E -D mysql2`

   - Class-transformer

     `npm i -E -D class-transformer`

   - Reflect-metadata

     `npm i -E -D reflect-metadata`

   - Typescript

     `npm i -E -D typescript`

## **🏁Configuración**🏁

1. Crea un archivo `.env` en el directorio raíz del proyecto.

2. Dentro del archivo `.env`, define las siguientes variables de entorno:

   - `host`: dirección del host de la base de datos.
   - `user`: nombre de usuario de la base de datos.
   - `password`: contraseña del usuario de la base de datos.
   - `database`: nombre de la base de datos.
   - `port`: dirección del puerto de la base de datos.
   - `hostname`: dirección del puerto de la api.
   - `port`: dirección del puerto de la api.

   **Estructura:**

   `MY_CONFIG={"hostname": "127.9.0.198", "port":5509}` 

   `MY_CONNECT={"host":"", "user":"", "database": "", "password": "", "port" : }`

   Reemplaza `host`, `user`, `database`, `password` y `port` con los datos de tu base de datos MySQL.

## **⚜️Uso⚜️**

1. Inicia el servidor:
2. `npm run dev`
3. Accede a `http://127.9.0.198:5009` para interactuar con la API.
4. Si no tiene la base de datos creada, use el archivo "db_consultorio_medico.sql" para crearla y si ya existe inyéctale los datos de las tablas del archivo "data.sql" para el buen funcionamiento de los endpoints

***(A la base de datos se le adiciono una fila en el apartado de usuarios para las edades para poder realizar el endpoint de post de pacientes por edad)***

## **💮Rutas💮**

Accede a la API utilizando las siguientes rutas:

### 💊/getPacientes💊

**`GET /getPacientes`**: El EndPoint `/getPacientes` proporciona una lista de pacientes ordenados alfabéticamente. Este EndPoint se comunica con la base de datos para recuperar la información de los pacientes y los devuelve en orden alfabético por su nombre.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getPacientes
```

### 🩼/getCitas🩼

**`GET /getCitas`**: Esta es una API que permite obtener todas las citas médicas ordenadas por fechas. La API está diseñada para recuperar citas médicas según la fecha de forma descendente.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getPacientes
```

### 🩺/getMedicoEsp🩺

**`GET /getMedicoEsp`**: Obtiene todos los médicos de una especialidad específica

**Ejemplo de uso**

```
http://127.9.0.198:5509/getMedicoEsp?especialidad=Dermatología
```

Este endpoint permite obtener todos los médicos que pertenecen a una especialidad específica. Se debe proporcionar el parámetro `especialidad` en la URL para indicar la especialidad deseada. Retorna un arreglo JSON con la información de los médicos que tienen la especialidad indicada.

### 🫙/getCitaPaciente🫙

**`GET /getCitaPaciente`**: Este endpoint permite obtener la próxima cita para un paciente específico identificado por el parámetro `usuId`. Retorna un objeto JSON con la información de la próxima cita.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getCitaPaciente?usuId=15
```

Se debe proporcionar el parámetro `usuId` en la URL para indicar el paciente deseado. Retorna un arreglo JSON con la información de las citas que tienen el paciente indicada.

### 🥽/getPacienteMed🥽

**`GET /getPacienteMed`**: Este endpoint permite encontrar todos los pacientes que tienen citas con un médico específico  identificado por el parámetro `medicoId`. Retorna un objeto JSON con la información del paciente.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getPacienteMed?medicoId=10
```

Se debe proporcionar el parámetro `medicoId` en la URL para indicar el medico deseado. Retorna un arreglo JSON con la información de las pacientes que tienen el medico indicado.

### ⚗️/getConsultorioPaciente⚗️

**`GET /getConsultorioPaciente`**: Este endpoint  obtiene las consultorías para un paciente específico  identificado por el parámetro `pacienteId`. Retorna un objeto JSON con la información del consultorio.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getConsultorioPaciente?pacienteId=13
```

Se debe proporcionar el parámetro `pacienteId` en la URL para indicar la el paciente deseado. Retorna un arreglo JSON con la información de los consultorios que tienen el paciente indicado.

### 🪄/getCitaDates🪄

**`GET /getCitaDates`**: Este endpoint  permite encontrar todas las citas para una fecha en específico `citaFecha`. Retorna un objeto JSON con la información de las citas.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getCitaDates?citaFecha=2023-07-20
```

Se debe proporcionar el parámetro `citaFecha` en la URL para indicar la fecha deseada. Retorna un arreglo JSON con la información de las citas que tienen en la fecha indicada.

### 🪷/getMedicoConst🪷

**`GET /getMedicoConst`**: Este endpoint  permite obtener los médicos y sus consultorios. Retorna un objeto JSON con la información de las ambos.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getMedicoConst
```

### 🩺/getNumCita🩺

**`GET /getNumCita`**: Este endpoint  permite contar el número de citas que un médico tiene en un día específico. Retorna un objeto JSON con el numero de las cita que cumplen con esa condición.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getNumCita
```

**En el cuerpo de la solicitud, incluye la siguiente data en formato JSON:**

```json
{
  	"medicoId" : 2,
  	"citaFecha" : "2023-02-13"
}
```

### ⚙️/getCitaGenero⚙️

**`GET /getCitaGenero`**: Este endpoint  permite  obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendida, el genero representado por el parámetro `genero`. Retorna un objeto JSON con la información de las citas.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getCitaGenero?genero=Hombre
```

Se debe proporcionar el parámetro `genero` en la URL para indicar el genero. Retorna un arreglo JSON con la información de las citas que están atendidas con el genero indicado.

### 💮/postPaciente💮

**`POST /postPaciente`**: Este endpoint  permite insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente. Retorna un string con la siguiente información "Paciente registrado exitosamente".

**Ejemplo de uso**

```
http://127.9.0.198:5509/postPaciente
```

**En el cuerpo de la solicitud, incluye la siguiente data en formato JSON:**

```json
{
  	"PrimerNombre_P"  : "Maria",
  	"SegundoNombre_P"  : "Antolinez",
  	"PrimerApellido_P"  : "Duran",
  	"SegundoApellido_P"  : "Hernandez",
  	"edad_P" : 13,
  	"telefono_P"  : "324234234",
  	"dirrecion_P"  : "Carrera 234 avenida C",
  	"correo_P"  : "Maria@gmail.com",
  	"tipo_Documento_P"  : "Cedula de Ciudadania",
  	"genero_P"  : "Hombre",
  	"nombreCompleto_Acu" : "roberto Mendoza",
  	"telefono_Acu" : "3434343434",
  	"direccion_Acu"  : "carrera 234, avenida C"
}
```

### 🏹/getCitaRechazada🏹

**`GET /getCitaRechazada`**: Este endpoint  permite mostrar todas las citas que fueron rechazadas y en un mes específico `mes`, mostrando la fecha de la cita, el nombre del usuario y el médico una fecha. Retorna un objeto JSON con la información de las citas.

**Ejemplo de uso**

```
http://127.9.0.198:5509/getCitaRechazada?mes=7
```

Se debe proporcionar el parámetro `mes` en la URL para indicar el numero del mes deseado. Retorna un arreglo JSON con la información de las citas que tienen en el mes indicado.

## **🌌Contribución🌌**

Si deseas contribuir a este proyecto, siéntete libre de abrir una solicitud de extracción (pull request) o informar cualquier problema que encuentres.

## **😶‍🌫️Licencias😶‍🌫️**

Este proyecto está licenciado bajo la [Licencia MIT](https://github.com/JuanJoseDuranRinconCAMPUS2/bodegasNodeExpress/blob/main/LICENSE).

¡Gracias por visitar mi proyecto!