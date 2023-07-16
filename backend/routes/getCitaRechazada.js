import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
import proxyGCitaRechazada from '../middleware/proxyGCitaRechazada.js';
const GCitaRechazada = Router();
dotenv.config();
let con = undefined;
GCitaRechazada.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GCitaRechazada.get('/', proxyGCitaRechazada, (req,res)=>{
    const { Numero_Mes } = req.query;
    con.query(
        /*SQL*/`SELECT c.cit_fecha, u.usu_nombre, m.med_nombreCompleto
            FROM cita c
            INNER JOIN usuario u ON c.cit_datosUsuario = u.usu_id
            INNER JOIN medico m ON c.cit_medico = m.med_nroMatriculaProsional
            WHERE c.cit_estadoCita = 3 AND MONTH(c.cit_fecha) = ${Numero_Mes}`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = 'El mes ingresado no cuenta con pacientes con citas rechazadas';
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})
export default GCitaRechazada;