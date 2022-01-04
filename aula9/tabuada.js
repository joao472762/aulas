function clicou(){
    window.document.body.style.background = '#f000f03f'
    var txt = window.document.getElementById('texto1')
    var n1 = Number(txt.value)
    var tabuada =  window.document.getElementById('tabuada')
    tabuada.innerHTML = ''
   
    for(var c = 1; c <=10; c ++){
        var opi = window.document.
        createElement('option')
        opi.text = ` ${n1} x ${c} = ${n1 * c}` 
        tabuada.appendChild(opi)}
    
}