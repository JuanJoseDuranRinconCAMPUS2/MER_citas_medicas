import { Expose, Type, Transform } from "class-transformer";

export class vGetNumCita{
    @Expose({ name: 'medicoId' })
    @Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return Math.floor(value);
        else
            throw { status: 400, message: `La medicoId no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, 
    { toClassOnly: true })
    medicoID: number;
    @Expose({ name: 'citaFecha' })
    @Transform(({ value }) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(value)) {
          throw {
            status: 400,
            message: `El formato de fecha ingresado no es válido. Debe seguir el formato "YYYY-MM-DD".`
          };
        }
        return value;
    }, 
    { toClassOnly: true })
    citaDATE: Date;

    constructor( medicoID : number, citaDATE : Date){
        this.medicoID = medicoID;
        this.citaDATE = citaDATE;
    }
}