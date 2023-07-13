import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vGetMedicoEsp } from '../controller/vGetMedicoEsp.js';

const proxyGMedicoEsp = express();
proxyGMedicoEsp.use((req, res, next)=>{
    try {
        let data = plainToClass(vGetMedicoEsp, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGMedicoEsp;