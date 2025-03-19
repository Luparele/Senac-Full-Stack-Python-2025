// 1 -Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado. 
// Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".
function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
console.log(calcularMedia(7, 8, 9, 10));

// segunda forma de fazer usando const readline

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function media(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
} 

rl.question("Digite a primeira nota: ", (nota1) => {
    rl.question("Digite a segunda nota: ", (nota2) => {
        rl.question("Digite a terceira nota: ", (nota3) => {
            rl.question("Digite a quarta nota: ", (nota4) => {
                
                nota1 = parseFloat(nota1);
                nota2 = parseFloat(nota2);
                nota3 = parseFloat(nota3);
                nota4 = parseFloat(nota4);

                let resultado = media(nota1, nota2, nota3, nota4);
                console.log("Classificação do IMC: ", resultado);

                rl.close();
            }); 
        });
        
    })
});

// terceiro método de fazer usando const readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a primeira nota: ", (nota1) => {
    rl.question("Digite a segunda nota: ", (nota2) => {
        rl.question("Digite a terceira nota: ", (nota3) => {
            rl.question("Digite a quarta nota: ", (nota4) => {
                let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
                if (media >= 7) {
                    console.log("Aprovado");
                } else {
                    console.log("Reprovado");
                }
                rl.close();
            });
        });
    })
});


// 2- Soma dos Números Pares em um Intervalo: Peça ao usuário dois números, representando o início e o fim de um intervalo. 
// Use um loop (for ou while) para calcular a soma de todos os números pares nesse intervalo e exiba o resultado.

// usando FOR
function calcularSomaNumerosPares() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let soma = 0;
    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
         soma += i;
        }
    }
    console.log("A soma dos números pares entre", num1, "e", num2, "é", soma);
}


// usando WHILE
function calcularSomaNumerosPares() {
    let num3 = parseInt(prompt("Digite o primeiro número:"));
    let num4 = parseInt(prompt("Digite o segundo número:"));
    let soma1 = 0;
    let i = num3;
    while (i <= num4) {
        if (i % 2 === 0) {
            soma1 += i;
        }
        i++;
    }
    console.log("A soma dos números pares entre", num3, "e", num4, "é", soma1);
}


// 3 - Verificação de Palíndromo: Peça ao usuário uma palavra ou frase. 
// Verifique se a entrada é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente, ignorando espaços e maiúsculas/minúsculas). 
// Exiba "É palíndromo" ou "Não é palíndromo".

function verificarPalindromo() {
    let palavra = prompt("Digite uma palavra ou frase:");
    let palavraInvertida = palavra.split("").reverse().join("");
    if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

// 4 - Cálculo de Juros Simples: Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t). 
// Calcule o montante final usando a fórmula de juros simples M=P×(1+r×t) e exiba o resultado.

function calcularJurosSimples() {
    let principal = parseFloat(prompt("Digite o valor principal:"));
    let taxa = parseFloat(prompt("Digite a taxa de juros anual:"));
    let tempo = parseFloat(prompt("Digite o tempo em anos:"));
    let montante = principal * (1 + taxa * tempo);
    console.log("O montante final é: ", montante);
}

// usando const readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor principal: ", (principal) => {
    rl.question("Digite a taxa de juros anual: ", (taxa) => {
        rl.question("Digite o tempo em anos: ", (tempo) => {
            let montante = parseFloat(principal) * (1 + parseFloat(taxa) * parseFloat(tempo));
            console.log("O montante final é: ", montante);
            rl.close();
        });
    })  
});


// 5 - Contagem de Dígitos: Peça ao usuário um número inteiro positivo. Conte quantos dígitos esse número possui e exiba o resultado.

function contarDigitos() {
    let num5 = parseInt(prompt("Digite um número inteiro positivo:"));
    let quantdig = num5.toString().length;
    console.log("O número possui", quantdig, "dígitos");
}