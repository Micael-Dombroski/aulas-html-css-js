alert('Olá')
let c=0
function adicionar() {
    c++
    let num = document.getElementById('numb')
    let sec = document.getElementById('sect')
    if (num.value.length == 0) {
        window.alert('Por favor, insira um valor')
    } else {
        let n = Number(num.value)
        if (n < 1 || n > 100) {
            window.alert('Valor inserido inválido')
        } else {
            //if () {
                //window.alert('O valor informado já foi inserido na lista')
            //} else {
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            item.value = `tab${c}`
            sec.appendChild(item)
            //}
        }   
    }
}