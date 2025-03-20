// Atividades:

// 1: Crie uma função que recebe um array de números e retorna a soma de todos os elementos.
function exercicio1(){
    let num = [1, 5, 8, 9]
    let soma = (num[1] + num[2] + num[3] + num[0])
    console.log(soma)
}
exercicio1()



// 2: Crie uma função que recebe um array de strings e retorna um novo array com as strings em ordem alfabética.
function exercicio2(){
    let listaDes = ["z", "t", "a", "c"]
    let listaOrd = listaDes.sort();
    console.log(listaOrd);
}
exercicio2()




// 3: Crie uma função que recebe um array e retorna um novo array sem elementos duplicados.

function exercicio3(){
    let listaDup = ["z", "t", "a", "c", "t", "z"]
    // new Set(listaDup): Cria um novo objeto Set a partir do array listaDup. 
    // Um Set é uma coleção de valores únicos, ou seja, remove automaticamente os elementos duplicados.
    let listaNum = [... new Set (listaDup)];
    //[... ]: O operador spread (...) é usado para converter o Set de volta em um array.
    //O resultado é que listaNum será um novo array contendo apenas os elementos únicos de listaDup.
    console.log("lista com repetidos: ",listaDup);
    console.log("lista sem repetidos: ",listaNum);
}
exercicio3()