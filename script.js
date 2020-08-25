var n2 = ''
var nap = ''
function aplicar(){
    reas = window.document.querySelector('input#cxreas')
    tibi = window.document.querySelector('input#cxtib')

    n3 = Number(reas.value)
    n4 = Number(tibi.value)
    nap = n4 / n3
}
function convert(){
    ver = window.document.querySelector('div#res')
    txt = window.document.querySelector('input#cxtxt')

    n1 = Number(txt.value)
    n2 = nap
    tib = n1 / n2
    ver.innerHTML = `<p>Pela a quantia de ${n1} Tibia     Coins você rescebera <strong>${tib}.00R$</strong> </p>`
    txt.value = ''
    txt.focus()
}