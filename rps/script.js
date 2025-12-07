// Simple Rock-Paper-Scissors game (beginner-friendly)

// Scores
let youScore = 0;
let compScore = 0;
let draws = 0;

// DOM elements
const choiceButtons = document.querySelectorAll('.choice');
const youChoiceEl = document.getElementById('youChoice');
const compChoiceEl = document.getElementById('compChoice');
const resultText = document.getElementById('resultText');
const youScoreEl = document.getElementById('youScore');
const compScoreEl = document.getElementById('compScore');
const drawsEl = document.getElementById('draws');
const resetBtn = document.getElementById('resetBtn');

// Possible choices
const choices = ['rock', 'paper', 'scissor'];

// Return a random choice for computer
function getComputerChoice() {
    const i = Math.floor(Math.random() * choices.length);
    return choices[i];
}

// Determine winner
// returns 'win' if player wins, 'lose' if computer wins, 'draw' otherwise
function decide(player, computer) {
    if (player === computer) return 'draw';
    if (player === 'rock' && computer === 'scissor') return 'win';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'scissor' && computer === 'paper') return 'win';
    return 'lose';
}

// Update UI after a round
function updateUI(player, computer, outcome) {
    // show choices
    youChoiceEl.textContent = capitalize(player);
    compChoiceEl.textContent = capitalize(computer);

    // update result text and score
    if (outcome === 'win') {
        resultText.textContent = 'You win! 🎉';
        youScore++;
        youScoreEl.textContent = youScore;
    } else if (outcome === 'lose') {
        resultText.textContent = 'You lose 😢';
        compScore++;
        compScoreEl.textContent = compScore;
    } else {
        resultText.textContent = "It's a draw 🤝";
        draws++;
        drawsEl.textContent = draws;
    }
}

function capitalize(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// Play one round when player clicks
choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const player = btn.getAttribute('data-choice');
        const computer = getComputerChoice();
        const outcome = decide(player, computer);
        updateUI(player, computer, outcome);
    });
});

// Reset game
resetBtn.addEventListener('click', () => {
    youScore = 0; compScore = 0; draws = 0;
    youScoreEl.textContent = '0';
    compScoreEl.textContent = '0';
    drawsEl.textContent = '0';
    youChoiceEl.textContent = '-';
    compChoiceEl.textContent = '-';
    resultText.textContent = 'Make your choice';
});
