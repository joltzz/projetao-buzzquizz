document.querySelector(".quizzes-criados ion-icon").onclick = function () { chamarTelaCriarQuizz() };
document.querySelector(".menu-criar-Quizz button").onclick = function () { chamarTelaCriarQuizz() };
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
};

function chamarTelaDecidirNiveis() {
    let teladecidirNiveis = document.querySelector("#tela3_3");
    let telaCriacaoPerguntas = document.querySelector(".criacao-perguntas");

    teladecidirNiveis.classList.toggle("esconder");
    telaCriacaoPerguntas.classList.toggle("esconder");
};

document.querySelector("#tela3_4 .voltar").onclick = function () { voltarHome() }
function voltarHome() {
    let telaFinalizar = document.querySelector("#tela3_4");
    let telaVoltarHome = document.querySelector("#tela1_2");
    let mostrarTodosOsQuizzesNaTela1 = document.querySelector("#tela1_1");
    let esconderVoceNaoCriouAlgumQuizz = document.querySelector("#tela1_1 .menu-criar-Quizz")

    telaFinalizar.classList.add("esconder");
    esconderVoceNaoCriouAlgumQuizz.classList.add("esconder")
    telaVoltarHome.classList.remove("esconder");
    mostrarTodosOsQuizzesNaTela1.classList.remove("esconder");

};



//Verificação das infos necessarias para criar as perguntas
function criarPerguntasQuizz() {
    if (validarInfoBasica()) {
        chamarTelaPerguntasDoQuiz();
        renderizarCriacaoPerguntas();

    } else {
        alert("Preencha os campos corretamente para continuar criando o seu Quizz.\n\nTítulo do quizz: deve ter no mínimo 20 e no máximo 65 caracteres\nURL da Imagem: deve ter formato de URL\nQuantidade de perguntas: no mínimo 3 perguntas\nQuantidade de níveis: no mínimo 2 níveis");
    }
};


//Renderizar as perguntas de acordo com a qtd selecionada no HTML
let qtdPerguntas = 0;
function renderizarCriacaoPerguntas() {
    qtdPerguntas = parseInt(document.querySelector(".criacao-de-quizz .info-basica .qtd-de-perguntas").value);
    construirObjetoQuestions(qtdPerguntas)
    // document.querySelector(".criacao-de-quizz .criacao-perguntas .area-de-inputs").innerHTML = '';
    let perguntasHTML = document.querySelector(".criacao-de-quizz .criacao-perguntas .area-de-inputs");
    perguntasHTML.innerHTML += `
        <article class="adiciona-a-pergunta" >
            <div class="adicionar-pergunta">
            <div class="ajusta-icone"
                <p>Pergunta 1</p>               
                <img src="./imagens/adicionarNivel.svg">    
            </div>           
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
        `;
    for (let i = 2; i <= qtdPerguntas; i++) {
        perguntasHTML.innerHTML += `
        <article class="adiciona-a-pergunta">
            <div class="adicionar-pergunta" onclick="removerEsconder(this)">
                <div class="ajusta-icone"
                    <p>Pergunta ${i}</p>               
                    <img src="./imagens/adicionarNivel.svg"> 
                </div>
                ${mostrarInputOutrasPerguntas(i)}
            </div>
        </article>
        `;
    }
}
//Mostra os iputs das perguntas depois da primeira conforme o usuário clica na barra...
function mostrarInputOutrasPerguntas(indiceIdentificador) {
    let texto = "";
    // ondeEstaSendoAdicionadosOsInputs.removeAttribute("onclick")
    texto += `
    <div class="todos-os-inputs esconder">
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
    `;
    return texto;
};

// Validação das infos basicas fornecidas 
function validarInfoBasica() {
    let tituloCriacaoQuizz = document.querySelector(".criacao-de-quizz .info-basica .titulo-criacao-quiz").value;
    let urlCriacaoQuizz = document.querySelector(".criacao-de-quizz .info-basica .url-criacao-quiz").value;
    let qtdDePerguntas = document.querySelector(".criacao-de-quizz .info-basica .qtd-de-perguntas").value;
    let qtdDeNiveis = document.querySelector(".criacao-de-quizz .info-basica .qtd-de-niveis").value;
    if (tituloCriacaoQuizz.length < 20 || tituloCriacaoQuizz.length > 65 || parseInt(qtdDePerguntas) < 3 || parseInt(qtdDeNiveis) < 2 || urlCriacaoQuizz.indexOf("https://") < 0 || verificarSeEhImagem(urlCriacaoQuizz) == false ) {
        return false; //Aqui tem que ser 'false'
    } else {
        return true;
    }
};

function validarCriacaoPerguntas() {
    let textoPergunta = null;
    let corPergunta = null;
    let respostaCorreta = null;
    let urlRespostaCorreta = null;
    let respostaIncorreta1 = null;
    let urlRespostaIncorreta1 = null;
    let respostaIncorreta2 = null;
    let urlRespostaIncorreta2 = null;
    let respostaIncorreta3 = null;
    let urlRespostaIncorreta3 = null;
    let variavelBooleanaIF = false;
    let existeResposta3 = false;
    let existeResposta4 = false;

    for (let i = 1; i <= qtdPerguntas; i++) {
        try {
            textoPergunta = document.querySelector(`#textoPergunta${i}`).value;
            corPergunta = document.querySelector(`#corPergunta${i}`).value;
            respostaCorreta = document.querySelector(`#respostaCorreta${i}`).value;
            urlRespostaCorreta = document.querySelector(`#urlRespostaCorreta${i}`).value;
            respostaIncorreta1 = document.querySelector(`#respostaIncorreta1${i}`).value;
            urlRespostaIncorreta1 = document.querySelector(`#urlRespostaIncorreta1${i}`).value;
            respostaIncorreta2 = document.querySelector(`#respostaIncorreta2${i}`).value;
            urlRespostaIncorreta2 = document.querySelector(`#urlRespostaIncorreta2${i}`).value;
            respostaIncorreta3 = document.querySelector(`#respostaIncorreta3${i}`).value;
            urlRespostaIncorreta3 = document.querySelector(`#urlRespostaIncorreta3${i}`).value;
        } catch {
            respostaIncorreta2 = '';
            urlRespostaIncorreta2 = '';
            respostaIncorreta3 = '';
            urlRespostaIncorreta3 = '';
            // return false; //Aqui talvez seja necessário ter uma variável booleana também!
        }


        if (textoPergunta.length < 20 || corPergunta.length != 7 || corPergunta.indexOf("#") < 0 || ehHexadecimal(corPergunta) == false) {
            variavelBooleanaIF = false //Aqui tem que ser 'false' está true apenas para agilizar os testes

        } else if (respostaCorreta.length == 0 || urlRespostaCorreta.indexOf("https://") < 0 || verificarSeEhImagem(urlRespostaCorreta) == false) {
            variavelBooleanaIF = false //Aqui tem que ser 'false' está true apenas para agilizar os testes

        } else if (respostaIncorreta1.length == 0 || urlRespostaIncorreta1.indexOf("https://") < 0 || verificarSeEhImagem(urlRespostaIncorreta1) == false) {
            variavelBooleanaIF = false; //Aqui tem que ser 'false' está true apenas para agilizar os testes
        } else if (respostaIncorreta2.length > 0) {
            existeResposta3 = true;
            if (urlRespostaIncorreta2.indexOf("https://") < 0 || verificarSeEhImagem(urlRespostaIncorreta2) == false) {
                variavelBooleanaIF = false; //Aqui tem que ser 'false' está true apenas para agilizar os testes
                alert("Você acionou a terceira resposta mas não colocou um url válido para a imagem")
            }
        } else if (respostaIncorreta3.length > 0) {
            existeResposta4 = true;
            if (urlRespostaIncorreta3.indexOf("https://") < 0 || verificarSeEhImagem(urlRespostaIncorreta3) == false) {
                variavelBooleanaIF = false; //Aqui tem que ser 'false' está true apenas para agilizar os testes
                alert("Você acionou a quarta resposta mas não colocou um url válido para a imagem")
            }
        } else {
            variavelBooleanaIF = true;
        }


        if (variavelBooleanaIF == true) {
            questions[i - 1].title = textoPergunta;
            questions[i - 1].color = corPergunta;
            questions[i - 1].answers.push({
                text: respostaCorreta,
                image: urlRespostaCorreta,
                isCorrectAnswer: true
            })
            questions[i - 1].answers.push({
                text: respostaIncorreta1,
                image: urlRespostaIncorreta1,
                isCorrectAnswer: false
            })

            if (existeResposta3 == true) {
                questions[i - 1].answers.push({
                    text: respostaIncorreta2,
                    image: urlRespostaIncorreta2,
                    isCorrectAnswer: false
                })
            }
            if (existeResposta4 == true) {
                questions[i - 1].answers.push({
                    text: respostaIncorreta3,
                    image: urlRespostaIncorreta3,
                    isCorrectAnswer: false
                })
            }
        }
        if (variavelBooleanaIF == false) { //Se, em alguma iteração, a variavelbolleana se tornar false, ela retorna esse false e para o for
            return false
        }
    }
    
    return variavelBooleanaIF; //se tudo der certo, ela retorna o valor da variavelbooleana que deve ser true
}

function criarNiveisQuizz(variavelqualquer) {
    if (validarCriacaoPerguntas() == true) {
        renderizarCriacaoNiveis();
        chamarTelaDecidirNiveis();
    } else {
        alert("Preencha os campos corretamente para continuar criando o seu Quizz.\n\nTexto da pergunta: no mínimo 20 caracteres\nCor de fundo: deve ser uma cor em hexadecimal (começar em '#', seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F)\nTextos das respostas: não pode estar vazio\nURL das imagens de resposta: deve ter formato de URL\nÉ obrigatória a inserção da resposta correta e de pelo menos 1 resposta errada. Portanto, é permitido existirem perguntas com só 2 ou 3 respostas");
    }
}

let qtdNiveis = 0;
function renderizarCriacaoNiveis() {
    qtdNiveis = parseInt(document.querySelector(".criacao-de-quizz .info-basica .qtd-de-niveis").value);
    construirObjetoNiveis(qtdNiveis)
    let niveisHTML = document.querySelector("#tela3_3 .adiciona-nivel");
    niveisHTML.innerHTML = `
        <div id="nivel1" class="area-de-inputs">
            <div class="adicionar-nivel">
                <p>Nível 1</p>
            </div>
            <div class="todos-os-inputs">
                <input type="text" id="tituloNivel1" placeholder="Título do nível">
                <input type="text" id="minAcertoNivel1" placeholder="% de acerto mínima">
                <input type="text" id="urlNivel1" placeholder="URL da imagem do nível">
                <textarea name="" id="descricaoNivel1" class="area-de-texto" placeholder="Descrição do nível"></textarea>
            </div>
        </div>
    `;

    for (let i = 2; i <= qtdNiveis; i++) {
        niveisHTML.innerHTML += `
        <div id="nivel${i}" class="area-de-inputs" onclick="removerEsconder(this)">
            <div class="adicionar-nivel">
                <p>Nível ${i}</p>
                <img src="./imagens/adicionarNivel.svg">  
            </div>
            ${mostrarInputOutrosNiveis(i)}
        </div>
        `;
    };
};

function mostrarInputOutrosNiveis(indiceIdentificador) {
    let texto = `
    <div class="todos-os-inputs esconder">
        <input type="text" id="tituloNivel${indiceIdentificador}" placeholder="Título do nível">
        <input type="text" id="minAcertoNivel${indiceIdentificador}" placeholder="% de acerto mínima">
        <input type="text" id="urlNivel${indiceIdentificador}" placeholder="URL da imagem do nível">
        <textarea name="" id="descricaoNivel${indiceIdentificador}" class="area-de-texto" placeholder="Descrição do nível"></textarea>
    </div>
    `;
    return texto;
};

function validarCriacaoNiveis() {
    let validado = false;
    let algumNivelTemMinAcertoZero = false;
    let tituloNivel = null;
    let minAcertoNivel = null;
    let urlNivel = null;
    let descricaoNivel = null;
    for (let i = 1; i <= qtdNiveis; i++) {
        try {
            tituloNivel = document.querySelector(`#tituloNivel${i}`).value;
            minAcertoNivel = document.querySelector(`#minAcertoNivel${i}`).value;
            urlNivel = document.querySelector(`#urlNivel${i}`).value;
            descricaoNivel = document.querySelector(`#descricaoNivel${i}`).value;
        } catch {
            tituloNivel = "";
            minAcertoNivel = "";
            urlNivel = "";
            descricaoNivel = "";
        }

        if (tituloNivel.length < 10 || parseInt(minAcertoNivel) < 0 || parseInt(minAcertoNivel) > 100 || (urlNivel.indexOf("https://") < 0) || descricaoNivel.length < 30  || verificarSeEhImagem(urlNivel) == false) {
            validado = false; //Aqui tem que ser 'false'
        } else {
            validado = true;
        }

        if (minAcertoNivel == 0) { //aqui ele pode estar fazendo uma conversão de string para nº
            algumNivelTemMinAcertoZero = true;
        };

        if (validado == true) {
            levels[i - 1].title = tituloNivel;
            levels[i - 1].image = urlNivel;
            levels[i - 1].text = descricaoNivel;
            levels[i - 1].minValue = minAcertoNivel;
        } else {
            return false;
        }
    }
    if (algumNivelTemMinAcertoZero == true && validado == true) {
        validado = true;
    } else {
        return false;
    };

    return validado //se ele nao cair em nenhum return false, o 'validado' estará verdadeiro e ele retorna verdadeiro
}

document.querySelector("#tela3_3 button").onclick = function () { finalizarCriacaoQuizz(); };
function finalizarCriacaoQuizz() {
    if (validarCriacaoNiveis() == true) {
        funcaoEnviarQuizzesParaOServidor()
    } else {
        alert("Preencha os campos corretamente para continuar criando o seu Quizz.\n\nTítulo do nível: mínimo de 10 caracteres\n% de acerto mínima: um número entre 0 e 100\nURL da imagem do nível: deve ter formato de URL\nDescrição do nível: mínimo de 30 caracteres\nÉ obrigatório existir pelo menos 1 nível cuja % de acerto mínima seja 0%");
    }
};

function mostrarPaginaFinal(respostaComandoPost) {
    document.querySelector("#tela3_3").classList.add("esconder");
    document.querySelector(".finalizar-quizz").classList.remove("esconder");
    qtdPerguntas = 0;
    qtdNiveis = 0;

    let respostaDoId = respostaComandoPost.data.id

    console.log("esta eh a resposta do post: ", respostaComandoPost)
    console.log("esta eh a resposta do id do post: " +  respostaDoId)

    salvarInformacoesNoNavegadorDoUsuario(respostaDoId)
}

//Algumas funções usadas nas validações do criar quizz
function removerEsconder(deOnde) {
    deOnde.querySelector(".todos-os-inputs").classList.remove("esconder");
}
function ehHexadecimal(stringCor) {
    stringCor = stringCor.replace("#", "");
    return /^[A-F0-9]+$/i.test(stringCor);
}
function verificarSeEhImagem(stringUrl){
    if(stringUrl.indexOf(".jpeg") || stringUrl.indexOf(".jpg") || stringUrl.indexOf(".png") || stringUrl.indexOf(".gif") || stringUrl.indexOf(".tiff") || stringUrl.indexOf(".bmp")){
        return true;
    } else {
        return false;
    }

}