import * as User from "../js/models/UserModel.js" ;



/* atribuir variavel ao botão start */ 
const start_btn = document.querySelector(".start-btn button");

/* atribuir variavel à info-box */
const info_box = document.querySelector(".info-box");

/* atribuir variavel ao botão quit */ 
const exit_btn = info_box.querySelector(".buttons .quit");

/* atribuir variavel ao botão restart */ 
const continue_btn = info_box.querySelector(".buttons .restart");

/* atribuir variavel à quiz-box */
const quiz_box = document.querySelector(".quiz-box");

/* atribuir variavel à option-list */
const option_list = document.querySelector(".option-list");

/* atribuir variavel ao contador do tempo timer-sec */
const timeCount = quiz_box.querySelector(".timer .timer-sec");

/* atribuir variavel ao grafico de tempo restante time-line */
const timeLine = quiz_box.querySelector("header .time-line");

/* atribuir variavel quando é esgotado o tempo */
const timeOff = quiz_box.querySelector("header .time-text");

/* Quando o botão start é clickado */
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");  /* adicionada class definida no css qd start é clickado e mostra a info-box */
}

/* Quando o botão Exit é clickado */
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");  /* removida class definida no css qd exit é clickado e esconde a info-box */
}

/* Quando o botão Continue é clickado */
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");  /* removida class definida no css qd exit é clickado e esconde a info-box */
    quiz_box.classList.add("activeQuiz");     /* adicionada class definida no css qd continue é clickado e mostra a quiz-box */
    showQuestions(0);  /* valor inicial */
    queCounter(1);      /* valor inicial */
    startTimer(timeValue); /* chama a função que inicia a contagem regrressiva e seu valor inicial */
    startTimerLine(0); /* chama a função que inicia o desenho da linha contagem regrressiva do tempo */
}


/* variavel que guarda contador das questões, num questões, contador tempo, tempo cronometro, e comprimento timeLine */
let que_count = 0;
let que_num = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

/* atribuir variavel ao botão next question */ 
const next_btn = quiz_box.querySelector(".next-btn");

/* atribuir variavel ao result box */
const result_box = document.querySelector(".result-box"); 

/* atribuir variavel ao botão restart quiz e quit quiz */
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit"); 

/* definir a ação a tomar qd o botão restart ou quit quiz são clickados */
quit_quiz.onclick = () => {
    window.location.reload();
}

restart_quiz.onclick = () => {

    /* removida a visibilidade da box resultado */
    result_box.classList.remove("activeResult");

    /* ativa a visibilidade da quiz box */
    quiz_box.classList.add("activeQuiz");

    /* retomados todos os valores iniciais */
    let que_count = 0;
    let que_num = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;

    /* chamadas todas as funções acionadas aquando click no botão next */
    showQuestions(que_count);
    queCounter(que_num);
    clearInterval(counter); // faz reset ao contador do tempo
    startTimer(timeValue); // sempre que se muda para questão seguinte reinicia o cronometro
    clearInterval(counterLine); // faz reset ao contador Time Line
    startTimerLine(widthValue); // sempre que se muda para questão seguinte reinicia o cronometro
    next_btn.style.display = "none";  // desativa a visibilidade do botao next
    timeOff.textContent = "Time Left";
}


/* se o botão next question é clickado */
next_btn.onclick = () => {

    console.log(que_count);

    /* definido um ciclo if enquanto o contador de questões for inferior ao comprimento da array questions*/
    if (que_count < questions.length-1) {
        que_count++;
        que_num++;
        showQuestions(que_count);
        queCounter(que_num);
        clearInterval(counter); // faz reset ao contador do tempo
        startTimer(timeValue); // sempre que se muda para questão seguinte reinicia o cronometro
        clearInterval(counterLine); // faz reset ao contador Time Line
        startTimerLine(widthValue); // sempre que se muda para questão seguinte reinicia o cronometro
        next_btn.style.display = "none";  // desativa a visibilidade do botao next
        timeOff.textContent = "Time Left";
        console.log(que_count);

    }else{
        clearInterval(counter); // faz reset ao contador do tempo
        clearInterval(counterLine); // faz reset ao contador Time Line
        console.log("Questions completed");
        console.log(que_count);
        showResultBox(); // chamada a função que apresenta a cx resultado
        que_count = 0;
        que_num = 1;
        userScore = 0;
    }
}

/* obter as questões e opções da array questions */
/* definir a função que mostra as questões, que será adicionada acima qd botao continue é clickado */
function showQuestions (index) {
    const que_text = document.querySelector(".que-text");

    /* a pergunta será composta pelo seu numero e conteudo da pergunta */
    let que_tag = "<span>" + questions[index].num + ". " + questions[index].question +"</span>";  //busca a questão do 1º objecto questions
    que_text.innerHTML = que_tag;

    // vai se buscar todas as opções de resposta para cada questão
    let option_tag = '<div class="option">' + questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] +'<span></span></div>';
    
    //são adicionadas todas as opçoes de resposta à questão na option_tag
    option_list.innerHTML = option_tag;

    // definida a variavel option que vai guardar o valor da opção selecionada quando clickada 
    const option = option_list.querySelectorAll(".option");

    option.forEach(option => {
        option.addEventListener("click", () => optionSelected(option));
    });
}


/* definida as variaveis associadas aos icons tick e cross do html */
let tickIcon = '<div class="icon tick"><i class="ti-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="ti-close"></i></div>';


/* definida a função optionSelected(this) */
function optionSelected(answer) {

    clearInterval(counter); // selecionada uma opção é bloqueado o cronometro
    clearInterval(counterLine); // selecionada uma opção é bloqueada a Time Line

    /* definida a variavel que guarda a resposta do utilizador */
    let userAns = answer.textContent;

    /* definida a variavel que guarda a resposta correta */
    let correctAns = questions[que_count].answer;

    /* definida a variavel que guarda o numero de opções de resposta de uma pergunta */
    let allOptions = option_list.children.length;

    /* comparar a resposta do utilizador com a resposta correta guardada */
    if (userAns == correctAns) {
         /* adicionado um ponto ao score se selecionada a resposta correta */
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");  /* adicionada class definida no css qd é clickada a opçao correta */
        console.log("CorrectA");
        answer.insertAdjacentHTML("beforeend", tickIcon);  // antes do fim será adicionao o icon check na escolha correta

    }else{
        answer.classList.add("incorrect");  /* adicionada class definida no css qd é clickada a opçao errada */
        console.log("inCorrectA");
        answer.insertAdjacentHTML("beforeend", crossIcon);  // antes do fim será adicionao o icon cross na escolha incorreta

        // se selecionada a resposta incorreta, automaticamente é selecionada a correta
        for (let i = 0; i < allOptions; i++)  {
            if (option_list.children[i].textContent == correctAns ) {
                option_list.children[i].setAttribute("class", "option correct"); // bloqueada ou selecionada a opção correta 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);  // antes do fim será adicionao o icon check na escolha correta
            }    
        }
    }

    /* uma vez que o user seleciona uma opção são desativadas as restantes */
    for (let i = 0; i < allOptions; i++)  {
        option_list.children[i].classList.add("disabled");   
    }

    next_btn.style.display = "block";  // ativa a visibilidade do botao next

}


/* definir a função que apresenta a caixa resultado do quiz */
function showResultBox() {
    info_box.classList.remove("activeInfo");  /* removida class definida no css qd exit é clickado e esconde a info-box */
    quiz_box.classList.add("activeQuiz");     /* adicionada class definida no css qd continue é clickado e mostra a quiz-box */
    result_box.classList.add("activeResult");  /* adiciona class que mostra a box resultado */
    const scoreText = result_box.querySelector(".score-text");

    if (userScore > 3) {
        userScore*=10
        let scoreTag = '<span>Congrats! You got <p>'+ userScore + '</p>out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 1) {
        userScore*=5
        let scoreTag = '<span>Nice! You got <p>'+ userScore + '</p>out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>Sorry! You got only <p>'+ userScore + '</p>out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    
    User.updateScore(userScore)
    

}


/* definir a função que inicia a contagem do tempo restante no header do quiz */
function startTimer(time) {
    counter = setInterval(timer, 1000); // função timer, com increemntos de 1s
    function timer() {
        timeCount.textContent = time;  // cronometro terá texto igual á variavel time
        time--; // contagem regressiva a partir do valor inicial
        if (time < 9) {
            let addZero = timeCount.textContent; // var addZero será o conteudo de timeCount
            timeCount.textContent = "0" + addZero;  // será adicionado 0 antes do tempo restante
        }

        // caso se esgote o tempo do cronometro
        if (time < 0) {
            clearInterval(counter); // selecionada uma opção é bloqueado o cronometro
            timeCount.textContent = "00"; // o cronometro apresenta 00 segundos
            timeOff.textContent = "Time Off";
        
            /* definida a variavel que guarda a resposta correta */
            let correctAns = questions[que_count].answer;

            /* definida a variavel que guarda o numero de opções de resposta de uma pergunta */
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++)  {
                if (option_list.children[i].textContent == correctAns ) {
                    option_list.children[i].setAttribute("class", "option correct"); // bloqueada ou selecionada a opção correta 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);  // antes do fim será adicionao o icon check na escolha correta
                }    
            }

            /* desativadas todas as opções */
            for (let i = 0; i < allOptions; i++)  {
                option_list.children[i].classList.add("disabled");   
            }

            next_btn.style.display = "block";  // ativa a visibilidade do botao next
                
        }
    }
}

/* definir a função que inicia o grafico da linha contagem do tempo restante no header do quiz */
function startTimerLine(time) {
    counterLine = setInterval(timer, 29); // função timer com intervalos de 29 ms
    function timer() {
        time += 1; // incrementos de 1 unidade
        timeLine.style.width = time + "px";  // comprimento time line vai aumentando
        if (time > 545) {   // quando atingidos os 545 px de comprimento da time line
            clearInterval(counterLine); // selecionada uma opção é bloqueado o cronometro    
        }
    }
}


/* definir a função que conta e atualiza o contador de questões no footer do quiz */
function queCounter(index) {

    /* definir a variavel que apresenta no footer o contador das questões */
    const bottom_ques_counter = quiz_box.querySelector(".total-que");

    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}
