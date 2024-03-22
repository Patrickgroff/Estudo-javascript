// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calcularParametros(a, b) {
    let soma = a + b
    console.log('Soma:', soma)

    let subtracao = a - b
    console.log('Subtração:', subtracao)

    let multiplicacao = a * b 
    console.log('Multiplicação:', multiplicacao)

    if (b != 0) {
        let divisao = a / b
        console.log('Divisão:', divisao)
    }
}

calcularParametros(5, 5)