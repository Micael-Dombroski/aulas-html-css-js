var agora = new Date()
var hora = agora.getHours() /*Com isso será sempre informado a hora exata do sistema*/
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6) {
    console.log("Boa madrugada!")
} else if(hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else if (hora <=24) {
    console.log('Boa noite!')
} else {
    console.log('O dia só tem 24 horas!')
}