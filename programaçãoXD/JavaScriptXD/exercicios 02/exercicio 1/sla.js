function Contar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //Analisa se todos os campos tiveram um valor inserido
        alert('[ERRO] Faltam dados!')
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        let cont = '' // Let cria uma variável que só funciona dentro do bloco onde foi criada
        if (fim > inicio) {
            if (passo >= 1 && passo < fim) {
                window.alert('Tudo certo, vamos começar a contagem!')
            } else {
                window.alert('[ERRO] O número de passos é inferior a 1 ou maior que o valor final da contagem, tornando impossível a execução da conta, então o valor de passo será alterado para 1')
                passo = 1  
            }
            for (var comeco = inicio; comeco <= fim; comeco= comeco + passo) {
                    cont += `${comeco} \u{1f449} `
            }
            res.innerHTML = `${cont} \u{1f6a9}`
        } else if (fim < inicio) {
            if (passo <= -1) {
                window.alert('Tudo certo, vamos começar a contagem!')
            } else {
                window.alert('[ERRO] O número de passos é superior a -1 ou menor que o valor final da contagem, tornando impossível a execução da conta, então o valor de passo será alterado para -1')
                passo = -1
            }
            for (var comeco = inicio; comeco >= fim; comeco = comeco + passo) {
                cont+= `${comeco} \u{1f449} `
            }
                res.innerHTML = `${cont} \u{1f6a9}`
        } else {
            res.innerHTML = "<p>(='X'=) Algo deu errado</p>"
            window.alert('[ERRO] O valor inicial e final não podem ser iguais.')
        }
    }
}