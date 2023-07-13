import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
const Gcitas = Router();
dotenv.config();
let con = undefined;
Gcitas.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
Gcitas.get('/', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM cita ORDER BY cit_fecha DESC;`,
        (err,data,fil)=>{
            data = JSON.stringify(data);
            res.send(JSON.parse(data));
        }
    );
})
export default Gcitas;