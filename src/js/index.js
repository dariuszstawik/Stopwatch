import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */


const minutes = document.querySelector(".timer__minutes--js");
const seconds = document.querySelector(".timer__seconds--js");
const miliseconds = document.querySelector(".timer__miliseconds--js");
const btnStart = document.querySelector(".buttons__start--js");
const btnPause = document.querySelector(".buttons__pause--js");
const btnReset = document.querySelector(".buttons__reset--js");
const imageStatic = document.querySelector(".image__static--js");
const speechBubble = document.querySelector(".image-speech-bubble--js");
let speechText = document.querySelector(".image-speech-bubble__text--js");
let milisecondsCounter = 0;
let secondsCounter = 0;
let minutesCounter = 0;
let runTimer;
let runBubble;


const startCounting = () => {

    imageStatic.classList.add("hidden--js");
    btnStart.classList.add("hidden--js");
    btnPause.classList.remove("hidden--js");

    const increaseSeconds = () => {

        milisecondsCounter++;

        if (milisecondsCounter === 100) {
            milisecondsCounter = 0;
            secondsCounter++;
        }

        milisecondsCounter < 10 ? miliseconds.textContent = "0" + milisecondsCounter : miliseconds.textContent = milisecondsCounter;

        secondsCounter < 10 ? seconds.textContent = "0" + secondsCounter : seconds.textContent = secondsCounter;

        if (secondsCounter === 60) {
            secondsCounter = 0;
            minutesCounter++;
        }

        minutesCounter < 10 ? minutes.textContent = "0" + minutesCounter : minutes.textContent = minutesCounter;

    }

    const turtleTalking = () => {
        const speeches = ["Jesteś zwycięzcą!", "Oddychaj!", "Dajesz!", "Raz, raz, raz!", "Brawo, tak jest!", "Jeszcze trochę!", "Mistrz, Mistrz!", "Run, Forrest, run!", "Szybciej!", "Hop hop hop!", "Szybciej, szybciej!", "Wdech, wydech...", "Nie ma, że boli...", "Dasz radę!", "Wytrzymaj!", "Nie obijamy się!", "Ciśniesz!", "Przyspieszamy!", "Kto rządzi?"];
        let randomNumber = Math.floor(Math.random() * (speeches.length));
        console.log(randomNumber);
        console.log(speeches[randomNumber]);
        speechText.textContent = speeches[randomNumber];
        speechBubble.classList.toggle("hidden--js");
    }

    runTimer = setInterval(increaseSeconds, 10);
    runBubble = setInterval(turtleTalking, 2000);
}

btnStart.addEventListener('click', startCounting);

const pauseCounting = () => {
    imageStatic.classList.remove("hidden--js");
    btnStart.classList.remove("hidden--js");
    btnPause.classList.add("hidden--js");
    clearInterval(runTimer);
    clearInterval(runBubble);
    speechBubble.classList.add("hidden--js")
}

btnPause.addEventListener('click', pauseCounting);

const resetCounting = () => {
    pauseCounting();
    milisecondsCounter = 0;
    miliseconds.textContent = "0" + milisecondsCounter;
    secondsCounter = 0;
    seconds.textContent = "0" + secondsCounter;
    minutesCounter = 0;
    minutes.textContent = "0" + minutesCounter;
}

btnReset.addEventListener('click', resetCounting);