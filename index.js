let pointshome = 0
let pointsGuest = 0

//functions to Home score
let scoreHome = document.getElementById ("score-home")

function oneHome() {
    pointshome += 1
    scoreHome.textContent = pointshome
}

function twoHome() {
    pointshome += 2
    scoreHome.textContent = pointshome
}

function treeHome() {
    pointshome += 3
    scoreHome.textContent = pointshome
}

//functions to Guest score

let scoreGuest = document.getElementById("score-guest")

function oneGuest() {
    pointsGuest += 1
    scoreGuest.textContent = pointsGuest
}

function twoGuest() {
    pointsGuest += 2
    scoreGuest.textContent = pointsGuest
}

function treeGuest() {
    pointsGuest += 3
    scoreGuest.textContent = pointsGuest
}

//Botão para resetar os placares

function btnRestart() {
    pointshome = 0
    pointsGuest = 0
    scoreHome.textContent = pointshome
    scoreGuest.textContent = pointsGuest
    resetTimer()
    
}

// função do timer

const timerCount = document.getElementById("timer-count")
let timer = 24
let decreaseTime

startTimer()

function startTimer() {
    // Limpa qualquer intervalo existente antes de começar um novo
    clearInterval(decreaseTime);
    
    decreaseTime = setInterval(() =>{    
    
    timer --;
    
    timerCount.textContent = timer
    
    if(timer<=0) {
    clearInterval (decreaseTime);
    
    timerCount.textContent = ("🚨");
    
    }
    
},1000);
}

//botão para resetar o timer
function resetTimer() {
    clearInterval(decreaseTime)
    timer = 24
    timerCount.textContent = timer
    startTimer()
}