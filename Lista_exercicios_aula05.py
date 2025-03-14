# Questão 01
# Cálculo de Desconto em uma Loja Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente. Calcule o preço final após aplicar o desconto e imprima o resultado.

preco = int(input("Digite o valor do produto:")) # declaração de variável Preço
desconto  = int(input("Digite o valor do desconto:")) # declaração de variável desconto
preco_final = (preco - desconto) # declaração de variável que recebe o calculo como valor
print("O preço com desconto é: ", preco_final) # imprime o valor do calculo

# em percentual

preco = int(input("Digite o valor do produto:")) # declaração de variável Preço
desconto  = int(input("Digite o valor do desconto:")) # declaração de variável desconto
preco_final = preco - (preco * desconto/100) # declaração de variável que recebe o calculo como valor
print("O preço com desconto é: ", preco_final) # imprime o valor do calculo

# Questão 2
# Cálculo de IMC (Índice de Massa Corporal) Declare duas variáveis, peso e altura, com valores 70 e 1.75, respectivamente. Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2). Imprima o resultado.

peso = float(input("Digite seu peso em kg:")) # input pede para digitar o valor da variável
altura = float(input("Digite sua altura:")) # input pede para digitar o valor da variável
imc = peso / (altura ** 2) # variável IMC recebe o calculo como valor
print("O IMC é: ", imc) # imprime o valor do IMC

# Questão 03
# Verificação de Elegibilidade para um Concurso Declare duas variáveis, idade e tem_experiencia, com valores 22 e True, respectivamente. 
# Verifique se a pessoa é elegível para o concurso (idade maior ou igual a 18 e tem experiência) e imprima o resultado.

idade = int(input("Digite sua idade:")) # input pede para digitar o valor da variável
tem_experiencia = True # variável com valor buleano "verdadeiro ou falço"
if idade >= 18 and tem_experiencia == True: # teste lógico
    print("Elegível")
else:
    print("Não elegível")

# Questão 04
# Classificação de Níveis de Acesso Declare uma variável nivel_acesso com um valor entre 1 e 3. Use estruturas condicionais para imprimir:
# "Acesso total" se o nível for 3. "Acesso parcial" se o nível for 2. "Acesso restrito" se o nível for 1.
    
nivel_acesso = int(input("Digite seu nível de acesso entre 1 e 3:")) # input pede para digitar o valor da variável
if nivel_acesso == 3: # teste lógico
    print("Acesso Total")
elif nivel_acesso == 2:
    print("Acesso Parcial")
elif nivel_acesso == 1:
    print("Acesso Restrito")
else:
    print("Tipo de acesso inexistente")

# Questão 05
# Conversão de Temperatura Declare uma variável celsius com um valor de temperatura em graus Celsius. 
# Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Imprima o resultado.
    
celsius = float(input("Didite a temperatura em C°:")) # input pede para digitar o valor da variável
fahrenheit = ((celsius * 9/5) + 32) # variável que recebe o calculo
print("O valor em fahrenheit é:", fahrenheit) # imprime o resultado

# Questão 06
# Verificação de Números Pares e Ímpares Declare uma variável numero com um valor inteiro. 
# Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.

numero = int(input("Digite um número inteiro:"))
if numero % 2 == 0:
    print("O número é par")
else:
    print("O número é ímpar")

# Questão 07
# Cálculo de Frete com Base no Peso Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:
# Peso até 5 kg:R$10,00
# Peso entre 5 e 10 kg: R$20.00 
# Peso acima de 10 kg: R$ 30.00
    
peso = float(input("Digite o peso do pacote:"))
if peso <= 5:
    print("O valor do frete é R$10,00")
elif peso > 5 and peso <= 10:
    print("O valor do frete é R$20,00")
else:
    print("O valor do frete é R$30,00")















