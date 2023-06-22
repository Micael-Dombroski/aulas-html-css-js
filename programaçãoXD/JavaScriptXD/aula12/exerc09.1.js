/*Aperte F8 para executar o código*/
var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 18) {
    console.log('Menor de idade')
    if (idade < 18) {
        console.log('Voto opcional')
    } else {
        console.log ('Não vota')
    }
} else if (idade >= 67) {
    console.log('Maior de idade, voto opcional')
}else {
    console.log('Maior de idade, voto obrigatório')
}