import dotenv from 'dotenv';
import mysql from 'mysql2';
import proxyGPacienteMed from '../middleware/proxyGPacienteMed.js';
import {Router} from 'express';
const GPacienteMed = Router();
dotenv.config();
let con = undefined;
GPacienteMed.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GPacienteMed.get('/', proxyGPacienteMed, (req,res)=>{
    const { medicoID } = req.query;
    con.query(
        /*SQL*/`SELECT u.* FROM usuario u
        INNER JOIN cita c ON c.cit_datosUsuario = u.usu_id
        WHERE c.cit_medico = ${medicoID}`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = 'El medico ingresado no tiene pacientes vinculados';
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})
export default GPacienteMed;