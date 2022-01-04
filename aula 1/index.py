from time import sleep
numero = float(input('digite um número '))
while True:
    resposta = int(input("você quer fazer com este número ?: \n[ 1 ] somar \n[ 2 ] subtrair \n[ 3 ]dividir \n[ 4 ]multiplicar :  " ))
    if resposta == 1:
        s = float(input(f'você quer somar o {numero} com qual número'))
        print(f' a soma de {numero} e {s} é igual a {numero + s}')
    elif resposta == 2:
        s = float(input(f'você quer subtrair o {numero} por qual número'))
        print(f'a subtração de {numero} e {s} é de {numero - s}')
    elif resposta == 3:
        s = float(input(f"você quer dividir o {numero} por qual número: "))
        print(f'a divisão entre{numero} e {s} é de {numero / s}')
    elif resposta == 4:
        s = float(input(f"você quer multiplicar o número {numero} por qual número "))
        print(f'mutiplicão entre  {numero} e  {s} é de {numero * s}')
    else:
        print('opição inválida por favor digite uma opição válida')
    if resposta >0 or resposta <5:
        while True:
            ask = int(input('você quer \n[ 1 ] parar \n[ 2 ] ecolher outro número '))
            if ask == 1:
                print('obrigado por usar o nosso serviço')
                break
            elif ask == 2:
                numero = float(input("digite um número"))
                break
            else:
                print('opição iválida, por favor tente novamente')
    if ask == 1:
        break