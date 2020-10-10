"use strict";
// Array<T> - T[]
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUppeCase = exports.concatenaString = exports.multiplicaArgs = void 0;
function multiplicaArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, valor) { return acc * valor; }, 1);
}
exports.multiplicaArgs = multiplicaArgs;
function concatenaString() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, valor) { return acc + valor; });
}
exports.concatenaString = concatenaString;
function toUppeCase() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.map(function (item) { return item.toUpperCase(); });
}
exports.toUppeCase = toUppeCase;
var result = multiplicaArgs(1, 2, 3);
var concatenacao = concatenaString('a', 'b', 'c');
var letraMaiuscula = toUppeCase('a', 'b', 'c');
console.log(result);
console.log(concatenacao);
console.log(letraMaiuscula);
