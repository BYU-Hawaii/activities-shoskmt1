document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function cellClicked(event) {
        const row = event.target.getAttribute('data-row');
        const col = event.target.getAttribute('data-col');
        const index = row * 3 + col;
        if (gameState[index] === '' && gameActive) {
            gameState[index] = currentPlayer;
            event.target.innerText = currentPlayer;
            checkResult();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function checkResult() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                gameActive = false;
                cells[a].style.backgroundColor = 'lightgreen';
                cells[b].style.backgroundColor = 'lightgreen';
                cells[c].style.backgroundColor = 'lightgreen';
                setTimeout(() => {
                    alert(`${gameState[a]} wins!`);
                    resetBoard();
                }, 5000); // Reset after 5 seconds
                return;
            }
        }
        if (!gameState.includes('') && gameActive) {
            gameActive = false;
            setTimeout(() => {
                alert("It's a draw!");
                resetBoard();
            }, 5000); // Reset after 5 seconds
        }
    }

    function resetBoard() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => {
            cell.innerText = '';
            cell.style.backgroundColor = '';
        });
        gameActive = true;
        currentPlayer = 'X';
    }

    cells.forEach(cell => cell.addEventListener('click', cellClicked));
});
