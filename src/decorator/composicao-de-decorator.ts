type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
    // clousure

    return function <T extends Constructor>(target: T): T {
        console.log('Sou o decorador e recebi', target);

        return class extends target {
            nome: string;
            cor: string;

            constructor(...args: any[]) {
                super(...args);
                this.nome = this.inverte(args[0]);
                this.cor = this.inverte(args[1]);
            }

            inverte(valor: string): string {
                return (
                    valor.split('').reverse().join(' ') +
                    ' ' +
                    param1 +
                    ' ' +
                    param2
                );
            }
        };
    };
}

function outroDecorador(param1: string) {
    return function (target: Constructor) {
        console.log('Sou o outro decorador');
        console.log(param1);
        return target;
    };
}

@outroDecorador('Decorator 2') // 2
@inverteNomeECor('Valor 1', 'Valor 2') // 1
export class Animal {
    constructor(public nome: string, public cor: string) {
        console.log('Sou a classe');
    }
}

const animal = new Animal('Ronaldo', 'roxo');
console.log(animal);
