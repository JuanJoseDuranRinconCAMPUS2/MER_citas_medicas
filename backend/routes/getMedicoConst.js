import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
const GMedicoConst = Router();
dotenv.config();
let con = undefined;
GMedicoConst.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GMedicoConst.get('/', (req,res)=>{
    con.query(
        /*SQL*/`SELECT m.med_nroMatriculaProsional, m.med_nombreCompleto, c.cons_nombre AS consultorio_nombre
            FROM medico m
            INNER JOIN consultorio c ON m.med_consultorio = c.cons_codigo`,
        (err,data,fil)=>{
            data = JSON.stringify(data);
            res.send(JSON.parse(data));
        }
    );
})
export default GMedicoConst;