export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string,
    ) {
        this.cpf = _cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Ronaldo', 'Aquino', 26, '417.169.888-02');
console.log(pessoa.cpf);
pessoa.cpf = '169.417.555-05';
console.log(pessoa.cpf);
