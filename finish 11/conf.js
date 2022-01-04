let texto1 = window.document.getElementById('texto1')
let texto2 = window.document.getElementById('texto2')
let n1 = Number (texto1.value)
let n2 = Number (texto2.value)

function somar(){
    let n1 = Number (texto1.value)
    let n2 = Number (texto2.value)
    var resposta = window.document.getElementById('res')
    resposta.innerHTML = `a soma entre ${n1} e ${n2} é igual a ${n1 + n2}`
}

