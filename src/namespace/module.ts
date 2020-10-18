/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNamespace {
    export const nome = 'Ronaldo';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoa = new PessoaDoNamespace(nome);
    console.log(pessoa);
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace(MeuNamespace.nome);
console.log(pessoaDoNamespace);
