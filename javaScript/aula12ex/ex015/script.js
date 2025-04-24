function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada: ${idade} anos`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
            genero = ' Homen'
        if (idade >=0 && idade <= 4) {
            // bebe
            img.setAttribute('src','BBM.png')
        } else if (idade >=5 && idade <= 17){
            // adolescente
            img.setAttribute('src','adolM.png')

        } else if (idade >= 18 && idade <= 24) {
            // jovem
            img.setAttribute('src','jovemM.png')

        } else if (idade >= 25 && idade < 50) {
            //adulto
            img.setAttribute('src','adultoM.png')
        } else {
            //idoso
            img.setAttribute('src','idosoM.png')
        }
    }else if (fsex[1].checked) {
            genero = 'Mulher'
        if (idade >=0 && idade <=4) {
            // bebe
            img.setAttribute('src','BBF.png')
        } else if (idade >=5 && idade <= 17){
            // adolescente
            img.setAttribute('src','adolF.png')

        } else if (idade >=18 && idade <= 24) {
            // jovem
            img.setAttribute('src','jovemF.png')
        } else if (idade >= 25 && idade < 50) {
            //adulto
            img.setAttribute('src','adultoF.png')
        } else {
            //idoso
            img.setAttribute('src','idosoF.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}