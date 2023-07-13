
/* Creacion de la base de datos */

CREATE DATABASE db_consultorio_medico;

/* Seleccionamos la base de datos */

USE db_consultorio_medico;

/* creacion de la tabla de especialidad */

CREATE TABLE especialidad(
    esp_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de la especialiad',
    esp_nombre VARCHAR(20) NOT NULL COMMENT'nombre de la especialidad'
);

/* creacion de la tabla de consultorio */

CREATE TABLE consultorio(
    cons_codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del consultorio',
    cons_nombre VARCHAR(50) NOT NULL COMMENT'nombre del consultorio'
);

/* creacion de la tabla de medico */

CREATE TABLE medico(
    med_nroMatriculaProsional INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'numero de la matricula profesional del medico',
    med_nombreCompleto VARCHAR(120) NOT NULL COMMENT'nombre del medico',
    med_consultorio INT UNSIGNED NOT NULL COMMENT'id del consultorio asignado del medico',
    med_especialidad INT UNSIGNED NOT NULL COMMENT'id del la especialidad del medico'
);

/* creacion de la tabla de tipo_documento */

CREATE TABLE tipo_documento(
    tipdoc_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del tipo de documento',
    tipdoc_nombre VARCHAR(20) NOT NULL COMMENT'Nombre del tipo de documento',
    tipdoc_abreviatura VARCHAR(20) NOT NULL COMMENT'Abreviatura del tipo de documento'
);

/* creacion de la tabla de genero */

CREATE TABLE genero(
    gen_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del genero del usuario',
    gen_nombre VARCHAR(20) NOT NULL COMMENT'Nombre del genero del usuario',
    gen_abreviatura VARCHAR(20) NOT NULL COMMENT'Abreviatura del genero del usuario'
);

/* creacion de la tabla de acudiente */

CREATE TABLE acudiente(
    acu_codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del acudiente perteneciente usuario',
    acu_nombreCompleto VARCHAR(100) NOT NULL COMMENT'Nombre completo del acudiente',
    acu_telefono VARCHAR(100) NOT NULL COMMENT'telefono del acudiente',
    acu_direccion VARCHAR(200) COMMENT'dirrecion del acudiente'

);

/* creacion de la tabla de usuario */

CREATE TABLE usuario(
    usu_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del usuario',
    usu_nombre VARCHAR(50) NOT NULL COMMENT'Primer nombre del usuario',
    usu_segdo_nombre VARCHAR(45) COMMENT'Segundo nombre del usuario',
    usu_primer_apellido_usuar VARCHAR(50) NOT NULL COMMENT'Primer apellido del usuario',
    usu_segdo_apellido_usuar VARCHAR(50) NOT NULL COMMENT'segundo apellido del usuario',
    usu_edad INT UNSIGNED NOT NULL COMMENT 'Edad del usuario',
    usu_telefono VARCHAR(50) NOT NULL COMMENT'telefono del usuario',
    usu_direccion VARCHAR(100) NOT NULL COMMENT'direccion del usuario',
    `usu-e-mail` VARCHAR(100) COMMENT'email del usuario',
    usu_tipodoc INT UNSIGNED NOT NULL COMMENT'id del tipo de documento del usuario',
    usu_genero INT UNSIGNED NOT NULL COMMENT'id del genero del usuario',
    usu_acudiente INT UNSIGNED COMMENT'id del acudiente del usuario'
);

/* creacion de la tabla de especialidad */

CREATE TABLE estado_cita(
    estcita_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del estado de la cita',
    estcita_nombre VARCHAR(20) NOT NULL COMMENT'nombre del estado de la cita'
);

/* creacion de la tabla de cita */

CREATE TABLE cita(
    cit_codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de la cita',
    cit_fecha DATE NOT NULL COMMENT'Fecha de la cita',
    cit_estadoCita INT UNSIGNED NOT NULL COMMENT'id del estado de la cita',
    cit_medico INT UNSIGNED NOT NULL COMMENT'id del medico encargado de la cita',
    cit_datosUsuario INT UNSIGNED NOT NULL COMMENT'id de los datos del usuario de la cita'
);

/*Creacion de las relaciones entre la tabla medico con especialidad*/

ALTER TABLE medico ADD CONSTRAINT  medico_especialidad_fk FOREIGN KEY(med_especialidad) REFERENCES especialidad(esp_id);

/*Creacion de las relaciones entre la tabla medico con consultorio*/

ALTER TABLE medico ADD CONSTRAINT  medico_consultorio_fk FOREIGN KEY(med_consultorio) REFERENCES consultorio(cons_codigo);

/*Creacion de las relaciones entre la tabla usuario con tipo_documento*/

ALTER TABLE usuario ADD CONSTRAINT  usuario_tipo_documento_fk FOREIGN KEY(usu_tipodoc) REFERENCES tipo_documento(tipdoc_id);

/*Creacion de las relaciones entre la tabla usuario con genero*/

ALTER TABLE usuario ADD CONSTRAINT  usuario_genero_fk FOREIGN KEY(usu_genero) REFERENCES genero(gen_id);

/*Creacion de las relaciones entre la tabla usuario con acudiente*/

ALTER TABLE usuario ADD CONSTRAINT  usuario_acudiente_fk FOREIGN KEY(usu_acudiente) REFERENCES acudiente(acu_codigo);

/*Creacion de las relaciones entre la tabla cita con estado_cita*/

ALTER TABLE cita ADD CONSTRAINT  cita_estado_cita_fk FOREIGN KEY(cit_estadoCita) REFERENCES estado_cita(estcita_id);

/*Creacion de las relaciones entre la tabla cita con usuario*/

ALTER TABLE cita ADD CONSTRAINT  cita_usuario_fk FOREIGN KEY(cit_datosUsuario) REFERENCES usuario(usu_id);

/*Creacion de las relaciones entre la tabla cita con medico*/

ALTER TABLE cita ADD CONSTRAINT  cita_medico_fk FOREIGN KEY(cit_medico) REFERENCES medico(med_nroMatriculaProsional);


