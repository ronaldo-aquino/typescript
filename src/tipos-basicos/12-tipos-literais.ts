let x = 10;  // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
    nome: 'Ronaldo' as const,
    sobrenome: 'Ronaldo',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
}

console.log(escolhaCor('Amarelo'));

// Module mode
export default 1;
