import dotenv from 'dotenv';
import mysql from 'mysql2';
import proxyGCitaGenero from '../middleware/proxyGCitaGenero.js';
import {Router} from 'express';
const GCitaGenero = Router();
dotenv.config();
let con = undefined;
GCitaGenero.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GCitaGenero.get('/', proxyGCitaGenero, (req,res)=>{
    const { gender } = req.query;
    con.query(
        /*SQL*/`SELECT gen_id FROM genero WHERE gen_nombre = '${gender}'`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = 'El genero ingresada no se encuentra en la base de datos';
                res.status(500).send(errorMessage);
            } 
             const generoID = data[0].gen_id;
            con.query(
                /*SQL*/`SELECT c.* FROM cita c
                INNER JOIN usuario u ON c.cit_datosUsuario = u.usu_id
                WHERE u.usu_genero = ${generoID} AND c.cit_estadoCita = 1`,
                (err,data2,fil)=>{
                    if (data2.length == 0) {
                        const errorMessage = `Ninguna persona con el genero ${gender} tiene citas realizadas`;
                        res.status(500).send(errorMessage);
                    } else {
                        data2 = JSON.stringify(data2);
                        res.send(JSON.parse(data2));
                    }
                }
            );
        }
    );
})
export default GCitaGenero;