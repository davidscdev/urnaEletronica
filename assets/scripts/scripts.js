//Selecionando elementos de tela.
let telaCabecalho = document.querySelector('.tela--principal--esquerda--titulo span');
let telaCargo = document.querySelector('.tela--principal--esquerda--cargo span');
let telaNumeros = document.querySelector('.tela--principal--esquerda--numeros');
let telaDados = document.querySelector('.tela--principal--esquerda--dados');
let telaRodape = document.querySelector('.tela--rodape');
let telaDireita = document.querySelector('.tela--principal--direita');


let etapaAtual = 0;
let numeroDigitado = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual]; //Seleciona os itens da etapa usando a variável global.

    let numeroHTML = '';

    for (let index = 0; index < etapa.numeros; index++) {
        if (index === 0) {
            numeroHTML += '<div class="numero pisca"></div>';
        } else {
            numeroHTML += '<div class="numero"></div>';
        }
    }

    telaCabecalho.style.display = 'none';
    telaCargo.innerHTML = etapa.titulo;
    telaDados.innerHTML = ``;
    telaRodape.style.display = 'none';
    telaDireita.innerHTML = ``;
    telaNumeros.innerHTML = numeroHTML;
}

function clicou(n) {
    console.log('Eleitor clicou: ' + n);
    let elNumero = document.querySelector('.numero.pisca');
    elNumero.innerHTML = n;
    numeroDigitado = `${numeroDigitado}${n}`;

    elNumero.classList.remove('pisca');
    if (elNumero.nextElementSibling) {
        elNumero.nextElementSibling.classList.add('pisca');
    } else {
        atualizaInterface();
    }
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

function atualizaInterface() {

}

comecarEtapa();