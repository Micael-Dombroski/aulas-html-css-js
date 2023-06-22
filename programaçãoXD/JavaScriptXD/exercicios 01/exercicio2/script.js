function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os daods e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Criando uma variável que possa inserir imagens no documento HTML
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'swapsans.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'sans.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fellsans.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'dustsans.jpg')
            }
        } else if (fsex[1]. checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'frisk.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'chara.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'fellchara.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'corefrisk.jpg')
            }
        }
        res.style.textAlign = 'center' //Alinhando o texto da div res
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img) // Comando usado para que a imagem seja gerada abaixo do texto editado
    }
}