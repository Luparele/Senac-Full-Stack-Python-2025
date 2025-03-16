// 4. Números Pares com FOR:
// Peça ao usuário um número e mostre todos os números pares de 1 até ele.

let num = parseInt(prompt("Digite um número:"));
for (let i = 1; i <= num; i += 2) {
    console.log(i);
} 

// 5. Fatorial com WHILE:
// Peça ao usuário um número e calcule o fatorial dele.

let num1 = parseInt(prompt("Digite um número:"));
let fatorial = 1;
let i = 1;
while (i <= num1) {
    fatorial *= i;
    i++;
}
console.log("O fatorial de", num1, "é", fatorial);

// 6. Validação de Entrada com DO WHILE:
// Peça ao usuário um número maior que 10. Se ele digitar um número inválido, peça novamente.

do {
    num2 = parseInt(prompt("Digite um número maior que 10:"));
} while (num2 <= 10);    


// 7. Desenho com Loops Aninhados (DESAFIO)
// Peça ao usuário o tamanho de um quadrado e desenhe-o com asteriscos (*).

let size = parseInt(prompt("Digite o tamanho do quadrado:"));
for (let i = 1; i <= size; i++) {
    let line = "";
    for (let j = 1; j <= size; j++) {
        line += "*";
    }
    console.log(line);
}  