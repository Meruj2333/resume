const MAX = 25;
const YELLOW_UP = 23;
const YELLOW_DOWN = 3;
const MIN = 0;

let count = 0;
let dir = +1;
let intervalId = null;

const redEl = document.getElementById('red');
const yellowEl = document.getElementById('yellow');
const greenEl = document.getElementById('green');
const counterEl = document.getElementById('counter');
const stepBtn = document.getElementById('stepBtn');
const resetBtn = document.getElementById('resetBtn');

function clearAll() {
    [redEl, yellowEl, greenEl].forEach(el => el.classList.remove('on'));
}

function render() {
    clearAll();

    if (dir === +1) {
        if (count <= YELLOW_UP - 1) {
            greenEl.classList.add('on');
        } else if (count >= YELLOW_UP && count < MAX) {
            yellowEl.classList.add('on');
        } else if (count === MAX) {
            redEl.classList.add('on');
        }
    } else {
        if (count >= YELLOW_DOWN + 1) {
            redEl.classList.add('on');
        } else if (count <= YELLOW_DOWN && count > MIN) {
            yellowEl.classList.add('on');
        } else if (count === MIN) {
            greenEl.classList.add('on');
        }
    }

    counterEl.textContent = count;
}

function step() {
    count += dir;

    if (count >= MAX) {
        count = MAX;
        dir = -1;
    } else if (count <= MIN) {
        count = MIN;
        dir = +1;
    }

    render();
}

function reset() {
    count = 0;
    dir = +1;
    render();
}

stepBtn.addEventListener('click', step);
resetBtn.addEventListener('click', reset);

// 👉 ավտոմատ ռեժիմ՝ ամեն 1 վայրկյանում
function startAuto() {
    if (intervalId) return; // մի քանի անգամ չսկսվի
    intervalId = setInterval(step, 1000); // ամեն 1 վրկ մեկ կանչի step()
}

function stopAuto() {
    clearInterval(intervalId);
    intervalId = null;
}

// ավտոմատ սկսի բեռնելուց հետո
render();
startAuto();
