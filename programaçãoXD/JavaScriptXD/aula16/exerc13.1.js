/*function parimp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp(11)
console.log(res)*/

function soma (n1=0, n2=0) { //n1=0 é um parâmetro pré-definido
    return n1 +n2
}
console.log(soma(4, 6)) 
//é necessário que seja colocado sempre os 2 parâmetros 
//para que a soma seja feita ou então deixar na function 
//valores pré-definidos para os parâmetros que serão usados 
//caso nenhum valor seja colocado em um desses parâmetros

//Podemos colocar funções como valores de variáveis
let v = function(x) {
    return x*2
}
console.log(v(4))

//A função a seguir retorna o fatorial de um número
//Fatorial de 5 é 5x4x3x2x1 = 120

function fatorial (n) {
    let fat =1
    for(let c = n; c > 1; c--) { //a variável c vai receber o valor n e enquanto c for maior que 1 ela vai perder 1
        fat *= c
    }
    return fat
}
console.log(fatorial(5))


