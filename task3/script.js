const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = ('Yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

trafficLightEl1.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl.style.background = ('Red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeBlack);
}

trafficLightEl.addEventListener('click', makeRed);

function makeBlack() {
    trafficLightEl.style.background = ('Black');
    trafficLightEl.removeEventListener('click', makeBlack);
    trafficLightEl.addEventListener('click', makeBlack);
}

trafficLightEl.addEventListener('click', makeBlack);