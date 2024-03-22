// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function calculo(a, b) {
    let resultado = a / b
    let resto = a % b
    console.log(`O dividendo é: ${a}`)
    console.log(`O divisor é: ${b}`)
    console.log(`O resultado é: ${resultado}`)
    console.log(`O resto é: ${resto}`)
}

calculo(10, 4)