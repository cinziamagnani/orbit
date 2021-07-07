const planets = document.querySelectorAll('.planet');
const landed = document.querySelector('.landed');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

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
    alert('GAME OVER! Your final score is ' + result);
}
}

let countDownTimerId = setInterval(countDown, 1000);