import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vGetCitaGenero } from '../controller/vGetCitaGenero.js';


const proxyGCitaGenero = express();
proxyGCitaGenero.use((req, res, next)=>{
    try {
        let data = plainToClass(vGetCitaGenero, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGCitaGenero;