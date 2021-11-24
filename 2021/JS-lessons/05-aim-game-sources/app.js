const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

startBtn.addEventListener('click', (event)=> {
    event.preventDefault(); //Отменяет поведение по умолчанию (# у ссылки)
    screens[0].classList.add('up');
});
startGame()
timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains ('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        startGame();
        screens[1].classList.add('up');
    }
});

function startGame() {
    setInterval(decreaseTime, 1000); //decreasseTime вызывается каждую секунду
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time == 0) {
        finishGame();
    } else {
        let currentTime = --time;
        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }
        setTime(currentTime);
    }
    
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {

}

function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    board.append(circle)
}