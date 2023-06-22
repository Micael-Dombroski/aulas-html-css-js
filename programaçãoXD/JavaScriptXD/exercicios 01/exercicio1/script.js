
function carregar () {
    alert('O site muda conforme a hora.')
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML =  `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom Dia
    img.src = 'manha1.jpg'
    document.body.style.background = '#9da0b1'
} else if (hora >= 12 && hora < 18) {
    //Boa Tarde
    img.src = 'tarde1.jpg'
    document.body.style.background = '#572600'
} else {
    //Boa Noite
    img.src = 'noite1.jpg'
    document.body.style.background = '#004673'
}
}
