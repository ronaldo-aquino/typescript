@decorator
export class Animal {
    constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        nome: string;
        cor: string;

        constructor(...args: any[]) {
            super(...args);
            this.nome = this.inverte(args[0]);
            this.cor = args[1].split('');
        }

        inverte(valor: string): string {
            return valor.split('').reverse().join(' ');
        }
    };
}

const animal = new Animal('Ronaldo', 'roxo');
console.log(animal);
