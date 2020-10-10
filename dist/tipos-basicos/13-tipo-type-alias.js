"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = void 0;
var pessoa = {
    idade: 26,
    nome: 'Ronaldo',
    salario: 200.0,
};
function setCorPreferida(pessoa, cor) {
    return __assign(__assign({}, pessoa), { corPreferida: cor });
}
exports.setCorPreferida = setCorPreferida;
console.log(setCorPreferida(pessoa, 'Magenta'));
console.log(pessoa);
