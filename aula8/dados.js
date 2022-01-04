function clicou(){
    var ask = window.document.getElementById('ask')
    var txt1 = window.document.getElementById('texto1')
    var txt2 = window.document.getElementById('texto2')
    var txt3 = window.document.getElementById('texto3')
    n1 = Number(txt1.value)
    n2 = Number(txt2.value)
    n3 = Number(txt3.value)
    ask.innerHTML = ''
    
    if(n3 == 0){
        n3 = 1}
    if(n1 < n2){
        for(n1;n1 <=n2;n1 += n3){
            ask.innerHTML += ` ${n1}      &#x1F449; `}
    }
    else if ( n1 >n2){
        for(n1; n1 >= n2; n1 -= n3){
            ask.innerHTML += ` ${n1} &#x1F449 `}
    }
    ask.innerHTML += '&#x1F3C1;'

}