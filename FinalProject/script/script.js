document.addEventListener("DOMContentLoaded", () => {
    const board = [
        ["r", "n", "b", "q", "k", "b", "n", "r"],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["R", "N", "B", "Q", "K", "B", "N", "R"]
    ];

    const pieces = {
        "r": "♜", "n": "♞", "b": "♝", "q": "♛", "k": "♚", "p": "♟",
        "R": "♖", "N": "♘", "B": "♗", "Q": "♕", "K": "♔", "P": "♙"
    };

    const chessboard = document.getElementById("chessboard");

    function drawBoard() {
        chessboard.innerHTML = "";
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const square = document.createElement("div");
                square.className = "square";
                square.classList.add((i + j) % 2 === 0 ? "white" : "black");
                square.dataset.row = i;
                square.dataset.col = j;
                if (board[i][j]) {
                    const piece = document.createElement("span");
                    piece.className = "piece";
                    piece.textContent = pieces[board[i][j]];
                    square.appendChild(piece);
                }
                chessboard.appendChild(square);
            }
        }
    }

    drawBoard();
});
