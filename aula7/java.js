function clicou(){
    var now = new Date()
    ano =  now.getFullYear()
    var idadee = window.document.getElementById('idade')
    var img = window.document.getElementById('img')
    var nascimento = Number(idadee.value)
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('sexo')
    var idade = ano - nascimento

    if (sexo[0].checked){
        if(nascimento <= ano){
            if (idade < 12){
                res.innerText = `você é uma cirança de ${idade} anos de idade`
                img.src = 'imagens/boy.png'
            }
            else if ( idade < 23){
                res.innerText = `você é um adolescente de ${idade} anos de idade`
                img.src = 'imagens/youngman3.png'
            }
            else if (idade < 45){
                res.innerText = `você é um homem de ${idade} anos de idade`
                img.src = 'imagens/man.png'
            }
            else if (idade < 130){
                res.innerText = `você é um idoso de ${idade} anos de idade` 
                img.src = 'imagens/oldman.png'
            }
            else{
                window.alert('[ERRO] por favor prencha o campo de idade')
            }
        }
        else{
            window.alert(`você colocou uma data de nacimento acima do ano atual`)
        }
    }

    else if (sexo[1].checked){
        if (nascimento <= ano){
            if (idade <= 13){
                res.innerText = `você é uma criaça de ${idade} anos de idade`
                img.src = 'imagens/girl.png'
            }
            else if (idade < 23){
                res.innerText = `você é uma adolescente de ${idade} anos de idade`
                img.src = 'imagens/younggirl.png'
            }
            else if (idade < 45){
                res.innerText = `você é uma mulher de ${idade} anos de idade`
                img.src = 'imagens/woman.png'
            }
            else if (idade < 131){
                res.innerText = `você é uma senhora de ${idade} anos de idade`
                img.src = 'imagens/oldwoman.png'
            }
            else{
                window.alert('por favor preencha o campo de nascimento')
            }
        }
        else{
            window.alert('você colocou o seu nascimento acima do ano atual')
        }
    }
    else{
        window.alert('[ERRO] ocorreu algum erro por favor recarregue a página')
    }
}