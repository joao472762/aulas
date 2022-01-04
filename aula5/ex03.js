var agora = new Date()
var dayweek = agora.getDay()
console.log('today is :')
switch(dayweek){
    case 0:
        console.log('sunday')
        break
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wendsney')
        break
    case 4:
        console.log('thuesday')
    case 5:
        console.log('friday')
    case 6:
        console.log('sadurday')
    default:
        console.log('Erro não consegui achar o dia da semana')
}