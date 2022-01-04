var img = window.document.getElementById('img')
    var now = new Date()
    var horas = now.getHours()
    var horario = document.getElementById('hours')
    var corpo = window.document.getElementById('corpo')
    horario.innerHTML = `<p> agora são extamente ${horas} horas <p>`
    if (horas < 6){
        horario.innerHTML += 'boa madrugada'
        img.src = 'imagens/noite.jpeg'
    }
    else if (horas < 13){
        horario.innerHTML += 'bom dia'
        corpo.style.background = '#79E2F58c'
        img.src = 'imagens/dia.jpeg'
    }
    else if (horas < 19){
        horario.innerHTML += 'boa tarde'
        corpo.style.background = '#f0c9ba'
        img.src = 'imagens/tarde.jpeg'
    }
    else if (horas <= 24){
        horario.innerHTML += 'boa noite'
        corpo.style.background = '#1A2029'
        img.src = 'imagens/noite.jpeg'

    }
    else{
        horario.innerHTML += 'este horário não existe'
    }