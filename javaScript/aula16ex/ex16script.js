let num = document.getElementById('txtn')
let lista = document.getElementById('seladcnum')
let res = document.querySelector('div#res')
let valores = []

function IsNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function msg() {
    let MSG = "Valor invalido ou já encontrado na lista!"
    return MSG
    
}

function adc() {
    if(IsNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        alert(msg())
    }
}