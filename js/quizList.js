const API_POSTBUZZQUIZZ = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"


let questions = [];
function construirObjetoQuestions(quatidadePerguntasRecebido) {
    for (let i = 0; i < quatidadePerguntasRecebido; i++) {
        questions[i] = {
            title: `Título da pergunta ${i + 1}`,
            color: "#FFFFFF",
            answers: [] //Isso será preenchido com o .push
        };
    }
}

let levels = [];
function construirObjetoNiveis(quantidadeDeNiveisecebido) {
    for (let i = 0; i < quantidadeDeNiveisecebido; i++) {
        levels[i] = {
            title: `Título do nível ${i + 1}`,
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        }
    }
}

function funcaoEnviarQuizzesParaOServidor(){
    let variavelEnviarQuizzParaServidor = {
        title:  document.querySelector(".criacao-de-quizz .info-basica .titulo-criacao-quiz").value,
        image:  document.querySelector(".criacao-de-quizz .info-basica .url-criacao-quiz").value,
        questions: questions,
        levels: levels
    }

    let promessaEnviarParaOSErvidor = axios.post(API_POSTBUZZQUIZZ, variavelEnviarQuizzParaServidor)
    promessaEnviarParaOSErvidor.then(mostrarPaginaFinal)
    promessaEnviarParaOSErvidor.catch(mostrarErroAoEviarParaSErvidor)
}

function mostrarErroAoEviarParaSErvidor(resposta){
    console.log(resposta)
}