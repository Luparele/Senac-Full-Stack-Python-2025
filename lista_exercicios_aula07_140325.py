# 4. Números Pares com FOR:
# Peça ao usuário um número e mostre todos os números pares de 1 até ele.

num = int(input("Digite um número:"))
for i in range(1, num + 1):
    if i % 2 == 0:
        print(i)


# 5. Fatorial com WHILE:
# Peça ao usuário um número e calcule o fatorial dele.

num = int(input("Digite um número:"))
fatorial = 1
i = 1
while i <= num:
    fatorial *= i
    i += 1
print(fatorial)

# 6. Validação de Entrada com DO WHILE:
# Peça ao usuário um número maior que 10. Se ele digitar um número inválido, peça novamente.

num = int(input("Digite um número maior que 10:"))
while num <= 10:
    num = int(input("Digite um número maior que 10:"))
print(num)

# 7. Desenho com Loops Aninhados (DESAFIO)
# Peça ao usuário o tamanho de um quadrado e desenhe-o com asteriscos (*).

tamanho = int(input("Digite o tamanho do quadrado:"))
for i in range(tamanho):
    for j in range(tamanho):
        print("*", end="")
    print()