let timer = 0;
let msTensLog = document.querySelector("#msTens");
let msHundredsLog = document.querySelector("#msHundreds");
let sOnesLog = document.querySelector("#secondOnes");
let sTensLog = document.querySelector("#secondTens");

setInterval(function (){
    if (timer < 1001) {
        sTensLog.textContent = Math.floor(timer / 1000) % 10;
        sOnesLog.textContent = Math.floor(timer / 100) % 10;
        msHundredsLog.textContent = Math.floor(timer / 10) % 10;
        msTens.textContent = timer % 10;
        timer += 1
    }

    else {
        msTensLog.parentNode.classList.add("redDigit")
        
    }
}, 10)