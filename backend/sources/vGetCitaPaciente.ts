import { Expose, Type, Transform } from "class-transformer";

export class vGetCitaPaciente{
    @Expose({ name: 'usuId' })
    @Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return Math.floor(value);
        else
            throw { status: 400, message: `La usuId no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, 
    { toClassOnly: true })
    usuarioID: number;

    constructor( usuarioID : number){
        this.usuarioID = usuarioID;
    }
}