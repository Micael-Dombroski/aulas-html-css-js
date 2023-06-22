var agora = new Date()
var diaSem = agora.getDay()
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/
console.log(diaSem)
switch (diaSem) {
    case 0:
    diaSem = 'Domingo'
    break
    case 1:
        diaSem = 'Segunda-feira'
    break
    case 2:
        diaSem = 'Terça-feira'
    break
    case 3:
        diaSem = 'Quarta-feira'
    break
    case 4:
        diaSem = 'Quinta-feira'
    break
    case 5:
        diaSem = 'Sexta-feira'
    break
    case 6:
        diaSem = 'Sábado'
    break
    default:
        console.log('[ERRO] Dia inválido')
    break
}
console.log(`Hoje é ${diaSem}`)
diaSem = agora.getDay()
console.log(diaSem)
if (diaSem == 5) {
    console.log('Sextou! B)')
} else if (diaSem == 6) {
    console.log('Aproveitando o fim de semana :)')
} else if (diaSem == 0) {
    console.log('Amanhã já é segunda ¬¬')
} else {
    console.log('Esperando Sexta :(')
}