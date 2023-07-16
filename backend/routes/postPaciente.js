import dotenv from 'dotenv';
import mysql from 'mysql2';
import proxyPPaciente from '../middleware/proxyPPaciente.js';
import {Router} from 'express';
const PPaciente = Router();
dotenv.config();
let con = undefined;
PPaciente.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
PPaciente.post('/', proxyPPaciente, (req,res)=>{
    const { primerNombre, segundoNombre, primerApellido, segundoApellido, edad, telefono, direccion, correo, tipoDocumento, genero, nombreAcudiente, telefonoAcudiente, direccionAcudiente} = req.body;
    con.query(
        /*SQL*/`SELECT gen_id, tipdoc_id FROM genero AS g, tipo_documento AS td WHERE g.gen_nombre = '${genero}' AND td.tipdoc_nombre = '${tipoDocumento}';`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = 'El genero ingresado o el tipo de documento no son validos recuerda, los generos registrados son: [Hombre, Mujer,No binario,Otro] y los tipo de documentos registrados son: [Cedula de Ciudadania, Tarjeta de Identidad, Pasaporte,Registro Civil]';
                res.status(500).send(errorMessage);
            } else {
                switch (true) {
                    case edad > 18:
                        con.query(
                            /*SQL*/`INSERT INTO usuario (usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_edad, usu_telefono, usu_direccion, \`usu-e-mail\`, usu_tipodoc, usu_genero, usu_acudiente)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL);`,
                            [primerNombre, segundoNombre, primerApellido, segundoApellido, edad, telefono, direccion, correo, data[0].tipdoc_id, data[0].gen_id],
                            (err,data2,fil)=>{
                                if (err) {
                                    const errorMessage = `Error al guardar la data`;
                                    res.status(500).send(err);
                                } else {
                                    res.send("Paciente registrado exitosamente");
                                }
                            }
                        );
                      break;
                    default:
                        con.query(
                            /*SQL*/`SELECT acu_codigo FROM acudiente WHERE acu_nombreCompleto = '${nombreAcudiente}'`,
                            (err,data2,fil)=>{
                                if (data2.length == 0) {
                                    con.query(
                                        /*SQL*/`INSERT INTO acudiente (acu_nombreCompleto, acu_telefono, acu_direccion)
                                        VALUES (?, ?, ?);`,
                                        [nombreAcudiente, telefonoAcudiente, direccionAcudiente],
                                        (err,data2,fil)=>{
                                            if (err) {
                                                const errorMessage = `Error al guardar al acudiente`;
                                                res.status(500).send(err);
                                            } else {
                                                con.query(
                                                    /*SQL*/`SELECT acu_codigo FROM acudiente WHERE acu_nombreCompleto = '${nombreAcudiente}'`,
                                                    (err,data2,fil)=>{
                                                        con.query(
                                                            /*SQL*/`INSERT INTO usuario (usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_edad, usu_telefono, usu_direccion, \`usu-e-mail\`, usu_tipodoc, usu_genero, usu_acudiente)
                                                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                                                            [primerNombre, segundoNombre, primerApellido, segundoApellido, edad, telefono, direccion, correo, data[0].tipdoc_id, data[0].gen_id, data2[0].acu_codigo],
                                                            (err,data2,fil)=>{
                                                                if (err) {
                                                                    const errorMessage = `Error al guardar la data`;
                                                                    res.status(500).send(err);
                                                                } else {
                                                                    res.send("Paciente registrado exitosamente");
                                                                }
                                                            }
                                                        );
                                                    }
                                                );
                                            }
                                        }
                                    );
                                } else {
                                    con.query(
                                        /*SQL*/`INSERT INTO usuario (usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_edad, usu_telefono, usu_direccion, \`usu-e-mail\`, usu_tipodoc, usu_genero, usu_acudiente)
                                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                                        [primerNombre, segundoNombre, primerApellido, segundoApellido, edad, telefono, direccion, correo, data[0].tipdoc_id, data[0].gen_id, data2[0].acu_codigo],
                                        (err,data2,fil)=>{
                                            if (err) {
                                                const errorMessage = `Error al guardar la data`;
                                                res.status(500).send(err);
                                            } else {
                                                res.send("Paciente registrado exitosamente");
                                            }
                                        }
                                    );
                                }
                            }
                        );
                      break;
                  }
            }
          
            //  const generoID = data[0].gen_id;
            // con.query(
            //     /*SQL*/`SELECT c.* FROM cita c
            //     INNER JOIN usuario u ON c.cit_datosUsuario = u.usu_id
            //     WHERE u.usu_genero = ${generoID} AND c.cit_estadoCita = 1`,
            //     (err,data2,fil)=>{
            //         if (data2.length == 0) {
            //             const errorMessage = `Ninguna persona con el genero ${gender} tiene citas realizadas`;
            //             res.status(500).send(errorMessage);
            //         } else {
            //             data2 = JSON.stringify(data2);
            //             res.send(JSON.parse(data2));
            //         }
            //     }
            // );
        }
    );
})
export default PPaciente;

 