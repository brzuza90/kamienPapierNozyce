const btnStart = document.querySelector('.start');
const images = document.querySelectorAll('img');
const yourChoice = document.getElementById('yourChoice');
const aiChoice = document.getElementById('aiChoice');
const whoWin = document.getElementById('whoWin');
const spanGameNumber = document.querySelector('.gameNumber');
const spanWins = document.querySelector('.wins');
const spanLosses = document.querySelector('.losses');
const spanDraws = document.querySelector('.draws');
let gameNumber = 0;
let wins = 0;
let losses = 0;
let draws = 0;
const possibilities = ['kamień', 'papier', 'nożyce'];
// WYBÓR GRACZA
images.forEach((image) => {
    image.addEventListener('click', function () {
        images.forEach(image => image.classList.remove('active'));
        this.classList.add('active');
        yourChoice.textContent = this.dataset.option;
    })
})
const startGame = function () {
    if (yourChoice.textContent == "") {
        return alert('Musisz kliknąć na jeden obrazek aby zagrać');
    } else {
        const index = Math.floor(Math.random() * possibilities.length);
        aiChoice.textContent = possibilities[index];
    }
    // Wybrany kamień
    if (yourChoice.textContent == possibilities[0] && aiChoice.textContent == possibilities[1]) {
        whoWin.textContent = "Niestety wygrał komputer";
        whoWin.style.color = 'red';
        spanGameNumber.textContent = ++gameNumber;
        spanLosses.textContent = ++losses;
    } else if (yourChoice.textContent == possibilities[0] && aiChoice.textContent == possibilities[2]) {
        whoWin.textContent = "Brawo wygrałeś :)";
        whoWin.style.color = 'green';
        spanGameNumber.textContent = ++gameNumber;
        spanWins.textContent = ++wins;
    } else if (yourChoice.textContent == possibilities[0] && aiChoice.textContent == possibilities[0]) {
        whoWin.textContent = "Tym razem jest remis";
        whoWin.style.color = 'gray';
        spanGameNumber.textContent = ++gameNumber;
        spanDraws.textContent = ++draws;
    }
    // Wybrany papier
    if (yourChoice.textContent == possibilities[1] && aiChoice.textContent == possibilities[2]) {
        whoWin.textContent = "Niestety wygrał komputer";
        whoWin.style.color = 'red';
        spanGameNumber.textContent = ++gameNumber;
        spanLosses.textContent = ++losses;
    } else if (yourChoice.textContent == possibilities[1] && aiChoice.textContent == possibilities[0]) {
        whoWin.textContent = "Brawo wygrałeś :)";
        whoWin.style.color = 'green';
        spanGameNumber.textContent = ++gameNumber;
        spanWins.textContent = ++wins;
    } else if (yourChoice.textContent == possibilities[1] && aiChoice.textContent == possibilities[1]) {
        whoWin.textContent = "Tym razem jest remis";
        whoWin.style.color = 'gray';
        spanGameNumber.textContent = ++gameNumber;
        spanDraws.textContent = ++draws;
    }
    //  Wybrane nożyce
    if (yourChoice.textContent == possibilities[2] && aiChoice.textContent == possibilities[0]) {
        whoWin.textContent = "Niestety wygrał komputer";
        whoWin.style.color = 'red';
        spanGameNumber.textContent = ++gameNumber;
        spanLosses.textContent = ++losses;
    } else if (yourChoice.textContent == possibilities[2] && aiChoice.textContent == possibilities[1]) {
        whoWin.textContent = "Brawo wygrałeś :)";
        whoWin.style.color = 'green';
        spanGameNumber.textContent = ++gameNumber;
        spanWins.textContent = ++wins;
    } else if (yourChoice.textContent == possibilities[2] && aiChoice.textContent == possibilities[2]) {
        whoWin.textContent = "Tym razem jest remis";
        whoWin.style.color = 'gray';
        spanGameNumber.textContent = ++gameNumber;
        spanDraws.textContent = ++draws;
    }
    images.forEach(image => image.classList.remove('active'));
}
btnStart.addEventListener('click', startGame);
images