// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function comprimentosDosTriangulos(a, b, c) {
    if (a == b & b == c & a == c) {
        console.log('O triângulo é: Equilátero!')
    } else if(a != b & c != a & b != c) {
        console.log('O triângulo é Escaleno')
    } else{
        console.log('O triângulo é Isósceles')
    }
}

comprimentosDosTriangulos(1, 1, 1)
comprimentosDosTriangulos(1, 1, 3)
comprimentosDosTriangulos(1, 2, 3)