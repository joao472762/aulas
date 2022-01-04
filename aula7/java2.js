var verificar = window.document.getElementById('botao')
verificar.addEventListener('click',clicou)
function clicou(){
    var img = window.document.getElementById('img')
    var agora= new Date()
    var anoatual = agora.getFullYear()
    var res = document.getElementById('res')
    var nascimentoo = window.document.getElementById('nascimento')
    var nascimento = Number(nascimentoo.value)
    var sex = window.document.getElementsByName('sex')
    idade = anoatual - nascimento
    if(nascimento <= anoatual){
        if (sex[0].checked){
            if(idade <= 13){
                res.innerText = `você é um garoto de ${idade} anos de idade`
                img.src = 'imagens/boy.png'
            }
            else if (idade <= 23){
                res.innerHTML = `você é um jovem de ${idade}anos de idade`
                img.src = 'imagens/youngman3.png'
            }
            else if (idade <= 49){
                res.innerHTML = `você é um  homem de ${idade} anos de idade`
                img.src = 'imagens/man.png'
            }
            else if (idade <= 130){
                res.innerHTML = `você é um idoso de ${idade} anos de idade`
            img.src = 'imagens/oldman.png'}
            else{ window.alert('[ERR0] você digitou uma data de nascimento  muito abaixo do comum')}
        }
        else if (sex[1].checked){
            if(idade <= 13){
                res.innerHTML = `você é uma garota de ${idade} anos de idade`
                img.src = 'imagens/girl.png'}
            else if ( idade <= 23){
                res.innerHTML = `você é uma jovem de ${idade} anos de idade`
                img.src = 'imagens/younggirl.png'
            }
            else if (idade <= 49){
                res.innerHTML = `você é uma mulher de ${idade} anos de idade`
                img.src = 'imagens/woman.png'
            }
            else if (idade <= 130){
                res.innerHTML = `você é uma idosa de ${idade} anos de idade`
                img.src = 'imagens/oldwoman.png'}
            else{
                window.alert('[ERR0] você digitou uma data de nascimento  muito abaixo do comum')
            }
        }
    }
    else{
        window.alert('[ERRO] você digitou uma data de nascimento acima do ano atual')
    }

}