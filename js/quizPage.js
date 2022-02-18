const API_BUZZQUIZZ = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
//Variaveis
let quizData = []; 
let newQuiz = [];
let idHolder = null;
let saveData;
let lock = false;
let error = false;


// requisição para buscar todos os quizzes
const promisse = axios.get(API_BUZZQUIZZ);
promisse.then(renderQuizzes);


// função para renderizar os quizzes retirados da api
function renderQuizzes(resposta) {
    quizData = resposta.data;
    const quizList = document.querySelector("#tela1_1 .quizz");

    for (let i = 0; i < quizData.length; i++) {
        quizList.innerHTML += `
        <div onclick="irParaQuizz(this)" class="quiz-main" id="${quizData[i].id}">
            <img src="${quizData[i].image}" alt="modelo">
            <div class="description">${quizData[i].title}</div>
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

    document.querySelector("#tela1_2").classList.add("esconder");
    document.querySelector("#tela2 .pagina-de-um-quizz").classList.remove("esconder");
    
    renderBanner(); // função para renderizar banner
    renderQuestions();// função para renderizar perguntas
}
