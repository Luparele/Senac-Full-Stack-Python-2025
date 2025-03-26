//fazer Classe Disciplina (nome, código, alunosMatriculados)
//usando Métodos: matricularAluno(), gerarBoletim()

class Disciplina {
    constructor (nome, codigo, alunosMatriculados, professor) {
        this.nome = nome;
        this.codigo = codigo;
        this.alunosMatriculados = alunosMatriculados;
        this.professor = professor;
    }  
    matricularAluno(disciplina, aluno) {
        disciplina.alunosMatriculados.push(aluno);
        console.log("Aluno matriculado com sucesso!");
    }
    gerarBoletim(disciplina) {
        let media = 0;
        for (let i = 0; i < disciplina.alunosMatriculados.length; i++) {
            media += disciplina.alunosMatriculados[i].nota;
        }
        media /= disciplina.alunosMatriculados.length;
        console.log("Boletim gerado com sucesso!");
        return media;
    }
    vincularProfessor(disciplina, professor) {
        disciplina.professor = professor;
        console.log("Professor vinculado com sucesso!");
    }
}
const disciplina1 = new Disciplina("Matemática", "123", []);
const disciplina2 = new Disciplina("Português", "456", []);
const disciplina3 = new Disciplina("Inglês", "789", []);

const aluno1 = {nome: "Eduardo", nota: 8};
const aluno2 = {nome: "Iago", nota: 9};
const aluno3 = {nome: "Thaiza", nota: 7};
const aluno4 = {nome: "Andrei", nota: 6};
const aluno5 = {nome: "Artur", nota: 5};

const professor1 = {nome: "Prof. João", disciplina: disciplina1};
const professor2 = {nome: "Prof. Maria", disciplina: disciplina2};
const professor3 = {nome: "Prof. Pedro", disciplina: disciplina3};

disciplina1.matricularAluno(disciplina1, aluno1);
disciplina2.matricularAluno(disciplina2, aluno2);
disciplina3.matricularAluno(disciplina3, aluno3);
disciplina1.matricularAluno(disciplina1, aluno4);
disciplina2.matricularAluno(disciplina2, aluno5);

const media1 = disciplina1.gerarBoletim(disciplina1);
const media2 = disciplina2.gerarBoletim(disciplina2);
const media3 = disciplina3.gerarBoletim(disciplina3);

for (const aluno of disciplina1.alunosMatriculados) {
    console.log("Aluno matriculado na disciplina 1: " + aluno.nome);
}
for (const aluno of disciplina2.alunosMatriculados) {
    console.log("Aluno matriculado na disciplina 2: " + aluno.nome);
}
for (const aluno of disciplina3.alunosMatriculados) {
    console.log("Aluno matriculado na disciplina 3: " + aluno.nome);
}

disciplina1.vincularProfessor(disciplina1, professor1);
disciplina2.vincularProfessor(disciplina2, professor2);
disciplina3.vincularProfessor(disciplina3, professor3);

console.log("Professor da disciplina " + disciplina1.nome + ": " + disciplina1.professor.nome);
console.log("Professor da disciplina " + disciplina2.nome + ": " + disciplina2.professor.nome);
console.log("Professor da disciplina " + disciplina3.nome + ": " + disciplina3.professor.nome);

console.log("Média da disciplina 1: " + media1);
console.log("Média da disciplina 2: " + media2);
console.log("Média da disciplina 3: " + media3);

console.log("Média geral: " + (media1 + media2 + media3) / 3);

console.log("Quantidade de alunos matriculados na disciplina 1: " + disciplina1.alunosMatriculados.length);
console.log("Quantidade de alunos matriculados na disciplina 2: " + disciplina2.alunosMatriculados.length);
console.log("Quantidade de alunos matriculados na disciplina 3: " + disciplina3.alunosMatriculados.length);

console.log("Quantidade de alunos matriculados em todas as disciplinas: " + (disciplina1.alunosMatriculados.length + disciplina2.alunosMatriculados.length + disciplina3.alunosMatriculados.length));