import { Expose, Type, Transform } from "class-transformer";

export class vGetMedicoEsp{
    @Expose({ name: 'especialidad' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 20);
        else
            throw { status: 400, message: `La especialidad no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    specialty: string;

    constructor( specialty : string){
        this.specialty = specialty;
    }
}