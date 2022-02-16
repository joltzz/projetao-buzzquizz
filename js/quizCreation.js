document.querySelector(".quizzes-criados ion-icon").onclick = function () { chamarTelaCriarQuizz() }
document.querySelector("#pergunta2 img").onclick=function(){ adicionaPergunta2() }
document.querySelector("#pergunta3 img").onclick=function(){ adicionaPergunta3() }

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
function chamarTelaDecidirNiveis(){
    let teladecidirNiveis = document.querySelector("#tela3_3");
    let telaCriacaoPerguntas = document.querySelector(".criacao-perguntas");

    teladecidirNiveis.classList.toggle("esconder");
    telaCriacaoPerguntas.classList.toggle("esconder");
}

document.querySelector("#nivel2").onclick = function(){adicionarnivel()};
document.querySelector("#nivel3").onclick = function(){adicionarnivel()};

function adicionaPergunta2(){
    let adicionaPergunta=document.querySelector("#pergunta2");
    adicionaPergunta.innerHTML=""
    adicionaPergunta.innerHTML+=`
        <div class="inputs">
                <article class="pergunta">
                    <h1>Pergunta 2</h1>
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
            </div>`}

function adicionaPergunta3(){
    let adicionaPergunta=document.querySelector("#pergunta3");
    adicionaPergunta.innerHTML=""
    adicionaPergunta.innerHTML+=`
        <div class="inputs">
                <article class="pergunta">
                    <h1>Pergunta 3</h1>
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
            </div>`}

function adicionarnivel(){
    console.log("a funcao esta sendo chamada")
    let conteudo = document.querySelector("#nivel2");
    console.log(conteudo)
    conteudo.innerHTML += `
    <div class="inputs">
                <p>Nível 1</p>
                <input type="text" placeholder="Título do nível">
                <input type="text" placeholder="% de acerto mínima">
                <input type="text" placeholder="URL da imagem do nível">
                <textarea name="" id="" class="area-de-texto" placeholder="Descrição do nível"></textarea>
            </div>
    `
    console.log(conteudo)
}