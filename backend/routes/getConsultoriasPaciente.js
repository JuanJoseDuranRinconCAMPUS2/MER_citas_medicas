import dotenv from 'dotenv';
import mysql from 'mysql2';
import proxyGConsultorioPaciente from '../middleware/proxyGConsultorioPaciente.js';
import {Router} from 'express';
const GConsultorioPaciente = Router();
dotenv.config();
let con = undefined;
GConsultorioPaciente.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})
GConsultorioPaciente.get('/', proxyGConsultorioPaciente, (req,res)=>{
    const { pacienteID } = req.query;
    con.query(
        /*SQL*//*SQL*/`SELECT c.* FROM consultorio c
        INNER JOIN medico m ON c.cons_codigo = m.med_consultorio
        INNER JOIN cita ci ON m.med_nroMatriculaProsional = ci.cit_medico
        WHERE ci.cit_datosUsuario = ${pacienteID}`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = 'El paciente ingresado no tiene ningun consultorio vinculados';
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})
export default GConsultorioPaciente;