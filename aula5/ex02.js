var agora = new Date()
var hora = agora.getHours()
if(hora == 1){
    console.log('agora é exatamente 1 hora')
}
else{
    console.log(`agora são exatamente ${hora} horas`)}
if(hora < 6){
    console.log('boa madrugada')
}
else if(hora <13){
    console.log('bom dia')
}
else if (hora < 19){
    console.log('boa tarde')
}
else{
    console.log('boa noite')
}