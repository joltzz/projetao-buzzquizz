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

function chamarTelaDecidirNiveis() {
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
        chamarTelaPerguntasDoQuiz()
        renderizarCriacaoPerguntas();
        
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
        <article class="adiciona-a-pergunta">
            <div class="adicionar-pergunta" onclick="mostrarInputOutrasPerguntas(this, ${i})">
                <p>Pergunta ${i}</p>               
                <img src="./imagens/adicionarNivel.svg" onclick="editarPergunta(this)">               
            </div>
        </article>
        `;
    }
}
//Mostra os iputs das perguntas depois da primeira conforme o usuário clica na barra...
function mostrarInputOutrasPerguntas(ondeEstaSendoAdicionadosOsInputs, indiceIdentificador) {
    ondeEstaSendoAdicionadosOsInputs.removeAttribute("onclick")
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
        return true; //Aqui tem que ser 'false' está true apenas para agilizar os testes
    } else {
        return true;
    }
}

function validarCriacaoPerguntas() {
    for (let i = 1; i <= qtdPerguntas; i++) {
        console.log(i)
        try {
            let textoPergunta = document.querySelector(`#textoPergunta${i}`).value;
            let corPergunta = document.querySelector(`#corPergunta${i}`).value;
            let respostaCorreta = document.querySelector(`#respostaCorreta${i}`).value;
            let urlRespostaCorreta = document.querySelector(`#urlRespostaCorreta${i}`).value;
            let respostaIncorreta1 = document.querySelector(`#respostaIncorreta1${i}`).value;
            let urlRespostaIncorreta1 = document.querySelector(`#urlRespostaIncorreta1${i}`).value;
            let respostaIncorreta2 = document.querySelector(`#respostaIncorreta2${i}`).value;
            let urlRespostaIncorreta2 = document.querySelector(`#urlRespostaIncorreta2${i}`).value;
            let respostaIncorreta3 = document.querySelector(`#respostaIncorreta3${i}`).value;
            let urlRespostaIncorreta3 = document.querySelector(`#urlRespostaIncorreta3${i}`).value;
        } catch {
            let respostaIncorreta2 = '';
            let urlRespostaIncorreta2 = '';
            let respostaIncorreta3 = '';
            let urlRespostaIncorreta3 = '';
            return true; //Aqui tem que ser 'false' está true apenas para agilizar os testes
        }
        if (textoPergunta.length < 20 || corPergunta.length != 7 || corPergunta.indexOf("#") < 0 || respostaCorreta.length == 0 || urlRespostaCorreta.indexOf("https://") < 0 || urlRespostaCorreta.indexOf("http://") < 0 || respostaIncorreta1.length == 0 || urlRespostaIncorreta1.indexOf("https://") < 0 || urlRespostaIncorreta1.indexOf("http://") < 0) {
            return true; //Aqui tem que ser 'false' está true apenas para agilizar os testes
        } else if (respostaIncorreta2.length > 0 && (urlRespostaIncorreta2.indexOf("https://") < 0 || urlRespostaIncorreta2.indexOf("http://") < 0)) {
            return true; //Aqui tem que ser 'false' está true apenas para agilizar os testes
        } else if (respostaIncorreta3.length > 0 && (urlRespostaIncorreta3.indexOf("https://") < 0 || urlRespostaIncorreta3.indexOf("http://") < 0)) {
            return true; //Aqui tem que ser 'false' está true apenas para agilizar os testes
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


/*
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
*/

function criarNiveisQuizz() {
    if (validarCriacaoPerguntas()) {
        renderizarCriacaoNiveis();
        chamarTelaDecidirNiveis();
    } else {
        alert("Preencha os campos corretamente para continuar criando o seu Quizz.\n\nTexto da pergunta: no mínimo 20 caracteres\nCor de fundo: deve ser uma cor em hexadecimal (começar em '#', seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F)\nTextos das respostas: não pode estar vazio\nURL das imagens de resposta: deve ter formato de URL\nÉ obrigatória a inserção da resposta correta e de pelo menos 1 resposta errada. Portanto, é permitido existirem perguntas com só 2 ou 3 respostas")
    }
}



let qtdNiveis;
function renderizarCriacaoNiveis() {
    qtdNiveis = parseInt(document.querySelector(".criacao-de-quiz .info-basica .qtd-de-niveis").value);
    document.querySelector(".criacao-de-quiz .adicionar-nivel .inputs").innerHTML = '';
    let niveisHTML = document.querySelector(".criacao-de-quiz .area-de-inputs .inputs");
    for (let i = 0; i < qtdNiveis; i++) {
        niveisHTML.innerHTML += `
            <article class="area-de-inputs">
                <div>
                    <div class="adicionar-nivel">
                        <p>Nível 1</p>
                    </div>
                </div>
                <div>
                    <input id="tituloNivel${i + 1}" type="text" placeholder="Título do nível">
                    <input id="minAcertoNivel${i + 1}" type="text" placeholder="% de acerto mínima">
                    <input id="urlNivel${i + 1}" type="text" placeholder="URL da imagem do nível">
                    <textarea id="descricaoNivel${i + 1}" name="descrição" placeholder="Descrição do nível"></textarea>
                </div>
            </article>
        `;
        for (let i = 2; i <= qtdNiveis; i++){
            niveisHTML.innerHTML+=`
            <div>
                <h1>Nível ${i + 1}</h1>
                <img class="esconder" onclick="editarNivel(this)" src="./imagens/adicionarNivel.svg"> 
            </div>
            `
        }
    }
}

function validarCriacaoNiveis() {
    let validado=false;
    let minAcertoNivel0=0;
    for (let i=0;i<qtdNiveis;i++){
        let tituloNivel = document.querySelector(`tituloNivel${i}`).value;
        let minAcertoNivel = document.querySelector(`minAcertoNivel${i}`).value;
        let urlNivel = document.querySelector(`urlNivel${i}`).value;
        let descricaoNivel = document.querySelector(`descricaoNivel${i}`).value;

        if (tituloNivel.length < 10 || parseInt(minAcertoNivel)>=0 || parseInt(minAcertoNivel)<=100 || respostaCorreta.length==0 || (urlNivel.indexOf("https://") < 0 && urlNivel.indexOf("http://")) || descricaoNivel.length < 30) {
            validado = false;
        } else {
            validado = true;
        }
        if (`minAcertoNivel${i}`==0) {minAcertoNivel0+=1};
    }
    if (minAcertoNivel0>0) {validado=true};
    return validado;
}

function editarNivel(novoNivelSelecionado) {
    novoNivelSelecionado.parentNode.parentNode.querySelector("div:last-child").classList.add("nivel-selecionado nivel-atual")
    document.querySelectorAll(".criacao-niveis article>div:last-child").forEach((elemento) => {
        if (elemento.classList.contains("nivel-selecionado") && !elemento.classList.contains("nivel-atual")) {
            elemento.classList.toggle("esconder");
            elemento.parentNode.querySelector("img").classList.toggle("esconder");
        }
    })
}

