function Verificar () {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pass = document.getElementById('txtpas')
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
       //window.alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br>'
        var ini = Number(inicio.value)
        var f = Number(fim.value)
        var pas = Number(pass.value)
        if (pas <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            pas = 1
        }

        if (ini < f) {
            // Contagem crescente
            for (let c = ini; c <= f;c += pas) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (let c = ini; c >= f;c -= pas) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }   
        
}