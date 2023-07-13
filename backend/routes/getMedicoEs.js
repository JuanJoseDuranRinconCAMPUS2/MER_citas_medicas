import dotenv from 'dotenv';
import mysql from 'mysql2';
import proxyGMedicoEsp from '../middleware/proxyGMedicoEsp.js';
import {Router} from 'express';
const GMedicoEs = Router();
dotenv.config();
let con = undefined;
GMedicoEs.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GMedicoEs.get('/', proxyGMedicoEsp, (req,res)=>{
    const { specialty } = req.query;
    con.query(
        /*SQL*/`SELECT esp_id FROM especialidad WHERE esp_nombre = '${specialty}'`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = 'Especialidad ingresada no se encuentra en la base de datos';
                res.status(500).send(errorMessage);
            } 
             const idEsp = data[0].esp_id;
            con.query(
                /*SQL*/`SELECT * FROM medico WHERE med_especialidad = '${idEsp}'`,
                (err,data2,fil)=>{
                    if (data2.length == 0) {
                        const errorMessage = `Ningun medico registrado tiene la especialidad de ${specialty}`;
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
export default GMedicoEs;