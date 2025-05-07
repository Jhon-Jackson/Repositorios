function adc() {
    let adc = document.getElementById('txtn')
    let adcnum = document.getElementById('seladcnum')
    let num = Number(adc.value)
    if (adc.value.length == 0) {
        alert("por favor , digite os dados!")
    } else if (num < 1 || num > 100) {
        alert("por favor, digite os dados entre 1 e 100!")
    } else {

    }
}
