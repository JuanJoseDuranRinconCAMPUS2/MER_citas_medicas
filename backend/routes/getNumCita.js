import dotenv from 'dotenv';
import mysql from 'mysql2';
import proxyGNumCita from '../middleware/proxyGNumCita.js';
import {Router} from 'express';
const GNumCita= Router();
dotenv.config();
let con = undefined;
GNumCita.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GNumCita.get('/', proxyGNumCita, (req,res)=>{
    const { medicoID, citaDATE } = req.body;
    con.query(
        /*SQL*/`SELECT COUNT(*) AS num_citas FROM cita
        WHERE cit_medico = ${medicoID} AND cit_fecha = '${citaDATE}'`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = 'El medico no tiene ninguna cita agendada a esa fecha';
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})
export default GNumCita;