import dotenv from 'dotenv';
import express from 'express';
import Gpacientes from './routes/getPacientes.js';
console.clear();
dotenv.config();
const appExpress = express();
appExpress.use(express.json());
appExpress.use("/getPacientes", Gpacientes);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})