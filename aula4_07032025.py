a = 10
b = 5
print("Soma: ", a + b)
print("Subtração: ", a - b)
print("Multiplicação: ", a * b)
print("Divisão: ", a / b)

primeiro_nome = "Maria"
sobrenome = "silva"
nome_completo = primeiro_nome + " " + sobrenome
print(nome_completo)

x = 15
y = 20
print("x é maior que y?", x > y)
print("x é igual que y?", x == y)

tem_carteira = True
idade = 18
tem_carro = False
pode_dirigir = idade >= 18 and tem_carteira
print("pode dirigir?", pode_dirigir)
print("pode dirigir e tem carro?", pode_dirigir and tem_carro)

frase = "Phyton é divertido"
print(frase.upper()) #.upper deixa todas as letras maiusculas / .lower deixa todas em minusculo
nova_frase = frase.replace("divertido", "poderoso") # .raplace faz a busca do item declarado na primeira "" e substitui pela declarada na segunda ""
print(nova_frase)

contador = 0
contador += 5 #contador=contador+5
contador -+ 2 #contador=contador-2
contador *= 3 #contador=contador*3
print("Valor finaldo contador:", contador)

a = 10
b = 20
c = 30
media = (a + b + c) / 3
print("Médi:", media)
print("A média é maior que 15 e menor que 25?", 15 < media < 25)

nota = 75
if nota >= 60:
    print("Aprovado")
elif nota >= 40:
    print("Reuperação")
else:
    print("Reprovado")

dia_da_semana = 3
dias = {
    1: "Domingo",
    2: "Segunda",
    3: "Terça",
    4: "Quarta",
    5: "Quinta",
    6: "Sexta",
    7: "Sábado"
}
print(dias.get(dia_da_semana, "Dia inválido"))