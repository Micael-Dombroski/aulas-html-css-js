alert('Olá')
function Contar () {
    var inicio = window.document.getElementById('inicio')
    inicio = Number (inicio.value)
    var fim = window.document.getElementById('fim')
    fim = Number (fim.value)
    var passo = window.document.getElementById('passo')
    passo = Number (passo.value)
    var res = window.document.getElementById('res')
    var cont = '';
    if (inicio < fim) {
        if (passo >= 1) {
            window.alert('Vamos começar!')
            for (var comeco = inicio; comeco <= fim; comeco += passo) {
                cont += `${comeco}` + ' > ';

            }
            res.innerHTML = `${cont} X`
        } else {
            window.alert('[ERRO] O valor colocado em passos não é válido para essa situação, será considerado o valor de passo como 1')
            passo =  1
            for (var comeco = inicio; comeco <= fim; comeco += passo) {
                cont += `${comeco}` + ' > ';

            }
            res.innerHTML = `${cont} X`
        }
    } else if (inicio > fim) {
        if (passo <= -1) {
            window.alert('Vamos começar!')
            for (var comeco = inicio; comeco >= fim; comeco += passo) {
                cont += `${comeco}` + ' > ';

            }
            res.innerHTML = `${cont} X`
        } else {
            window.alert('[ERRO] O valor colocado em passos não é válido para essa situação, será considerado o valor de passo como -1')
            passo = -1
            for (var comeco = inicio; comeco >= fim; comeco += passo) {
                cont += `${comeco}` + ' > ';

            }
            res.innerHTML = `${cont} X`
        }
    } else {
        window.alert('[ERRO] O número inicial e o número final são iguais')
        res.innerHTML = "<p>Parece que houve um erro (='X'=)</p>"
    }
}