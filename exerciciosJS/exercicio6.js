// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.


function jurosSimples(c, i, t) {
    let resultado1 =  c + (c * i * t)
    return console.log('Aplicação sob juros simples é: ', resultado1)
}


function jurosComposto(c, i, t) {
    let resultado2 = c * (1 + i) ** t
    return console.log('Aplicação sob juros simples é: ', resultado2.toFixed(2))  
}

jurosSimples(100, 10/100, 2)
jurosComposto(100, 10/100, 2)


