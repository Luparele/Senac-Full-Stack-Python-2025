// Questão 01
// Cálculo de Desconto em uma Loja Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente. Calcule o preço final após aplicar o desconto e imprima o resultado.

let preco = 150;
let desconto  = 20;
let preco_final = (preco - desconto);
console.log("O preço com desconto é: ", preco_final);

// Questão 2
// Cálculo de IMC (Índice de Massa Corporal) Declare duas variáveis, peso e altura, com valores 70 e 1.75, respectivamente. Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2). Imprima o resultado.

let peso = 70;
let altura = 1.75;
let imc = peso / (altura ** 2);
console.log("O IMC é: ", imc);

// Questão 03
// Verificação de Elegibilidade para um Concurso Declare duas variáveis, idade e tem_experiencia, com valores 22 e True, respectivamente. 
// Verifique se a pessoa é elegível para o concurso (idade maior ou igual a 18 e tem experiência) e imprima o resultado.

let idade = 22;
let tem_experiencia = true;

if (idade >= 18 && tem_experiencia === true) {
  console.log("Elegível");
} else {
  console.log("Não elegível");
}

// Questão 04
// Classificação de Níveis de Acesso Declare uma variável nivel_acesso com um valor entre 1 e 3. Use estruturas condicionais para imprimir:
// "Acesso total" se o nível for 3. "Acesso parcial" se o nível for 2. "Acesso restrito" se o nível for 1.
    
let nivel_acesso = parseInt(prompt("Digite seu nível de acesso entre 1 e 3:"));

if (nivel_acesso === 3) {
  console.log("Acesso Total");
} else if (nivel_acesso === 2) {
  console.log("Acesso Parcial");
} else if (nivel_acesso === 1) {
  console.log("Acesso Restrito");
} else {
  console.log("Tipo de acesso inexistente");
}

// Questão 05
// Conversão de Temperatura Declare uma variável celsius com um valor de temperatura em graus Celsius. 
// Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Imprima o resultado.
    
let celsius = parseFloat(input("Didite a temperatura em C°:"))
let fahrenheit = ((celsius * 9/5) + 32)
console.log("O valor em fahrenheit é:", fahrenheit)

// Questão 06
// Verificação de Números Pares e Ímpares Declare uma variável numero com um valor inteiro. 
// Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.

numero = int(input("Digite um número inteiro:"))
if (numero % 2 == 0){
    console.log("O número é par");
} else{
    console.log("O número é ímpar");
}
// Questão 07
// Cálculo de Frete com Base no Peso Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:
// Peso até 5 kg:R$10,00
// Peso entre 5 e 10 kg: R$20.00 
// Peso acima de 10 kg: R$ 30.00
    
let peso1 = parseFloat(prompt("Digite o peso do pacote:"));

if (peso1 <= 5) {
  console.log("O valor do frete é R$10,00");
} else if (peso1 > 5 && peso1 <= 10) {
  console.log("O valor do frete é R$20,00");
} else {
  console.log("O valor do frete é R$30,00");
}