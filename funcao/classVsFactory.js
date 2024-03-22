class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome1 => {
    return {
        falar: () => console.log(`Meu nome é ${nome1}`)
    }
}

const p2 = criarPessoa('Patrick')
p2.falar()