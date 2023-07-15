import dotenv from 'dotenv';
import express from 'express';
import Gpacientes from './routes/getPacientes.js';
import Gcitas from './routes/getCitas.js';
import GMedicoEs from './routes/getMedicoEs.js';
import GCitaPaciente from './routes/getCitasPaciente.js';
import GPacienteMed from './routes/getPacienteMed.js';
import GConsultorioPaciente from './routes/getConsultoriasPaciente.js';
import GCitaDate from './routes/getCitaDate.js';
import GMedicoConst from './routes/getMedicoConst.js';
import GNumCita from './routes/getNumCita.js';
import GCitaGenero from './routes/getCitaGenero.js';
console.clear();
dotenv.config();
const appExpress = express();
appExpress.use(express.json());
appExpress.use("/getPacientes", Gpacientes);
appExpress.use("/getCitas", Gcitas);
appExpress.use("/getMedicoEsp", GMedicoEs);
appExpress.use("/getCitaPaciente", GCitaPaciente);
appExpress.use("/getPacienteMed", GPacienteMed);
appExpress.use("/getConsultorioPaciente", GConsultorioPaciente);
appExpress.use("/getCitaDates", GCitaDate);
appExpress.use("/getMedicoConst", GMedicoConst);
appExpress.use("/getNumCita", GNumCita);
appExpress.use("/getCitaGenero", GCitaGenero);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})