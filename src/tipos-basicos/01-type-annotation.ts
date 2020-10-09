/* eslint-disable */

// Tipos básicos (Aqui ocorre inferência de tipos)
let nome: string = 'Ronaldo'; // Qualquer tipo de strings: ' '  " " ` `
let idade: number = 27; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true // true ou false
let simbolo: symbol = Symbol('qualquer-simbol'); // synbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeString: Array<string> = ['1', '2', '3'];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeString2: string[] = ['1', '2', '3'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    idade: 30,
    nome: 'Ronaldo'
}

// Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
