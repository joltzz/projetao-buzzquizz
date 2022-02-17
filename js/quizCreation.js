document.querySelector(".quizzes-criados ion-icon").onclick = function () { chamarTelaCriarQuizz() }
document.querySelector(".menu-criar-Quizz button").onclick = function () { chamarTelaCriarQuizz() }
function chamarTelaCriarQuizz() {
    let telaUmPontoUM = document.querySelector("#tela1_1");
    let telaUmPontoDoin = document.querySelector("#tela1_2");
    let telasTresPontoUmETresPontoDois = document.querySelector("#tela3_1-2");

    telaUmPontoUM.classList.add("esconder");
    telaUmPontoDoin.classList.add("esconder");
    telasTresPontoUmETresPontoDois.classList.remove("esconder");
}

function chamarTelaPerguntasDoQuiz() {
    let telaCriacaoPerguntas = document.querySelector(".criacao-perguntas");
    let telaCriacaoComecePeloComeco = document.querySelector(".info-basica");

    telaCriacaoPerguntas.classList.toggle("esconder");
    telaCriacaoComecePeloComeco.classList.toggle("esconder");
}

document.querySelector(".criacao-perguntas button").onclick = function () { chamarTelaDecidirNiveis() }
function chamarTelaDecidirNiveis() {
    // Antes dess funcao ser executada será necessário a validação da tela anterior
    console.log("esta chamando a funcao")
    let teladecidirNiveis = document.querySelector("#tela3_3");
    let telaCriacaoPerguntas = document.querySelector(".criacao-perguntas");

    teladecidirNiveis.classList.toggle("esconder");
    telaCriacaoPerguntas.classList.toggle("esconder");
}

document.querySelector(".info-nivel button").onclick = function () { finalizarQuizz() }
function finalizarQuizz() {
    let teladecidirNiveis = document.querySelector("#tela3_3");
    let telaQuizzPronto = document.querySelector(".finalizar-Quizz");
    //AQUI TEM QUE ENVIAR O QUIZZ PARA O SERVIDOR

    telaQuizzPronto.classList.toggle("esconder");
    teladecidirNiveis.classList.toggle("esconder");
}

document.querySelector("#tela3_4 .voltar").onclick = function () { voltarHome() }
function voltarHome() {
    let telaFinalizar = document.querySelector("#tela3_4");
    let telaVoltarHome = document.querySelector("#tela1_2");
    //AQUI TEM QUE ENVIAR O QUIZZ PARA O SERVIDOR

    telaFinalizar.classList.toggle("esconder");
    telaVoltarHome.classList.toggle("esconder");
}



//Verificação das infos necessarias para criar as perguntas
function criarPerguntasQuizz() {
    if (validarInfoBasica()) {
        renderizarCriacaoPerguntas();
        chamarTelaPerguntasDoQuiz()
    } else {
        alert("Preencha os campos corretamente para continuar criando o seu Quizz.\n\nTítulo do quizz: deve ter no mínimo 20 e no máximo 65 caracteres\nURL da Imagem: deve ter formato de URL\nQuantidade de perguntas: no mínimo 3 perguntas\nQuantidade de níveis: no mínimo 2 níveis")
    }
}


//Renderizar as perguntas de acordo com a qtd selecionada no HTML
let qtdPerguntas = 0;
function renderizarCriacaoPerguntas() {
    qtdPerguntas = parseInt(document.querySelector(".criacao-de-quizz .info-basica .qtd-de-perguntas").value);
    // document.querySelector(".criacao-de-quizz .criacao-perguntas .area-de-inputs").innerHTML = '';
    let perguntasHTML = document.querySelector(".criacao-de-quizz .criacao-perguntas .area-de-inputs");
    perguntasHTML.innerHTML += `
        <article class="adiciona-a-pergunta" >
            <div class="adicionar-pergunta">
                <p>Pergunta 1</p>               
                <img src="./imagens/adicionarNivel.svg" onclick="editarPergunta(this)">               
            </div>
            <div class="">
                <input id="textoPergunta1" type="text" placeholder="Texto da pergunta">
                <input id="corPergunta1" type="text" placeholder="Cor de fundo da pergunta">
                    <h1>Resposta correta</h1>
                <input id="respostaCorreta1" type="text" placeholder="Resposta correta">
                <input id="urlRespostaCorreta1" type="text" placeholder="URL da imagem">
                    <h1>Respostas incorretas</h1>
                <input id="respostaIncorreta11" type="text" placeholder="Resposta incorreta 1">
                <input id="urlRespostaIncorreta11" type="text" placeholder="URL da imagem 1">
                <input id="respostaIncorreta21" type="text" placeholder="Resposta incorreta 2">
                <input id="urlRespostaIncorreta21" type="text" placeholder="URL da imagem 2">
                <input id="respostaIncorreta31" type="text" placeholder="Resposta incorreta 3">
                <input id="urlRespostaIncorreta31" type="text" placeholder="URL da imagem 3">
            </div>
        </article>
        `
    for (let i = 2; i <= qtdPerguntas; i++) {
        perguntasHTML.innerHTML += `
        <article class="adiciona-a-pergunta" onclick="mostrarInputOutrasPerguntas(this, ${i})">
            <div class="adicionar-pergunta">
                <p>Pergunta ${i}</p>               
                <img src="./imagens/adicionarNivel.svg" onclick="editarPergunta(this)">               
            </div>
        </article>
        `;
    }
}
//Mostra os iputs das perguntas depois da primeira conforme o usuário clica na barra...
function mostrarInputOutrasPerguntas(ondeEstaSendoAdicionadosOsInputs, indiceIdentificador) {
    ondeEstaSendoAdicionadosOsInputs.innerHTML += `
    <div class="">
        <input id="textoPergunta${indiceIdentificador}" type="text" placeholder="Texto da pergunta">
        <input id="corPergunta${indiceIdentificador}" type="text" placeholder="Cor de fundo da pergunta">
            <h1>Resposta correta</h1>
        <input id="respostaCorreta${indiceIdentificador}" type="text" placeholder="Resposta correta">
        <input id="urlRespostaCorreta${indiceIdentificador}" type="text" placeholder="URL da imagem">
            <h1>Respostas incorretas</h1>
        <input id="respostaIncorreta1${indiceIdentificador}" type="text" placeholder="Resposta incorreta 1">
        <input id="urlRespostaIncorreta1${indiceIdentificador}" type="text" placeholder="URL da imagem 1">
        <input id="respostaIncorreta2${indiceIdentificador}" type="text" placeholder="Resposta incorreta 2">
        <input id="urlRespostaIncorreta2${indiceIdentificador}" type="text" placeholder="URL da imagem 2">
        <input id="respostaIncorreta2${indiceIdentificador}" type="text" placeholder="Resposta incorreta 3">
        <input id="urlRespostaIncorreta3${indiceIdentificador}" type="text" placeholder="URL da imagem 3">
    </div>
    `
}

// Validação das infos basicas fornecidas 
function validarInfoBasica() {
    let tituloCriacaoQuizz = document.querySelector(".criacao-de-quizz .info-basica .titulo-criacao-quiz").value;
    let urlCriacaoQuizz = document.querySelector(".criacao-de-quizz .info-basica .url-criacao-quiz").value;
    let qtdDePerguntas = document.querySelector(".criacao-de-quizz .info-basica .qtd-de-perguntas").value;
    let qtdDeNiveis = document.querySelector(".criacao-de-quizz .info-basica .qtd-de-niveis").value;
    if (tituloCriacaoQuizz.length < 20 || tituloCriacaoQuizz.length > 65 || parseInt(qtdDePerguntas) < 3 || parseInt(qtdDeNiveis) < 2 || (urlCriacaoQuizz.indexOf("https://") < 0 && urlCriacaoQuizz.indexOf("http://") < 0)) {
        return false;
    } else {
        return true;
    }
}

function validarCriacaoPerguntas() {
    for (let i = 0; i < qtdPerguntas; i++) {
        console.log(i)
        try {
            let textoPergunta = document.getElementById(`textoPergunta${i}`).value;
            let corPergunta = document.getElementById(`corPergunta${i}`).value;
            let respostaCorreta = document.getElementById(`respostaCorreta${i}`).value;
            let urlRespostaCorreta = document.getElementById(`urlRespostaCorreta${i}`).value;
            let respostaIncorreta1 = document.getElementById(`respostaIncorreta1${i}`).value;
            let urlRespostaIncorreta1 = document.getElementById(`urlRespostaIncorreta1${i}`).value;
            let respostaIncorreta2 = document.getElementById(`respostaIncorreta2${i}`).value;
            let urlRespostaIncorreta2 = document.getElementById(`urlRespostaIncorreta2${i}`).value;
            let respostaIncorreta3 = document.getElementById(`respostaIncorreta3${i}`).value;
            let urlRespostaIncorreta3 = document.getElementById(`urlRespostaIncorreta3${i}`).value;
        } catch {
            let respostaIncorreta2 = '';
            let urlRespostaIncorreta2 = '';
            let respostaIncorreta3 = '';
            let urlRespostaIncorreta3 = '';
            return false;
        }
        if (textoPergunta.length < 20 || corPergunta.length != 7 || corPergunta.indexOf("#") < 0 || respostaCorreta.length == 0 || urlRespostaCorreta.indexOf("https://") < 0 || urlRespostaCorreta.indexOf("http://") < 0 || respostaIncorreta1.length == 0 || urlRespostaIncorreta1.indexOf("https://") < 0 || urlRespostaIncorreta1.indexOf("http://") < 0) {
            return false;
        } else if (respostaIncorreta2.length > 0 && (urlRespostaIncorreta2.indexOf("https://") < 0 || urlRespostaIncorreta2.indexOf("http://") < 0)) {
            return false;
        } else if (respostaIncorreta3.length > 0 && (urlRespostaIncorreta3.indexOf("https://") < 0 || urlRespostaIncorreta3.indexOf("http://") < 0)) {
            return false;
        } else {
            return true;
        }
    }
}

function finalizarCriacaoQuizz() {
    if (validarCriacaoNiveis()) {
        alert("Preencha os campos corretamente para continuar criando o seu Quizz.\n\nTítulo do nível: mínimo de 10 caracteres\n% de acerto mínima: um número entre 0 e 100\nURL da imagem do nível: deve ter formato de URL\nDescrição do nível: mínimo de 30 caracteres\nÉ obrigatório existir pelo menos 1 nível cuja % de acerto mínima seja 0%")
    } else {
        document.querySelector(".criacao-niveis").classList.add("esconder");
        document.querySelector(".finalizar-criacao-quiz").classList.remove("esconder");
        qtdPerguntas = '';
        qtdNiveis = '';
    }
}

//Verficação caso queira adicionar uma nova pergunta, além das 3
function editarPergunta(perguntaSelecionada) {
    perguntaSelecionada.parentNode.querySelector("div:last-child").classList.add("pergunta-selecionada")
    document.querySelectorAll(".criacao-perguntas article>div:last-child").forEach((elemento) => {
        if (elemento.classList.contains("pergunta-selecionada") && !elemento.classList.contains("pergunta-atual")) {
            elemento.classList.toggle("esconder");
            elemento.parentNode.querySelector("img").classList.toggle("esconder");
        }
    })
}



// *********************************************************************************
// Aqui estou comecando a mexer nas validações dos níveis e nas condicoes para ficar 
// com comportamento semelhante ao das perguntas 
// *********************************************************************************
document.querySelector("#nivel2").onclick = function () { adicionarnivel("#nivel2") };
document.querySelector("#nivel3").onclick = function () { adicionarnivel("#nivel3") };
function adicionarnivel(nivel) {
    let conteudo = document.querySelector(nivel);
    conteudo.innerHTML += `
    <div class="area-de-inputs">
                <input type="text" placeholder="Título do nível">
                <input type="text" placeholder="% de acerto mínima">
                <input type="text" placeholder="URL da imagem do nível">
                <textarea name="" id="" class="area-de-texto" placeholder="Descrição do nível"></textarea>
            </div>
    `
    document.querySelector(nivel).onclick = ""
}



