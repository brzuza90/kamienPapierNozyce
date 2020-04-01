const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}
const game = {
    playerHand: "",
    aiHand: ""
}
const yourChoice = document.getElementById('yourChoice');
const hands = document.querySelectorAll('img');
const aiChoice = document.querySelector('[data-summary="aiChoice"]');
const whoWin = document.querySelector('[data-summary="whoWin"]');
// Funkcja wyboru gracza
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.classList.remove('active'));
    this.classList.add('active');
}
// const handSelection = (e) => {
//     console.log(e.target);
// }
// Wybór komputera 
function computerChoice() {
    game.aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
}
// Funkcja pokazująca wybrane opcje
function showChoices() {
    yourChoice.textContent = game.playerHand;
    aiChoice.textContent = game.aiHand;

}
// Funkcja game result 
function checkResult(player, computer) {
    if (player === computer) {
        return "draw";
    } else if (player === 'kamień' && computer === 'nożyce' || player === 'papier' && computer === 'kamień' || player === 'nożyce' && computer === 'papier') {
        return "win";
    } else {
        return 'loss';
    }
}
// Funkcja pokazująca wynik całej gry
function showResult(result) {
    if (result === 'win') {
        document.querySelector(' p.gameNumber span').textContent = ++gameSummary.numbers;
        document.querySelector(' p.wins span').textContent = ++gameSummary.wins;
        whoWin.textContent = "Brawo wygrałeś :)"
        whoWin.style.color = "green";
    } else if (result === 'loss') {
        document.querySelector(' p.gameNumber span').textContent = ++gameSummary.numbers;
        document.querySelector(' p.losses span').textContent = ++gameSummary.losses;
        whoWin.textContent = "Niestety wygrał komputer"
        whoWin.style.color = "red";
    } else {
        document.querySelector(' p.gameNumber span').textContent = ++gameSummary.numbers;
        document.querySelector(' p.draws span').textContent = ++gameSummary.draws;
        whoWin.textContent = "Tym razem jest remis :/"
        whoWin.style.color = "gray";
    }
}
// Funckcja endGame 
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).classList.remove('active');
    game.playerHand = ""
    game.aiHand = ""
}

// Funkcja start game
function startGame() {
    if (game.playerHand === "") {
        return alert("Proszę wybrać jedną opcje!!!")
    } else {
        computerChoice();
    }
    showChoices();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    showResult(gameResult);
    endGame();
}
hands.forEach(hand => hand.addEventListener('click', handSelection))
document.querySelector('button.start').addEventListener('click', startGame);