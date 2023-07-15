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
export class vGetNumCita {
    constructor(medicoID, citaDATE) {
        this.medicoID = medicoID;
        this.citaDATE = citaDATE;
    }
}
__decorate([
    Expose({ name: 'medicoId' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value >= 0)
            return Math.floor(value);
        else
            throw { status: 400, message: `La medicoId no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], vGetNumCita.prototype, "medicoID", void 0);
__decorate([
    Expose({ name: 'citaFecha' }),
    Transform(({ value }) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(value)) {
            throw {
                status: 400,
                message: `El formato de fecha ingresado no es válido. Debe seguir el formato "YYYY-MM-DD".`
            };
        }
        return value;
    }, { toClassOnly: true }),
    __metadata("design:type", Date)
], vGetNumCita.prototype, "citaDATE", void 0);
