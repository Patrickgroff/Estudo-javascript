function Pessoa() {
    this.idade = 0

    // amarrando o 'this' no obj para nao variar
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa