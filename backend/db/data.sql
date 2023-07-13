USE db_consultorio_medico;

/* Insercion de data default a la tabla especialidad */
INSERT INTO especialidad (esp_nombre) VALUES
    ('Cardiología'),
    ('Dermatología'),
    ('Gastroenterología'),
    ('Neurología'),
    ('Oftalmología'),
    ('Pediatría'),
    ('Psiquiatría'),
    ('Radiología'),
    ('Traumatología'),
    ('Urología');

/* Insercion de data default a la tabla consultorio */

INSERT INTO consultorio (cons_nombre) VALUES
    ('Consultorio de Cardiología'),
    ('Consultorio de Dermatología'),
    ('Consultorio de Ginecología'),
    ('Consultorio de Neurología'),
    ('Consultorio de Oftalmología'),
    ('Consultorio de Ortopedia'),
    ('Consultorio de Pediatría'),
    ('Consultorio de Psiquiatría'),
    ('Consultorio de Traumatología'),
    ('Consultorio de Urología');

/* Insercion de data default a la tabla medico */

INSERT INTO medico (med_nombreCompleto, med_consultorio, med_especialidad)
VALUES
    ('Dr. Juan Pérez', 1, 1),
    ('Dra. María Gómez', 2, 2),
    ('Dr. Luis Rodríguez', 3, 1),
    ('Dra. Ana López', 4, 3),
    ('Dr. Carlos Martínez', 5, 2),
    ('Dra. Laura Fernández', 6, 3),
    ('Dr. Pedro Ramírez', 7, 1),
    ('Dra. Isabel Torres', 8, 2),
    ('Dr. Andrés García', 9, 3),
    ('Dra. Sofía Medina', 10, 1);

/* Insercion de data default a la tabla tipo_documento */

INSERT INTO tipo_documento (tipdoc_nombre, tipdoc_abreviatura)
VALUES
    ('Cedula de Ciudadania', 'CC'),
    ('Tarjeta de Identidad', 'TI'),
    ('Pasaporte', 'PA'),
    ('Registro Civil', 'RC');

/* Insercion de data default a la tabla genero */

INSERT INTO genero (gen_nombre, gen_abreviatura)
VALUES
    ('Hombre', 'M'),
    ('Mujer', 'F'),
    ('No binario', 'NB'),
    ('Motor de lancha', 'ML'),
    ('Otro', 'Otro');

/* Insercion de data default a la tabla acudiente */

INSERT INTO acudiente (acu_nombreCompleto, acu_telefono, acu_direccion)
VALUES
    ('Juan Pérez', '1234567890', 'Calle 123, Ciudad A'),
    ('María Gómez', '9876543210', 'Avenida XYZ, Ciudad B'),
    ('Pedro Rodríguez', '5555555555', 'Carrera ABC, Ciudad C'),
    ('Laura Torres', '9999999999', 'Calle 456, Ciudad D'),
    ('Carlos Sánchez', '1111111111', 'Avenida QWE, Ciudad E'),
    ('Ana López', '2222222222', 'Carrera ZXC, Ciudad F'),
    ('Luisa Martínez', '3333333333', 'Calle 789, Ciudad G'),
    ('Roberto Herrera', '4444444444', 'Avenida RTY, Ciudad H'),
    ('Sofía Ramírez', '6666666666', 'Carrera FGH, Ciudad I'),
    ('Daniel Castro', '7777777777', 'Calle 246, Ciudad J');

/* Insercion de data default a la tabla usuario */

INSERT INTO usuario (usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_edad, usu_telefono, usu_direccion, `usu-e-mail`, usu_tipodoc, usu_genero, usu_acudiente)
VALUES
    ('Juan', 'Sebastián', 'González', 'Sánchez', 32 , 31546343454, 'Calle 123, Ciudad A', 'juan@example.com', 4, 1, NULL),
    ('María', 'Fernanda', 'López', 'Gómez', 34 , 3012346545, 'Avenida XYZ, Ciudad B', 'maria@example.com', 4, 2, NULL),
    ('Pedro', '', 'Rodríguez', 'Torres', 45 , 3123546523, 'Carrera ABC, Ciudad C', 'pedro@example.com', 4, 1, NULL),
    ('Laura', 'Isabel', 'Torres', 'Pérez', 17 , 3156544356, 'Calle 456, Ciudad D', 'laura@example.com', 5, 2, 4),
    ('Carlos', 'Andrés', 'Sánchez', 'García', 53 , 3107654356, 'Avenida QWE, Ciudad E', 'carlos@example.com', 4, 1, NULL),
    ('Ana', 'María', 'López', 'Hernández', 12 , 3124568787, 'Carrera ZXC, Ciudad F', 'ana@example.com', 5, 2, 6),
    ('Luisa', '', 'Martínez', 'Gómez' , 43 , 3155554343, 'Calle 789, Ciudad G', 'luisa@example.com', 4, 1, NULL),
    ('Roberto', 'José', 'Herrera', 'López' , 25 , 4444444444, 'Avenida RTY, Ciudad H', 'roberto@example.com', 4, 2, NULL),
    ('Sofía', 'Alejandra', 'Ramírez', 'Pérez' , 31 , 6666666666, 'Carrera FGH, Ciudad I', 'sofia@example.com', 4, 1, NULL),
    ('Daniel', '', 'Castro', 'González' , 14 , 7777777777, 'Calle 246, Ciudad J', 'daniel@example.com', 5, 2, 10);

/* Insercion de data default a la tabla estado_cita */

INSERT INTO estado_cita (estcita_nombre) VALUES
    ('Atendido'),
    ('En espera'),
    ('Rechazado')
;

/* Insercion de data default a la tabla cita */

INSERT INTO cita (cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES
    ('2023-07-11', 1, 1, 11),
    ('2023-07-12', 2, 2, 14),
    ('2023-07-13', 1, 3, 13),
    ('2023-07-14', 2, 4, 12),
    ('2023-07-15', 1, 5, 15),
    ('2023-07-16', 2, 6, 15),
    ('2023-07-17', 1, 7, 17),
    ('2023-07-18', 2, 8, 11),
    ('2023-07-19', 1, 9, 19),
    ('2023-07-20', 2, 10, 20);
