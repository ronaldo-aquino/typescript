// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Ronaldo'];
const dadosCliente2: readonly [number, string, string] = [
    1,
    'Ronaldo',
    'Aquino',
];
const dadosCliente3: readonly [number, string, string?] = [1, 'Ronaldo'];
const dadosCliente4: readonly [number, string, ...string[]] = [
    1,
    'Ronaldo',
    'Aquino',
    'de',
    'Oliveira',
];

// console.log(dadosCliente1);
// console.log(dadosCliente2);
// console.log(dadosCliente3);
// console.log(dadosCliente4);

// Readonly Array
const array1: readonly string[] = ['Ronaldo', 'Aquino'];
const array2: ReadonlyArray<string> = ['Ronaldo', 'Oliveira'];

console.log(array1);
console.log(array2);
