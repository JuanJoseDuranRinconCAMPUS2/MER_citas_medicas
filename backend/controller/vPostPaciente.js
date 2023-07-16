var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class vPostPaciente {
    constructor(primerNombre, segundoNombre, primerApellido, segundoApellido, edad, telefono, direccion, correo, tipoDocumento, genero, nombreAcudiente, telefonoAcudiente, direccionAcudiente) {
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
__decorate([
    Expose({ name: 'PrimerNombre_P' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el PrimerNombre_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "primerNombre", void 0);
__decorate([
    Expose({ name: 'SegundoNombre_P' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 45);
        else
            throw { status: 400, message: `el SegundoNombre_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "segundoNombre", void 0);
__decorate([
    Expose({ name: 'PrimerApellido_P' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el PrimerApellido_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "primerApellido", void 0);
__decorate([
    Expose({ name: 'SegundoApellido_P' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el SegundoApellido_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "segundoApellido", void 0);
__decorate([
    Expose({ name: 'edad_P' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return Math.floor(value);
        else
            throw { status: 400, message: `La edad no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], vPostPaciente.prototype, "edad", void 0);
__decorate([
    Expose({ name: 'telefono_P' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return value;
        else
            throw { status: 400, message: `La telefono_P no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "telefono", void 0);
__decorate([
    Expose({ name: 'dirrecion_P' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s\d,]+$/u.test(value))
            return value.substring(0, 100);
        else
            throw { status: 400, message: `La direccion no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "direccion", void 0);
__decorate([
    Expose({ name: 'correo_P' }),
    Transform(({ value }) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
            return value.substring(0, 100);
        else
            throw { status: 400, message: `El correo electrónico no cumple con el formato válido.` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "correo", void 0);
__decorate([
    Expose({ name: 'tipo_Documento_P' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el tipo_Documento_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "tipoDocumento", void 0);
__decorate([
    Expose({ name: 'genero_P' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 50);
        else
            throw { status: 400, message: `el genero_P no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "genero", void 0);
__decorate([
    Expose({ name: 'nombreCompleto_Acu' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s]+$/u.test(value))
            return value.substring(0, 100);
        else
            throw { status: 400, message: `el nombreCompleto_Acu no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "nombreAcudiente", void 0);
__decorate([
    Expose({ name: 'telefono_Acu' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return value;
        else
            throw { status: 400, message: `El telefono_Acu no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "telefonoAcudiente", void 0);
__decorate([
    Expose({ name: 'direccion_Acu' }),
    Transform(({ value }) => {
        if (/^[\p{L}\s\d,]+$/u.test(value))
            return value.substring(0, 100);
        else
            throw { status: 400, message: `La direccion no cumple con los parametros requeridos:  
            posibles errores: el valor solicitado debe ser de tipo string y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener numeros o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], vPostPaciente.prototype, "direccionAcudiente", void 0);
