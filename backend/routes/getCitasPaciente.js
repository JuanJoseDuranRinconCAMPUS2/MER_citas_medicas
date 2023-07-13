import dotenv from 'dotenv';
import mysql from 'mysql2';
import proxyGCitaPaciente from '../middleware/proxyGCitasPaciente.js';
import {Router} from 'express';
const GCitaPaciente = Router();
dotenv.config();
let con = undefined;
GCitaPaciente.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GCitaPaciente.get('/', proxyGCitaPaciente, (req,res)=>{
    const { usuarioID } = req.query;
    con.query(
        /*SQL*/`SELECT * FROM cita WHERE cit_datosUsuario = ${usuarioID}`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = 'El usuario ingresado no se encuentra en la tabla de cita';
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})
export default GCitaPaciente;