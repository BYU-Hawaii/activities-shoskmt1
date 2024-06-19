document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll('.option');
    const resultDiv = document.getElementById('result');

    options.forEach(option => {
        option.addEventListener('click', function() {
            const playerChoice = option.id;
            const computerChoice = generateComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);
            displayResult(result);
        });
    });

    function generateComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(player, computer) {
        if (player === computer) {
            return 'It\'s a tie!';
        } else if ((player === 'rock' && computer === 'scissors') ||
                   (player === 'paper' && computer === 'rock') ||
                   (player === 'scissors' && computer === 'paper')) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    }

    function displayResult(result) {
        resultDiv.textContent = result;
    }
});
