let valores = [8,5,7,1,2,3,6,9,4]
valores.sort()
/*for (let pos = 0;pos<valores.length;pos++) {
    console.log(`a posição ${pos} é ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`a posição de ${pos} é ${valores[pos]}`)
}
let poss = valores.indexOf(5)

console.log(`a posição 5 é ${poss}`)