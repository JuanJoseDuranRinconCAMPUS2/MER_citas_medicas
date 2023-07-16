import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vGetCitaRechazada } from '../controller/vGetCitaRechazada.js';


const proxyGCitaRechazada = express();
proxyGCitaRechazada.use((req, res, next)=>{
    try {
        let data = plainToClass(vGetCitaRechazada, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGCitaRechazada;