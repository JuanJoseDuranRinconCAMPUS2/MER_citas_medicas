import dotenv from 'dotenv';
import mysql from 'mysql2';
import proxyGCitasDate from '../middleware/proxyGCitasDate.js';
import {Router} from 'express';
const GCitaDate= Router();
dotenv.config();
let con = undefined;
GCitaDate.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GCitaDate.get('/', proxyGCitasDate, (req,res)=>{
    const { citaDATE } = req.query;
    con.query(
        /*SQL*/`SELECT * FROM cita WHERE cit_fecha = '${citaDATE}'`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = `Ninguna cita registrada esta agendada para esta fecha:${citaDATE}`;
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})
export default GCitaDate;