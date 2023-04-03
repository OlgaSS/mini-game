const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const buttons = document.querySelector('.buttons');
const button = document.querySelectorAll('.button');
const buttonRed = document.querySelector('.button-red');
const buttonBlue = document.querySelector('.button-blue');
const buttonGreen = document.querySelector('.button-green');
const buttonMulti = document.querySelector('.button-multi');
const RED = '#ff3c4e';
const BLUE = '#475fe4';
const GREEN = '#3e7115'
const COLORMULTI = ['#2196f3', '#8585f0', '#c26cd8', '#ec50ae', '#ff3d79', '#fd4e54', '#f06630', '#da7c00', '#bc8f00', '#9b9d00', '#77a72b', '#4caf50'];
let chooseColor;

buttons.addEventListener('click', event => {
    button.forEach((btn) => {
        btn.style.background = '#fff';
    })
    if (event.target.classList.contains('button-red')) {
        chooseColor = RED;
        buttonRed.style.background = RED;
    } else if (event.target.classList.contains('button-blue')) {
        chooseColor = BLUE;
        buttonBlue.style.background = BLUE;
    } else if (event.target.classList.contains('button-green')) {
        chooseColor = GREEN;
        buttonGreen.style.background = GREEN;
    } else if (event.target.classList.contains('button-multi')) {
        chooseColor = getRandomColor();
    }
})

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () =>
        setColor(square));

    square.addEventListener('mouseleave', () =>
        removeColor(square));

    board.append(square)
}

function setColor(element) {
    let color = chooseColor;

    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * COLORMULTI.length)
    buttonMulti.style.background = COLORMULTI[index];
    return COLORMULTI[index]
}



