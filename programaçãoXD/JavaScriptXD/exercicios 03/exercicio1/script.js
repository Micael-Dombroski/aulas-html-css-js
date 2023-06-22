alert('Olá')
var a = 1
var opt = [,,,,,,,,,]
opt[0]= document.getElementById(`op${a}`)
opt[0].innerHTML = 'Digite um número acima'
var opts = 0
var cont = 1
    while (opts <= 9) {
        opt[opts] = document.getElementById(`op${cont}`)
        //window.alert(opts)
        opts++
        cont++
    }
function tabuada() {
    var checar = String(document.getElementById('number').value)
    if (checar.length > 0) {
        //window.alert(`A variável possui ${checar.length} digitos`)
        var num = Number(document.getElementById('number').value)
        //window.alert(`O número escolhido foi ${num}`)
        cont = 0
        for (c=1; c<=10; c++) {
            var mult = num * c
            //window.alert (mult)
            opt[cont].innerHTML = `${num} x ${c} = ${mult}`
            cont++
        }
    } else {
        window.alert('Por favor, insira um número')
        //window.alert(`A variável possui ${checar.length} digitos`)
    }
}