"use strict";
/* eslint-disable */
// Tipos básicos (Aqui ocorre inferência de tipos)
var nome = 'Ronaldo'; // Qualquer tipo de strings: ' '  " " ` `
var idade = 27; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
var adulto = true; // true ou false
var simbolo = Symbol('qualquer-simbol'); // synbol
// let big: bigint = 10n; // bigint
// Arrays
var arrayDeNumeros = [1, 2, 3];
var arrayDeString = ['1', '2', '3'];
var arrayDeNumeros2 = [1, 2, 3];
var arrayDeString2 = ['1', '2', '3'];
// Objetos
var pessoa = {
    idade: 30,
    nome: 'Ronaldo'
};
// Funções
function soma(x, y) {
    return x + y;
}
var soma2 = function (x, y) { return x + y; };
