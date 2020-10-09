function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Ronaldo',
    sobrenome: 'Aquino',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Ronaldo', 'Aquino');
pessoa.exibirNome();

export { pessoa };
