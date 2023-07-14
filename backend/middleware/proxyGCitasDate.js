import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { vGetCitaDate } from '../controller/vGetCitaDate.js';


const proxyGCitasDate = express();
proxyGCitasDate.use((req, res, next)=>{
    try {
        let data = plainToClass(vGetCitaDate, req.query, {excludeExtraneousValues: true});
        req.query = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export default proxyGCitasDate;