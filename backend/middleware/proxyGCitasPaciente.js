import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vGetCitaPaciente } from '../controller/vGetCitaPaciente.js';


const proxyGCitaPaciente = express();
proxyGCitaPaciente.use((req, res, next)=>{
    try {
        let data = plainToClass(vGetCitaPaciente, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGCitaPaciente;