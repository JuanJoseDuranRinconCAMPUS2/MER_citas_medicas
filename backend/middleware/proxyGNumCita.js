import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vGetNumCita } from '../controller/vGetNumCita.js';


const proxyGNumCita = express();
proxyGNumCita.use((req, res, next)=>{
    try {
        let data = plainToClass(vGetNumCita, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGNumCita;