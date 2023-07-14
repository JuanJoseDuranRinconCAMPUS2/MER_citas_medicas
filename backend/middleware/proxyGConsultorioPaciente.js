import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vGetConsultorioPaciente } from '../controller/vGetConsultorioPaciente.js';


const proxyGConsultorioPaciente = express();
proxyGConsultorioPaciente.use((req, res, next)=>{
    try {
        let data = plainToClass(vGetConsultorioPaciente, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGConsultorioPaciente;