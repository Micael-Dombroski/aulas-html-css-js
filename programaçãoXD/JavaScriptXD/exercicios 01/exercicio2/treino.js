function criar () {
    var foto = document.getElementsByName('personagem')
    var img = document.createElement('img')
    img.style.display = 'block'
    img.style.margin = 'auto'
    var res = document.getElementById('res')
    var frase = document.getElementById('frase')
    var palavra = String(frase.value)
    var nome = document.getElementById('nome')
    var name = String(nome.value)
    if (foto[0]. checked) {
        img.src = 'sans.jpg'
    } else if (foto[1]. checked) {
        img.src = 'fellsans.jpg'
    } else if (foto[2]. checked) {
        img.src = 'fellchara.jpg'
    } else {
        img.src = 'corefrisk.jpg'
    }
    res.innerHTML = `<h2>${name}</h2>
    <p>${palavra}</p>`
   res.appendChild(img)
}