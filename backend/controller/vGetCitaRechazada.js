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
export class vGetCitaRechazada {
    constructor(Numero_Mes) {
        this.Numero_Mes = Numero_Mes;
    }
}
__decorate([
    Expose({ name: 'mes' }),
    Transform(({ value }) => {
        if (Math.floor(value) && value >= 0 && value <= 12)
            return Math.floor(value);
        else
            throw { status: 401, message: `El mes no cumple con los parametros requeridos:
            posibles errores: el valor solicitado debe ser de numero y este es de tipo ${typeof value}. 
            El dato ${value} no puede contener texto o caracteres especiales ademas debe ser un numero de 1 a 12` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], vGetCitaRechazada.prototype, "Numero_Mes", void 0);
