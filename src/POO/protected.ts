export class Empresa {
    public readonly nome: string;
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

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

export class Udemy extends Empresa {
    constructor() {
        super('Udemy', '11.111.111/0001-11');
    }

    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null;
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Ronaldo', 'Aquino');
const colaborador2 = new Colaborador('Agnaldo', 'Santos');
const colaborador3 = new Colaborador('Pedro', 'Ferreira');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(empresa1);
console.log(colaboradorRemovido);
