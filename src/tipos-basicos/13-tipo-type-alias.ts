type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type corPreferida = CorRGB | corCMYK;

const pessoa: Pessoa = {
    idade: 26,
    nome: 'Ronaldo',
    salario: 200.0,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Magenta'));
console.log(pessoa);
