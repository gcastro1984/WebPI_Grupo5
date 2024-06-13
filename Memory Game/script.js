import * as User from "../js/models/UserModel.js";

// definir variavel que contabiliza o numero de tentativas
const moves = document.getElementById("moves-count");

// definir variavel que conta o tempo
const timeValue = document.getElementById("time");

// definir variaveis asscoaiadas aos botoes start e stop
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

// definir variavel associada ao container de jogo, resultado e controlos
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");

// definir var cartões, intervalo tempo, 1ª e 2ª carta
let cards;
let interval;
let firstCard = false;
let secondCard = false;
let firstCardValue, secondCardValue; // Declaração das variáveis firstCardValue e secondCardValue

// definir a array que vi conter os objectos cartões
const itens = [
    {name:"c++", image:"c++.png"},
    {name:"css", image:"css.png"},
    {name:"figma", image:"figma.png"},
    {name:"html", image:"html.png"},
    {name:"illustrator", image:"illustrator.png"},
    {name:"java", image:"java.png"},
    {name:"javascript", image:"javascript.png"},
    {name:"photoshop", image:"photoshop.png"},
    {name:"php", image:"php.png"},
    {name:"python", image:"python.png"},
    {name:"react", image:"react.png"},
    {name:"typescript", image:"typescript.png"}
];

// definir o valor do tempo inicial, movimentos e vitorias
let seconds = 0,
    minutes = 0,
    movesCount = 0,
    winCount = 0;

// variavel associada à função temporizador
const timeGenerator = () => {
    seconds += 1;

    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    // formatar o tempo antes de ser apresentado
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;

    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

// variavel associada a função que calcula os movimentos
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

// selecionar aleatoriamente objetos do array
const generateRandom = (size = 4) => {
    // array temporaria
    let tempArray = [...itens];

    // inicializa o array cardValues que será apresentado no tabuleiro de jogo
    let cardValues = [];

    // dimensão deve ser o dobro visto que vão existir pares de objetos numa matriz de 4x4
    size = (size * size) / 2;

    // selecão aleatoria dos objetos
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);

        // assim que um objeto é selecionado da temp array, deve desta ser removido
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

// variavel associada a função que gera a matrix de 4x4
const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];

    // baralhar os cartões atraves de uma função anonima
    cardValues.sort(() => Math.random() - 0.5);

    for (let i = 0; i < size * size; i++) {
        /* aqui vão ser criados os cartões. 
        before => front side (contem um ponto de interrogação)
        after => back side (contem a imagem do ojeto);
        data-card-value será um atributo customizado que guarda o nome ou id da card para comparar mais tarde */

        gameContainer.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[i].name}">
            <div class="card-before">?</div>
            <div class="card-after">
            <img src="/Memory Game/images/${cardValues[i].image}" class="image">
            </div>
        </div>
        `;
    }

    // definir a grelha
    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

    // Cartões
    cards = document.querySelectorAll(".card-container");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            // se a carta selecionada ainda não for correspondida continua a correr, ou seja
            // cartas correspondidas quando selecionadas são ignoradas

            if (!card.classList.contains("matched")) {
                // será virada a carta, adiconando a class flipped
                card.classList.add("flipped");

                // se for a 1ªcarta (!firstCard since firstCard is initially false)
                if (!firstCard) {
                    // então a carta corrente será a primeira
                    firstCard = card;

                    // o value das cartas correntes será firstCardValue
                    firstCardValue = card.getAttribute("data-card-value");
                } else {
                    // uma vez que a carta selecionada não é a segunda, é incrementado a jogada em +1
                    movesCounter();

                    // segunda carta e valor
                    secondCard = card;
                    secondCardValue = card.getAttribute("data-card-value");

                    if (firstCardValue === secondCardValue) {
                        // no caso de haver correspondencia entre a 1ª e 2ª cartas, então é adiconada class matches
                        // estas cartas serão ignoradas posteriortmente
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");

                        // definir value firstCard to false, pois a próxima carta é que será a nova 1º carta
                        firstCard = false;

                        // o contador de vitorias incrementa uma unidade sempre que o user faz match
                        winCount += 1;

                        // verificar se o contador de vitorias é metade do cardValues
                        if (winCount === Math.floor(cardValues.length / 2)) {
                            result.innerHTML = `<h2>Congrats! You Won!</h2>in<h4>Moves: ${movesCount}</h4>`;
                            let userScore=0
                            if(movesCount<=20){
                                userScore=250
                            }else{userScore=100}

                            User.updateScore(userScore)

                            stopGame();
                        }
                    } else {
                        // no caso de não haver correspondencia entre a 1ª e 2ª cartas
                        // são viradas novamente para posição inicial
                        let [tempFirst, tempSecond] = [firstCard, secondCard];
                        firstCard = false;
                        secondCard = false;

                        setTimeout(() => {
                            tempFirst.classList.remove("flipped");
                            tempSecond.classList.remove("flipped");
                        }, 900);
                    }
                }
            }
        });
    });
};

// Parar o jogo
const stopGame = () => {
    // visibilidade controlos e botões
    controls.classList.remove("hide");
    startButton.classList.remove("hide");
    stopButton.classList.add("hide");
    clearInterval(interval);
};

// Iniciar o jogo
startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    time = 0;

    // visibilidade controlos e botões
    controls.classList.add("hide");
    startButton.classList.add("hide");
    stopButton.classList.remove("hide");

    // Iniciar o cronometro
    interval = setInterval(timeGenerator, 1000);

    // Movimento inicial
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;

    initializer();
});

stopButton.addEventListener("click", stopGame);

// inicializar valores e chamadas de funções
const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    console.log(cardValues); // para confirmar na consola que são selecionados os valores dos cartões
    matrixGenerator(cardValues);
};