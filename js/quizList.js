// const QUIZZES_API="https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
// let chamaFuncaoQuizzes= getQuizzes();
// let arrayObjetos=[];

// function getQuizzes() {
//     const pegaQuizzesServidor=axios.get(QUIZZES_API)
//     pegaQuizzesServidor.then(carregaQuizzesServidor)
// }

// function carregaQuizzesServidor(data){
//     const todosQuizzesServidor=document.querySelector("#tela1_1 .quizzes .quizz")
//     for(let i=0;i< data.data.length;i++){
//         let objeto=data.data[i];
//         arrayObjetos[i]=objeto;
//         todosQuizzesServidor.innerHTML+=`
//         <article class="quizz" onclick="acessarQuizz(${i})">
//             <img src="${object.image}">
//             <p>${object.title}</p>
//         </article>    
//         `
//     }
// }

// function acessarQuizz(numero){
//     let objeto=arrayObjetos[numero];
//     qtdPerguntas=objeto.questions.length;
// }
// //NO FINAL VERIFICAR SE A QUANTIDADE DE CAIXAS ESCOLHIDAS NA TELA 2 É IGUAL 
// //A QUANTIDADE DE PERGUNTAS!!

