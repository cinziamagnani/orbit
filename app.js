const planets = document.querySelectorAll('.planet');
const landed = document.querySelector('.landed');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');
let audio = new Audio('media/spaceship.mp3');
let muteBtn = document.getElementById("mute");
let volumeBtn = document.getElementById("volume");
let finalCard = document.getElementById("card");
let parFinalCard = document.getElementById("been-on");
let replay = document.getElementById("replay-button");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

muteBtn.onclick = function mute() {
    audio.muted = true;
    volumeBtn.classList.remove('d-none');
    muteBtn.classList.add('d-none');
}

volumeBtn.onclick = function unmute() {
    audio.muted = false;
    muteBtn.classList.remove('d-none');
    volumeBtn.classList.add('d-none');
}

replay.onclick = function replayGame() {
    finalCard.classList.add('d-none');
    currentTime = 60;
    countDownTimerId = setInterval(countDown, 1000);
    movePlanet();
}

function randomPlanet() {
    planets.forEach(planet => {
        planet.classList.remove('landed')
    })

    let randomPlanet = planets[Math.floor(Math.random() * 9)];
    randomPlanet.classList.add('landed');

    hitPosition = randomPlanet.id;
}

planets.forEach(planet => {
    planet.addEventListener('mousedown', () => {
        if (planet.id == hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
            audio.play();   
        }
    })
})

function movePlanet() {
        timerId = setInterval(randomPlanet, 800);
}

movePlanet();

function countDown() {
currentTime --
timeLeft.textContent = currentTime;
if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    finalCard.classList.remove('d-none');
    parFinalCard.innerHTML = `You've been on ${result} planets`;
}
}

let countDownTimerId = setInterval(countDown, 1000);