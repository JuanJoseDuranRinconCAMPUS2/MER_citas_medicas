import dotenv from 'dotenv';
import express from 'express';
import Gpacientes from './routes/getPacientes.js';
import Gcitas from './routes/getCitas.js';
import GMedicoEs from './routes/getMedicoEs.js';
import GCitaPaciente from './routes/getCitasPaciente.js';
import GPacienteMed from './routes/getPacienteMed.js';
console.clear();
dotenv.config();
const appExpress = express();
appExpress.use(express.json());
appExpress.use("/getPacientes", Gpacientes);
appExpress.use("/getCitas", Gcitas);
appExpress.use("/getMedicoEsp", GMedicoEs);
appExpress.use("/getCitaPaciente", GCitaPaciente);
appExpress.use("/getPacienteMed", GPacienteMed);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})