export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string,
    ) {
        super(nome, sobrenome, idade, cpf);
    }

    getNomeCompleto(): string {
        console.log('Fazendo algo antes.');
        return super.getNomeCompleto();
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return `Isso vem do cliente ${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Ronaldo', 'Aquino', 26, '41716988802');
const aluno = new Aluno('Ronaldo', 'Aquino', 26, '41716988802', '001');
const cliente = new Cliente('Paulo', 'Nunes', 37, '41758963354');
console.log(aluno);
// console.log(cliente.getNomeCompleto());
