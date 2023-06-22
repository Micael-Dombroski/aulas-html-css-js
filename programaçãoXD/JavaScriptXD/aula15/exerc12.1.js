let num = [1,2,6,4,7,5,3]
num.push(0)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[3]}`)
for (pos = 0; pos < num.length; pos++) { 
    /*Enquanto a variável pos for menos que o número de 
    elementos da Array num, vai ser escrito no código o 
    valor de cada elemento*/
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//Abaixo um for desenvolvido para Arrays e objetos no JS

for(var pos in num) {
    console.log(num[pos])
}
console.log(num.indexOf(6))
console.log(num.indexOf(12))
