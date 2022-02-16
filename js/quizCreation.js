document.querySelector(".quizzes-criados ion-icon").onclick = function () { chamarTelaCriarQuizz() }
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