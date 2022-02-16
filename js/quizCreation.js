document.querySelector(".quizzes-criados ion-icon").onclick = function(){chamarTelaCriarQuizz()}

function chamarTelaCriarQuizz(){
   let telaUmPontoUM = document.querySelector("#tela1_1");
    let telaUmPontoDoin = document.querySelector("#tela1_2");
    let telasTresPontoUmETresPontoDois = document.querySelector("#tela3_1-2");

    telaUmPontoUM.classList.toggle("esconder");
    telaUmPontoDoin.classList.toggle("esconder");
    telasTresPontoUmETresPontoDois.classList.toggle("esconder");
}