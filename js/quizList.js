const API_POSTBUZZQUIZZ = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
let arrayDeIdsString = null;
let arrayDeIds = null;
verificarIdsSalvos();
// buscarQuizzComOIdSalvo();


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

function funcaoEnviarQuizzesParaOServidor() {
    let variavelEnviarQuizzParaServidor = {
        title: document.querySelector(".criacao-de-quizz .info-basica .titulo-criacao-quiz").value,
        image: document.querySelector(".criacao-de-quizz .info-basica .url-criacao-quiz").value,
        questions: questions,
        levels: levels
    }
    console.log("este console é o da funcao funcaoEnviarQuizzesParaOServidor: ", variavelEnviarQuizzParaServidor)

    let promessaEnviarParaOSErvidor = axios.post(API_POSTBUZZQUIZZ, variavelEnviarQuizzParaServidor)
    promessaEnviarParaOSErvidor.then(mostrarPaginaFinal)
    promessaEnviarParaOSErvidor.catch(mostrarErroAoEviarParaSErvidor)
}

function mostrarErroAoEviarParaSErvidor(resposta) {
    console.log("Houve um erro ao enviar para o servidor: ", resposta)
}


function verificarIdsSalvos() {
    arrayDeIdsString = localStorage.getItem("idsSalvos")
    if (arrayDeIdsString == null) {
        arrayDeIdsString = "[]";
    }
    arrayDeIds = JSON.parse(arrayDeIdsString)

    if (arrayDeIds.length > 0) {
        document.querySelector("#tela1_1 .menu-criar-Quizz").classList.add("esconder");
        buscarQuizzComOIdSalvo();
    } else {
        document.querySelector("#tela1_2").classList.add("esconder")
    }

    console.log(arrayDeIds, arrayDeIdsString)

}



// ESTA FUNCAO PODE SER OTIMIZADA, ESTA ASSIM POR CONTA DE BUGS QUE DERAM, OTIMIZAREI ELA NO FINAL SE DER TEMPO
function salvarInformacoesNoNavegadorDoUsuario(recebidoApenasID) {//estou recebendo apenas o id numero
    let variavelQueReceboApenasOID = 0;
    variavelQueReceboApenasOID = recebidoApenasID
    console.log("Este eh o id que está vindo para salvarInformacoesNoNavegadorDoUsuario: ", variavelQueReceboApenasOID)
    arrayDeIds.push(variavelQueReceboApenasOID)

    arrayDeIdsString = JSON.stringify(arrayDeIds)

    localStorage.setItem("idsSalvos", arrayDeIdsString); //salvo no navegador do usuario

    //O proximo passo eh pegar isso quando usar o axios.get
}

function buscarQuizzComOIdSalvo(){
    for(let i=0; i<arrayDeIds.length; i++){
        let promessaDeBuscaDeQuizzPeloIdsDoUsuario = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${arrayDeIds[i]}`)
        promessaDeBuscaDeQuizzPeloIdsDoUsuario.then(renderizarQuizzesDoUsuario)
    }
}

function renderizarQuizzesDoUsuario(respostaComOQuizz){
    console.log(respostaComOQuizz)
    let lugarParaRenderizarQiuzz = document.querySelector("#tela1_2")

    lugarParaRenderizarQiuzz.innerHTML += `
    <div class="quizz-do-usuario" id="${respostaComOQuizz.data.id}" onclick="irParaQuizz(this)">
            <img src="${respostaComOQuizz.data.image}" alt="">
            <div class="backgound-gradiente"></div>
            <p>${respostaComOQuizz.data.title}</p>
        </div>
    `

}