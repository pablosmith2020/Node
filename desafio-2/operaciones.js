"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restar = exports.Sumar = void 0;
class Sumar {
    constructor(num1, num2) {
        this.result = 0;
        this.val1 = 0;
        this.val2 = 0;
        this.val1 = num1;
        this.val2 = num2;
    }
    Resultado() {
        this.result = this.val1 + this.val2;
        return this.result;
    }
}
exports.Sumar = Sumar;
class Restar {
    constructor(num1, num2) {
        this.result = 0;
        this.val1 = 0;
        this.val2 = 0;
        this.val1 = num1;
        this.val2 = num2;
    }
    Resultado() {
        this.result = this.val1 - this.val2;
        return this.result;
    }
}
exports.Restar = Restar;
