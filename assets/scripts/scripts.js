//Selecionando elementos de tela.
let telaCabecalho = document.querySelector('.tela--principal--esquerda--titulo span');
let telaCargo = document.querySelector('.tela--principal--esquerda--cargo span');
let telaNumeros = document.querySelector('.tela--principal--esquerda--numeros');
let telaDados = document.querySelector('.tela--principal--esquerda--dados');
let telaRodape = document.querySelector('.tela--rodape');
let telaDireita = document.querySelector('.tela--principal--direita');


let etapaAtual = 0;
let numeroDigitado = '';
let votoBranco = false;

function comecarEtapa() {
    let etapa = etapas[etapaAtual]; //Seleciona os itens da etapa usando a variável global.
    numeroDigitado = '';
    votoBranco = false;
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
    votoBranco = true;
    telaCabecalho.style.display = 'block';
    telaDados.innerHTML = `<div class="aviso--grande pisca">VOTO EM BRANCO</div>`;
    telaNumeros.style.display = 'none';
    telaRodape.style.display = 'block';
}

function corrige() {
    console.log('CORRIGE CLICADO');
    comecarEtapa();
}

function confirma() {
    console.log('CONFIRMA CLICADO');

    let votoConfirmado = false;

    if (votoBranco) {
        console.log('Voto confirmado: BRANCO.')
        votoConfirmado = true;
    } else if (numeroDigitado.length > 1) {
        console.log(`Voto confirmado: ${numeroDigitado}`)
        votoConfirmado = true;
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        } else {
            document.querySelector('.tela').innerHTML = `<div class="aviso--gigante pisca">FIM</div>`;
        }
    }
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numeroDigitado) {
            return true;
        } else {
            return false;
        }
    });

    if (candidato.length > 0) {
        candidato = candidato[0];
        telaCabecalho.style.display = 'block';
        telaDados.innerHTML = `Nome: ${candidato.nome}. <br> Partido: ${candidato.partido}.`;
        telaRodape.style.display = 'block';
        let fotosHTML = ``;

        for (let i in candidato.fotos) {

            if (!candidato.fotos[i].small) {
                fotosHTML += `<div class="tela--principal--direita--imagem">
                <img src="assets/imagens/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda}
            </div>`
            } else {
                fotosHTML += `<div class="tela--principal--direita--imagem pequeno">
            <img src="assets/imagens/${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda}
        </div>`;
            }
        }

        telaDireita.innerHTML = fotosHTML;
    } else {
        telaCabecalho.style.display = 'block';
        telaDados.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`;
        telaRodape.style.display = 'block';
    }
    console.log("Candidato:", candidato);
}

comecarEtapa();