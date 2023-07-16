import { Expose, Type, Transform } from "class-transformer";

export class vGetCitaRechazada{
    @Expose({ name: 'mes' })
    @Transform(({ value }) => {
        if (Math.floor(value) && value >= 0 && value <= 12)
            return Math.floor(value);
        else
            throw { status: 401, message: `El mes no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales ademas debe ser un numero de 1 a 12` };
    }, 
    { toClassOnly: true })
    Numero_Mes: number;

    constructor( Numero_Mes : number){
        this.Numero_Mes = Numero_Mes;
    }
}