export class Pessoa {
    static idadePadrao = 18;
    static cpfPadrao = '417.169.888-02';

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) {}

    metodoNormal(): void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(
            nome,
            sobrenome,
            Pessoa.idadePadrao,
            Pessoa.cpfPadrao,
        );
    }
}

const pessoa1 = new Pessoa('Paulo', 'Santos', 35, '569.873.154-20');
const pessoa2 = Pessoa.criaPessoa('Ronaldo', 'Aquino');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
