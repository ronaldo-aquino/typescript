interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
    nome: 'Ronaldo',
    sobrenome: 'Aquino',
    idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 30,
};

const aluno3: PessoaProtocolo = {
    nome: 'Ronaldo',
    sobrenome: 'Aquino',
    idade: 30,
};

console.log(aluno, aluno2, aluno3);
