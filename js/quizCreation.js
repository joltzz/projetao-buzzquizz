document.querySelector(".quizzes-criados ion-icon").onclick = function () { chamarTelaCriarQuizz() }
document.querySelector("#pergunta2 img").onclick = function () { adicionaPergunta2() }
document.querySelector("#pergunta3 img").onclick = function () { adicionaPergunta3() }

function chamarTelaCriarQuizz() {
    let telaUmPontoUM = document.querySelector("#tela1_1");
    let telaUmPontoDoin = document.querySelector("#tela1_2");
    let telasTresPontoUmETresPontoDois = document.querySelector("#tela3_1-2");

    telaUmPontoUM.classList.toggle("esconder");
    telaUmPontoDoin.classList.toggle("esconder");
    telasTresPontoUmETresPontoDois.classList.toggle("esconder");
}

document.querySelector(".info-basica button").onclick = function () { chamarTelaPerguntasDoQuiz() }
function chamarTelaPerguntasDoQuiz() {
    let telaCriacaoPerguntas = document.querySelector(".criacao-perguntas");
    let telaCriacaoComecePeloComeco = document.querySelector(".info-basica");

    telaCriacaoPerguntas.classList.toggle("esconder");
    telaCriacaoComecePeloComeco.classList.toggle("esconder");
}

document.querySelector(".criacao-perguntas button").onclick = function () { chamarTelaDecidirNiveis() }
function chamarTelaDecidirNiveis() {
    let teladecidirNiveis = document.querySelector("#tela3_3");
    let telaCriacaoPerguntas = document.querySelector(".criacao-perguntas");

    teladecidirNiveis.classList.toggle("esconder");
    telaCriacaoPerguntas.classList.toggle("esconder");
}

document.querySelector(".info-nivel button").onclick = function () { finalizarQuizz() }
function finalizarQuizz() {
    let teladecidirNiveis = document.querySelector("#tela3_3");
    let telaQuizzPronto = document.querySelector(".finalizar-Quizz");

    telaQuizzPronto.classList.toggle("esconder");
    teladecidirNiveis.classList.toggle("esconder");
}


document.querySelector("#pergunta2").onclick = function () { adicionarPerguntas("#pergunta2", 2) };
document.querySelector("#pergunta3").onclick = function () { adicionarPerguntas("#pergunta3", 3) };

function adicionarPerguntas(pergunta, numero) {
    let localAdicionarPergunta = document.querySelector(pergunta);
    localAdicionarPergunta.innerHTML = ""
    localAdicionarPergunta.innerHTML += `
        <div class="inputs">
                <article class="pergunta">
                    <h1> Pergunta ${numero} </h1>
                    <input type="text" placeholder="Texto da pergunta">
                    <input type="text" placeholder="Cor de fundo da pergunta">
                    <h1 style="margin-top: 28px;">Resposta correta</h1>
                    <input type="text" placeholder="Resposta correta">
                    <input type="text" placeholder="URL da imagem">
                    <h1 style="margin-top: 28px;">Respostas incorretas</h1>
                    <input type="text" placeholder="Resposta incorreta 1">
                    <input type="text" placeholder="URL da imagem 1">
                    <input type="text" placeholder="Resposta incorreta 2">
                    <input type="text" placeholder="URL da imagem 2">
                    <input type="text" placeholder="Resposta incorreta 3">
                    <input type="text" placeholder="URL da imagem 3">
                </article>
            </div>`
    document.querySelector(pergunta).onclick = ""
}

document.querySelector("#nivel2").onclick = function () { adicionarnivel("#nivel2") };
document.querySelector("#nivel3").onclick = function () { adicionarnivel("#nivel3") };
function adicionarnivel(nivel) {
    let conteudo = document.querySelector(nivel);
    conteudo.innerHTML += `
    <div class="inputs">
                <input type="text" placeholder="Título do nível">
                <input type="text" placeholder="% de acerto mínima">
                <input type="text" placeholder="URL da imagem do nível">
                <textarea name="" id="" class="area-de-texto" placeholder="Descrição do nível"></textarea>
            </div>
    `
    document.querySelector(nivel).onclick = ""
}