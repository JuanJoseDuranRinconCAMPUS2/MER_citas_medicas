import { Expose, Type, Transform } from "class-transformer";

export class vGetPacienteMed{
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

    constructor( medicoID : number){
        this.medicoID = medicoID;
    }
}