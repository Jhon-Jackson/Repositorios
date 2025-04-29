function Verificar () {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pass = document.getElementById('txtpas')
    var res = document.querySelector('div#res')
    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var pas = Number(pass.value)
    var c = 0
    for (c=ini;c=f;c++) {
        res.appendChild = `${c}`
    }
}