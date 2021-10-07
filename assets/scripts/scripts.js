//Selecionando elementos de tela.
let telaCabecalho = document.querySelector('.tela--principal--esquerda--titulo span');
let telaTitulo = document.querySelector('.tela--principal--esquerda--cargo span');
let telaNumeros = document.querySelector('.tela--principal--esquerda--numeros');
let telaDados = document.querySelector('.tela--principal--esquerda--dados');
let telaRodape = document.querySelector('.tela--rodape');
let telaDireita = document.querySelector('.tela--principal--direita');

function clicou(n) {
    console.log('Eleitor clicou: ' + n);
}

function branco() {
    console.log('BRANCO CLICADO');
}

function corrige() {
    console.log('CORRIGE CLICADO');
}

function confirma() {
    console.log('CONFIRMA CLICADO');
}