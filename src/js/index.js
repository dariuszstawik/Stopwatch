import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


const minutes = document.querySelector(".stopwatch-timer__minutes--js");
const seconds = document.querySelector(".stopwatch-timer__seconds--js");
const miliseconds = document.querySelector(".stopwatch-timer__miliseconds--js");
const btnStart = document.querySelector(".stopwatch-buttons__button-start--js");
const btnPause = document.querySelector(".stopwatch-buttons__button-pause--js");
const btnReset = document.querySelector(".stopwatch-buttons__button-reset--js");
const imageStatic = document.querySelector(".stopwatch__image--static");
let milisecondsCounter = 0;
let secondsCounter = 0;
let minutesCounter = 0;
let runTimer;


const startCounting = () => {

imageStatic.classList.add("hidden--js");
btnStart.classList.add("hidden--js");
btnPause.classList.remove("hidden--js");

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
    imageStatic.classList.remove("hidden--js");
    btnStart.classList.remove("hidden--js");
    btnPause.classList.add("hidden--js");
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
