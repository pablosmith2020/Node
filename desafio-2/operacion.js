"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function Desafio2(operation, value1, value2) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (operation) {
            case "sumar":
                let { Sumar } = yield Promise.resolve().then(() => __importStar(require("./operaciones")));
                let calcularSuma = new Sumar(value1, value2);
                return calcularSuma.Resultado();
                break;
            case "restar":
                let { Restar } = yield Promise.resolve().then(() => __importStar(require("./operaciones")));
                let calcularResta = new Restar(value1, value2);
                return calcularResta.Resultado();
                break;
                break;
            default:
                break;
        }
    });
}
Desafio2("sumar", 2, 7).then((e) => console.log(`El resultado de la Suma es:  ${e}`)).catch((e) => console.log("Error Calculando la Suma"));
Desafio2("restar", 2, 7).then((e) => console.log(`El resultado de la Suma es:  ${e}`)).catch((e) => console.log("Error Calculando la Suma"));
