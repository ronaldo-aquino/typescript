const objetoA: {
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';

console.log(objetoA);
