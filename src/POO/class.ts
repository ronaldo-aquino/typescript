export class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        this.colaboradores.forEach((colaborador) => console.log(colaborador));
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('Aquinodev SA.', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Ronaldo', 'Aquino');
const colaborador2 = new Colaborador('Agnaldo', 'Santos');
const colaborador3 = new Colaborador('Pedro', 'Ferreira');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.mostrarColaboradores();
