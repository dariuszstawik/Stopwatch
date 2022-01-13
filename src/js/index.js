import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const miliseconds = document.querySelector(".miliseconds");
const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");
const minionsStatic = document.querySelector(".minions-static");
let milisecondsCounter = 0;
let secondsCounter = 0;
let minutesCounter = 0;
let runTimer;


const startCounting = () => {

minionsStatic.classList.add("hidden");
btnStart.classList.add("hidden");
btnPause.classList.remove("hidden");

const increaseSeconds = ()=> {

    milisecondsCounter++;

    if (milisecondsCounter === 100) {
        milisecondsCounter = 0;
        secondsCounter++;
    }

    milisecondsCounter<10 ? miliseconds.textContent = "0"+milisecondsCounter : miliseconds.textContent = milisecondsCounter;
  
  secondsCounter<10 ? seconds.textContent = "0"+secondsCounter : seconds.textContent = secondsCounter;
        
    if (secondsCounter===60) {
        secondsCounter=0;
        minutesCounter++;
    }

minutesCounter<10 ? minutes.textContent = "0"+minutesCounter : minutes.textContent=minutesCounter;

}
runTimer = setInterval(increaseSeconds,10);
}

btnStart.addEventListener('click', startCounting);

const pauseCounting = () => {
    minionsStatic.classList.remove("hidden");
    btnStart.classList.remove("hidden");
    btnPause.classList.add("hidden");
    clearInterval(runTimer);
}

btnPause.addEventListener('click', pauseCounting);

const resetCounting = () => {
    pauseCounting();
    milisecondsCounter=0;
    miliseconds.textContent = "0"+milisecondsCounter;
    secondsCounter=0;
    seconds.textContent = "0"+secondsCounter;
    minutesCounter = 0;
    minutes.textContent = "0"+minutesCounter;
}

btnReset.addEventListener('click', resetCounting);
