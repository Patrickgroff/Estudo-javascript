const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar1 = pessoa.falar
falar1() // conflito entre paradigmas: funcional e OO 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()