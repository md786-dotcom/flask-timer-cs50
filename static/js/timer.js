let tLeft = 0;
let tId = null;
let isPaused = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const add30Btn = document.getElementById('add30Btn');
const minutesInput = document.getElementById('minutes');
const alarmSound = document.getElementById('alarmSound');
const errorMessage = document.getElementById('errorMessage');

minutesInput.value = "1";
minutesInput.addEventListener('input', function() {
    if (this.value < 1) {
        this.value = 1; // server side checking for min value
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

function updateDisplay() {
    const minutes = Math.floor(tLeft / 60);
    const seconds = tLeft % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (tId === null) {
        if (!isPaused) {
            const minutes = parseInt(minutesInput.value) || 1;
            if (minutes < 1) {
                errorMessage.style.display = 'block';
                return;
            }
            tLeft = minutes * 60;
        }

        tId = setInterval(() => {
            if (tLeft > 0) {
                tLeft--;
                updateDisplay();
            } else {
                clearInterval(tId);
                tId = null;
                alarmSound.play();
                window.location.href = '/?timer_complete=true';
            }
        }, 1000);

        isPaused = false;
        startBtn.textContent = 'Reset';
        pauseBtn.disabled = false;
        add30Btn.disabled = false;
        errorMessage.style.display = 'none';
    } else {
        clearInterval(tId);
        tId = null;
        tLeft = 0;
        updateDisplay();
        startBtn.textContent = 'Start';
        pauseBtn.disabled = true;
        add30Btn.disabled = true;
        isPaused = false;
    }
}

function pauseTimer() {
    if (tId !== null) {
        clearInterval(tId);
        tId = null;
        isPaused = true;
        startBtn.textContent = 'Resume';
    }
}

function add30Seconds() {
    tLeft = tLeft + 30;
    updateDisplay();
}

pauseBtn.disabled = true;
add30Btn.disabled = true;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
add30Btn.addEventListener('click', add30Seconds);

if (window.location.search.includes('timer_complete=true')) { // for showing messages
    document.querySelector('.alert').style.display = 'block';
}
