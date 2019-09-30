let timer = 0;
let msTensLog = document.querySelector("#msTens");
let msHundredsLog = document.querySelector("#msHundreds");
let sOnesLog = document.querySelector("#secondOnes");
let sTensLog = document.querySelector("#secondTens");

let startButton = document.createElement('button');
startButton.textContent = "Start";

let resetButton = document.createElement('button');
resetButton.textContent = "Reset";

msTensLog.parentNode.appendChild(startButton);
msTensLog.parentNode.appendChild(resetButton);

let clickToStart = document.querySelectorAll('button')[0]
let clickToReset = document.querySelectorAll('button')[1]

var running = false

let tenSecondTimer = function () {
    let intervalId = setInterval(function (){
        if (timer < 1001) {
            sTensLog.textContent = Math.floor(timer / 1000) % 10;
            sOnesLog.textContent = Math.floor(timer / 100) % 10;
            msHundredsLog.textContent = Math.floor(timer / 10) % 10;
            msTens.textContent = timer % 10;
            timer += 1;
        }

        else {
            msTensLog.parentNode.classList.add("redDigit");
            clearInterval(intervalId)
        }
    }, 10);
    clickToReset.addEventListener("click", function(){
        clearInterval(intervalId)
        sTensLog.textContent = "-";
        sOnesLog.textContent = "-";
        msHundredsLog.textContent = "-";
        msTens.textContent = "-";
        timer = 0
        msTensLog.parentNode.classList.remove("redDigit");
    
    })
    running = false;
}

clickToReset.addEventListener('click', function(){
    sTensLog.textContent = "-";
    sOnesLog.textContent = "-";
    msHundredsLog.textContent = "-";
    msTens.textContent = "-";
    timer = 0
})


clickToStart.addEventListener("click", function() {
    if (running === false) {
        running = true
        tenSecondTimer()
    }
})


// tenSecondTimer()


