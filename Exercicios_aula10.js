//Soma de Matrizes: Crie duas matrizes 3x3 e escreva uma função para somá-las. A função deve retornar uma nova matriz com o resultado.

function somarMatrizes(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        resultado.push([]);
        for (let j = 0; j < matriz1[0].length; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return resultado;
}

let matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matriz2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
let matrizSoma = somarMatrizes(matriz1, matriz2);
console.log(matrizSoma);



//Transposição de Matriz: Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troque linhas por colunas).
matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function transporMatriz(matriz) {
    let transposta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        transposta.push([]);
        for (let j = 0; j < matriz.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;  
}
transporMatriz(matriz1);

//Multiplicação de Matrizes: Crie duas matrizes 2x2 e escreva uma função para multiplicá-las.
matriz1 = [[1, 2], [3, 4]];
matriz2 = [[5, 6], [7, 8]];
function multiplicarMatrizes(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        resultado.push([]);
        for (let j = 0; j < matriz1[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < matriz1[0].length; k++) {
                soma += matriz1[i][k] * matriz2[k][j];
            }
            resultado[i][j] = soma;
        }
    }
    return resultado;
}
multiplicarMatrizes(matriz1, matriz2);

//Jogo da Velha: Implemente um jogo da velha usando uma matriz 3x3. O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.

let tabuleiro = [[null, null, null], [null, null, null], [null, null, null]];
function imprimirTabuleiro() {
    for (let i = 0; i < tabuleiro.length; i++) {
        let linha = "";
        for (let j = 0; j < tabuleiro[i].length; j++) {
            if (tabuleiro[i][j] === null) {
                linha += "- ";
            } else {
                linha += tabuleiro[i][j] + " ";
            }
        }
        console.log(linha);
    }
}

while (true) {
    imprimirTabuleiro();
    let linha1 = parseInt(prompt("Jogador 1, escolha uma linha:"));
    let coluna1 = parseInt(prompt("Jogador 1, escolha uma coluna:"));
    if (linha1 >= 0 && linha1 < 3 && coluna1 >= 0 && coluna1 < 3 && tabuleiro[linha1][coluna1] === null) {
        tabuleiro[linha1][coluna1] = "X";
    } else {
        console.log("Posição inválida!");
        continue;
    }

    let linha2 = parseInt(prompt("Jogador 2, escolha uma linha:"));
    let coluna2 = parseInt(prompt("Jogador 2, escolha uma coluna:"));
    if (linha2 >= 0 && linha2 < 3 && coluna2 >= 0 && coluna2 < 3 && tabuleiro[linha2][coluna2] === null) {
        tabuleiro[linha2][coluna2] = "O";
    } else {
        console.log("Posição inválida!");
        continue;
    }

    let temVencedor = false;
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== null && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
            console.log("Vencedor: " + tabuleiro[i][0]);
            temVencedor = true;
            break;
        }
        if (tabuleiro[0][i] !== null && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) {
            console.log("Vencedor: " + tabuleiro[0][i]);
            temVencedor = true;
            break;
        }
    }
    if (tabuleiro[0][0] !== null && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
        console.log("Vencedor: " + tabuleiro[0][0]);
        temVencedor = true;
    }
    if (tabuleiro[0][2] !== null && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
        console.log("Vencedor: " + tabuleiro[0][2]);
        temVencedor = true;
    }
    if (temVencedor) {
        break;
    }
}


//Busca em Matriz: Escreva uma função que receba uma matriz e um número, e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, retorne null.
teste = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function buscarNumero(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === numero) {
                return [i, j];
            }
        }
    }
    return null;
}   
buscarNumero(teste, prompt("Digite um número:"));


//Matriz Identidade: Crie uma função que gere uma matriz identidade de tamanho NxN (uma matriz onde os elementos da diagonal principal são 1 e os demais são 0).
identidade = [];
function gerarMatrizIdentidade(tamanho) {
    identidade = [];
    for (let i = 0; i < tamanho; i++) {
        identidade.push([]);
        for (let j = 0; j < tamanho; j++) {
            if (i === j) {
                identidade[i][j] = 1;
            } else {
                identidade[i][j] = 0;
            }
        }
    }
    return identidade;
}
gerarMatrizIdentidade(prompt("Digite o tamanho da matriz:"));

//Rotação de Matriz: Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.
matrizHorario = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function rotacionarMatriz(matriz) {
    let matrizRotacionada = [];
    for (let i = 0; i < 3; i++) {
        matrizRotacionada.push([]);
        for (let j = 0; j < 3; j++) {
            matrizRotacionada[i][j] = matriz[2 - j][i];
        }
    }
    return matrizRotacionada;
}
rotacionarMatriz(matrizHorario);


//Soma das Bordas: Escreva uma função que calcule a soma dos elementos das bordas de uma matriz NxN.
matrizSoma = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function calcularSomaBordas(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][0];
        soma += matriz[i][2];
    }
    for (let i = 0; i < 3; i++) {
        soma += matriz[0][i];
        soma += matriz[2][i];
    }
    return soma;
}
calcularSomaBordas(matrizSoma);