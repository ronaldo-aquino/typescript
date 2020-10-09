// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaString(...args: string[]): string {
    return args.reduce((acc, valor) => acc + valor);
}

export function toUppeCase(...args: string[]): string[] {
    return args.map((item) => item.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const letraMaiuscula = toUppeCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(letraMaiuscula);
