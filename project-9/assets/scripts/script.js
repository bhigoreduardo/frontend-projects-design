function newAluno(nome, turma, n1, n2) {
    this.nome = nome,
        this.turma = turma,
        this.notas = [n1, n2],
        this.media = calcMed(this.notas),
        this.situacao = condMed(this.media)
};

function calcMed(notas) {
    return (notas[0] + notas[1]) / 2;
};

function condMed(media) {
    if (media >= 7) {
        return 'APROVADO';
    }
    return 'REPROVADO';
};

let inputNome = document.querySelector('#input-name');
let inputTurma = document.querySelector('#input-turma');
let inputNota1 = document.querySelector('#input-n1');
let inputNota2 = document.querySelector('#input-n2');
let inputSearchTurma = document.querySelector('#search-turma');

let inputTurma1 = [[], []];
let inputTurma2 = [[], []];
let inputTurma3 = [[], []];

function subscribe() {
    let aluno = new newAluno(inputNome.value, inputTurma.value, parseFloat(inputNota1.value), parseFloat(inputNota2.value));

    switch (inputTurma.value) {
        case '1A':
            inputTurma1[0].push(aluno);
            break;
        case '1B':
            inputTurma1[1].push(aluno);
            break;
        case '2A':
            inputTurma2[0].push(aluno);
            break;
        case '2B':
            inputTurma2[1].push(aluno);
            break;
        case '3A':
            inputTurma3[0].push(aluno);
            break;
        case '3B':
            inputTurma3[1].push(aluno);
            break;
        default:
            alert('Turma cadastrada inválida, por favor reveja os dados e tente novamente!');
            break;
    }

};

function registerClass() {
    localStorage.setItem('JSONTurma1', JSON.stringify(inputTurma1));
    localStorage.setItem('JSONTurma2', JSON.stringify(inputTurma2));
    localStorage.setItem('JSONTurma3', JSON.stringify(inputTurma3));
};

function showClass() {
    let objTurma1 = JSON.parse(localStorage.getItem('JSONTurma1'));
    let objTurma2 = JSON.parse(localStorage.getItem('JSONTurma2'));
    let objTurma3 = JSON.parse(localStorage.getItem('JSONTurma3'));

    switch (inputSearchTurma.value) {
        case '1A':
            showAlunos(objTurma1[0]);
            break;
        case '1B':
            showAlunos(objTurma1[1]);
            break;
        case '2A':
            showAlunos(objTurma2[0]);
            break;
        case '2B':
            showAlunos(objTurma2[1]);
            break;
        case '3A':
            showAlunos(objTurma3[0]);
            break;
        case '3B':
            showAlunos(objTurma3[1]);
            break;
        default:
            alert('Turma solicitada inválida, por favor reveja os dados e tente novamente!');
            break;
    }

};

function showAlunos(turma) {
    let showTurma = document.querySelector('#show-turma');
    showTurma.innerHTML = '';

    turma.forEach(aluno => {
        showTurma.innerHTML += `<p><strong>Nome: </strong>${aluno.nome}</p>`;
        showTurma.innerHTML += `<p><strong>Turma: </strong>${aluno.turma}</p>`;
        showTurma.innerHTML += `<p><strong>Nota 1: </strong>${aluno.notas[0]}</p>`;
        showTurma.innerHTML += `<p><strong>Nota 2: </strong>${aluno.notas[1]}</p>`;
        showTurma.innerHTML += `<p><strong>Média: </strong>${aluno.media}</p>`;
        showTurma.innerHTML += `<p><strong>Situação: </strong>${aluno.situacao}</p><br>`;
    });
};