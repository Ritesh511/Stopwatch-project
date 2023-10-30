let timer = 0;
let interval;
let isRunning = false;

const timeDisplay = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(function () {
            timer++;
            updateDisplay();
        }, 1000);
        startButton.textContent = 'Pause';
    } else {
        isRunning = false;
        clearInterval(interval);
        startButton.textContent = 'Resume';
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(interval);
    startButton.textContent = 'Start';
}

function resetTimer() {
    timer = 0;
    isRunning = false;
    clearInterval(interval);
    startButton.textContent = 'Start';
    updateDisplay();
}

function updateDisplay() {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
