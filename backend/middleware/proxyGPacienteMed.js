import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vGetPacienteMed } from '../controller/vGetPacienteMed.js';

const proxyGPacienteMed = express();
proxyGPacienteMed.use((req, res, next)=>{
    try {
        let data = plainToClass(vGetPacienteMed, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGPacienteMed;