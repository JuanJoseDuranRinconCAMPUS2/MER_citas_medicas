import { Expose, Type, Transform } from "class-transformer";

export class vPostPaciente{
    @Expose({ name: 'PrimerNombre_P' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el PrimerNombre_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    primerNombre: string;
    @Expose({ name: 'SegundoNombre_P' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 45);
        else
            throw { status: 400, message: `el SegundoNombre_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    segundoNombre: string;
    @Expose({ name: 'PrimerApellido_P' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el PrimerApellido_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    primerApellido: string;
    @Expose({ name: 'SegundoApellido_P' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el SegundoApellido_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    segundoApellido: string;
    @Expose({ name: 'edad_P' })
    @Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return Math.floor(value);
        else
            throw { status: 400, message: `La edad no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, 
    { toClassOnly: true })
    edad: number;
    @Expose({ name: 'telefono_P' })
    @Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return value;
        else
            throw { status: 400, message: `La telefono_P no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, 
    { toClassOnly: true })
    telefono: string;
    @Expose({ name: 'dirrecion_P' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s\d,]+$/u.test(value))
            return value.substring(0, 100);
        else
            throw { status: 400, message: `La direccion no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    direccion: string;
    @Expose({ name: 'correo_P' })
    @Transform(({ value }) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return value.substring(0, 100);
        else
          throw { status: 400, message: `El correo electrónico no cumple con el formato válido.` };
      }, { toClassOnly: true })      
    correo: string;
    @Expose({ name: 'tipo_Documento_P' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el tipo_Documento_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    tipoDocumento: string;

    @Expose({ name: 'genero_P' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el genero_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    genero: string;
    
    @Expose({ name: 'nombreCompleto_Acu' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 100);
        else
            throw { status: 400, message: `el nombreCompleto_Acu no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    nombreAcudiente: string;

    @Expose({ name: 'telefono_Acu' })
    @Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return value;
        else
            throw { status: 400, message: `El telefono_Acu no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, { toClassOnly: true })
    telefonoAcudiente: string;

    @Expose({ name: 'direccion_Acu' })
    @Transform(({ value }) => {
        if (/^[\p{L}\s\d,]+$/u.test(value))
            return value.substring(0, 100);
        else
            throw { status: 400, message: `La direccion no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true })
    direccionAcudiente: string;

    constructor( primerNombre : string, segundoNombre : string, primerApellido : string, segundoApellido : string, edad : number, telefono : string, direccion : string, correo : string, tipoDocumento : string, genero : string, nombreAcudiente : string, telefonoAcudiente : string, direccionAcudiente : string){
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.edad = edad;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.tipoDocumento = tipoDocumento;
        this.genero = genero;
        this.nombreAcudiente = nombreAcudiente;
        this.telefonoAcudiente = telefonoAcudiente;
        this.direccionAcudiente = direccionAcudiente;

    }
}