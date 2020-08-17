function convert(){
    var ver = window.document.querySelector('div#res')
    var txt = window.document.querySelector('input#cxtxt')

    var n1 = Number(txt.value)
    var n2 = 5.555555555555555
    var tib = n1 / n2
    ver.innerHTML = `<p>Pela a quantia de ${n1} Tibia Coins você rescebera <strong>${tib}.00R$</strong> </p>`
    txt.value = ''
    txt.focus()
}