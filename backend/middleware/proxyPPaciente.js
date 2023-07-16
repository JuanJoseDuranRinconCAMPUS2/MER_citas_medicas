import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vPostPaciente } from '../controller/vPostPaciente.js';


const proxyPPaciente = express();
proxyPPaciente.use((req, res, next)=>{
    try {
        let data = plainToClass(vPostPaciente, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status || 500).send(err);
    }
});

export default proxyPPaciente;