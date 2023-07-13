import dotenv from 'dotenv';
import express from 'express';
import Gpacientes from './routes/getPacientes.js';
import Gcitas from './routes/getCitas.js';
import GMedicoEs from './routes/getMedicoEs.js';
console.clear();
dotenv.config();
const appExpress = express();
appExpress.use(express.json());
appExpress.use("/getPacientes", Gpacientes);
appExpress.use("/getCitas", Gcitas);
appExpress.use("/getMedicoEsp", GMedicoEs);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})