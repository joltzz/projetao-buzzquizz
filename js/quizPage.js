const API_BUZZQUIZZ = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
//Variaveis
let quizData = []; 
let newQuiz = [];
let idHolder = null;
let saveData;
let pass = 0;
let result;
let lock = false;
let error = false;


// requisição para buscar todos os quizzes
let promisse = axios.get(API_BUZZQUIZZ);
promisse.then(renderQuizzes);
promisse.catch( function (){alert("Erro ao recarregar os Quizzes.");  window.location.reload(); } )


// função para renderizar os quizzes retirados da api
function renderQuizzes(resposta) {
    console.log(resposta)
    quizData = resposta.data;
    const quizList = document.querySelector("#tela1_1 .todos-os-quizz");

    for (let i = 0; i < quizData.length; i++) {
        quizList.innerHTML += `
        <div onclick="irParaQuizz(this)" class="quiz-main" id="${quizData[i].id}" data-identifier="quizz-card">
            <img src="${quizData[i].image}" alt="modelo">
            <div class="backgound-gradiente"></div>
            <p class="description">${quizData[i].title}</p>
        </div>
        `;
    }
}
function irParaQuizz(acessarQuizz){
    idHolder = acessarQuizz.id;
    // console.log(idHolder);
    console.log(acessarQuizz);
    const buscaQuizz = axios.get(`${API_BUZZQUIZZ}/${idHolder}`);
    buscaQuizz.then(chamaPaginaDois);
}


function chamaPaginaDois(resposta) {
    saveData = resposta.data;
    console.log(resposta);

    document.querySelector("#tela1_1").classList.add("esconder");
    document.querySelector("#tela1_2").classList.add("esconder");
    document.querySelector("#tela2").classList.remove("esconder");
    
    renderizaBanner(); 
    renderizaPerguntas();
    document.querySelector(".pagina-de-um-quizz__titulo-de-um-quizz").scrollIntoView({block:"start"});
}

function renderizaBanner(){
    const bannerImage = document.querySelector(".pagina-de-um-quizz__titulo-de-um-quizz");
    bannerImage.innerHTML = `
    <img src="${saveData.image}">
    <div class="quiz-page-description">${saveData.title}</div>
    `;
}

function renderizaPerguntas(){
    let i = 0;
    const questions = saveData.questions
    const quizQuestions = document.querySelector(".box-de-cada-pergunta__a-pergunta");
    questions.forEach(question => {
        let color = question.color;
        // console.log(color);
        // console.log(question);
        quizQuestions.innerHTML += `
        <section class="box-de-cada-pergunta__a-pergunta">
        <div class="question-card${i}">
                <div class="question-description" id="${i}" data-identifier="question"><h4>${question.title}<h4></div>
                <div class="all-answers">${renderizaRespostas(question)}</div>
            </div>
        </section>
        `;
        document.getElementById(`${i}`).style.backgroundColor=color;
        i++;
        // console.log(quizQuestions);
    });
}

function renderizaRespostas(question){
    const armazenaRespostas = question.answers
    const answers = armazenaRespostas.sort(() => Math.random() - 0.5);
    console.log(answers);
    let quizAnswers = "";
    answers.forEach(answer => {
        quizAnswers += `
        <div onclick="escolheResposta(this)" class="answer ${answer.isCorrectAnswer}" data-identifier="answer">
            <img src="${answer.image}">
            <h4>${answer.text}</h4>
        </div>
        `;
    });
    // console.log(quizAnswers)
    return quizAnswers;
}

function escolheResposta(answerElement) {
    // console.log(answerElement);
    answerElement.classList.add("selecionado")
    let parentElement = answerElement.parentNode;
    let selecionaResposta = parentElement.querySelectorAll(".answer")

    selecionaResposta.forEach(answer => {
        let elementSelect = answer.classList.contains("selecionado")
        if (elementSelect === false) {
            answer.classList.add("esbranquicado");
            answer.setAttribute("onclick", "");
        } else {
            answer.setAttribute("onclick", "");
        }
    });
    answerResult(answerElement);
    // função para scrolar para a próxima pergunta 
    setTimeout(() => {
        pass += 1;
        divcardQuestao = `.question-card${pass}`;
        scrollElement = document.querySelector(divcardQuestao);

        if (scrollElement === null) {
            renderizaResultado();
            const resultQuiz = document.querySelector(".resultado-final");
            resultQuiz.classList.remove("esconder")
            resultQuiz.scrollIntoView({block: "center", behavior: "smooth"})
            console.log("testeeeeeeeeeeee");
        } else {
        scrollElement.scrollIntoView({block: "center", behavior: "smooth"});
        console.log(scrollElement);
        }
    }, 2000);
}

function answerResult(answerElement){
    let parentElement = answerElement.parentNode;
    let selectAnswer = parentElement.querySelectorAll(".answer h4");
    console.log(selectAnswer);

    let ifTrue = parentElement.querySelector(".true h4");
    ifTrue.style.color="green";

    let ifFalse = parentElement.querySelectorAll(".false h4"); 
    ifFalse.forEach(answer => {
        answer.style.color="red";
    });
}

//renderiza o resultado do quiz
function renderizaResultado(){
    let perguntasLength = saveData.questions.length;
    let respostasCertas = document.querySelectorAll(".select.true").length;
    
    result = Math.round((respostasCertas/perguntasLength)*100);
    // console.log(result);

    const levels = saveData.levels
    levels.forEach(level => {
        let minValue = level.minValue;
        if (result >= minValue) {
            const quizResultado = document.querySelector(".resultado-final");
            quizResultado.innerHTML = `
            <div class="resultado-final__porcentagem" data-identifier="quizz-result">${result}% de acerto: ${level.title}</div>
            <div class="resultado-final__imagem-e-parabenizacao">
                <img src="${level.image}">
                <p>${level.text}</p>
            </div>
            <div class="aparece-botoes esconder">
            <button class="reiniciar" onclick="reniciarQuiz()">
                Reiniciar Quizz
            </button>
            <button class="voltar" onclick="voltarTelaInicial()">
                Voltar para home
            </button>
        </div>
            `;
        }
    })
}

function reniciarQuiz(){
    pass = 0;
    //scrollar para o topo
    const element = document.querySelector(".pagina-de-um-quizz__titulo-de-um-quizz");
    element.scrollIntoView();
    //cores das respostas volta a ser preto
    let selectAnswer = document.querySelectorAll(".answer h4");
    selectAnswer.forEach(h4 => {
        h4.style.color = "black";
    });
    //remover o esbranquiçado
    let removeBranco = document.querySelectorAll(".esbranquicado")
    removeBranco.forEach(remove => {
        remove.classList.remove("esbranquicado");
    });
    //adicionar atributo onclick e remover classe select
    let addOnClick = document.querySelectorAll(".answer");
    addOnClick.forEach(element => {
        element.setAttribute("onclick", "escolheResposta(this)");
        element.classList.remove("selecionado");
        // console.log(element);
    });
    // (colocar parte aqui para esconder e atualizar resultado do quiz)
    document.querySelector(".resultado-final").classList.add("esconder");
}

function voltarTelaInicial(){
    window.location.reload();
}

