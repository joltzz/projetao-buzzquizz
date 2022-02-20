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
    console.log("este console é o da funcao funcaoEnviarQuizzesParaOServidor: ", variavelEnviarQuizzParaServidor)

    let promessaEnviarParaOSErvidor = axios.post(API_POSTBUZZQUIZZ, variavelEnviarQuizzParaServidor)
    promessaEnviarParaOSErvidor.then(mostrarPaginaFinal)
    promessaEnviarParaOSErvidor.catch(mostrarErroAoEviarParaSErvidor)
}

function mostrarErroAoEviarParaSErvidor(resposta){
    console.log("Houve um erro ao enviar para o servidor: ", resposta)
}






let arrayDeIdsString = localStorage.getItem("idsSalvos")
if(arrayDeIdsString == null){
    arrayDeIdsString = "[]";
}
let arrayDeIds = JSON.parse(arrayDeIdsString)
// if(arrayDeIds == null){
//     arrayDeIds = [];
// }

console.log(arrayDeIds, arrayDeIdsString)

function salvarInformacoesNoNavegadorDoUsuario(recebidoApenasID){//estou recebendo apenas o id numero
    let variavelQueReceboApenasOID  = 0;
    variavelQueReceboApenasOID = recebidoApenasID
    console.log("Este eh o id que está vindo para salvarInformacoesNoNavegadorDoUsuario: ", variavelQueReceboApenasOID)
    arrayDeIds.push(variavelQueReceboApenasOID)
    console.log("Aqui não eh string ainda: ", arrayDeIds)

    arrayDeIdsString = JSON.stringify(arrayDeIds)
    
    console.log("Aqui ja eh string:", arrayDeIdsString) //converto o numero para uma string
    localStorage.setItem("idsSalvos", arrayDeIdsString); //salvo no navegador do usuario

    //O proximo passo eh pegar isso quando usar o axios.get
}