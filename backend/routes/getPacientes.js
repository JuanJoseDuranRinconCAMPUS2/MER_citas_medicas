import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
const Gpacientes = Router();
dotenv.config();
let con = undefined;
Gpacientes.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
Gpacientes.get('/', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM usuario ORDER BY usu_nombre, usu_segdo_nombre ASC;`,
        (err,data,fil)=>{
            data = JSON.stringify(data);
            res.send(JSON.parse(data));
        }
    );
})
export default Gpacientes;