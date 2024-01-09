document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".cell");
    let turn = "x";
    let winner = null;
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWin = () => {
        winningCombinations.forEach((combination) => {
            const [a, b, c] = combination;
            if (
                cells[a].classList.contains(turn) &&
                cells[b].classList.contains(turn) &&
                cells[c].classList.contains(turn)
            ) {
                winner = turn;
                document.querySelector(".announcer").textContent = `${winner.toUpperCase()} wins!`;
                // Disable further moves after a win
                cells.forEach((cell) => cell.removeEventListener("click", handleCellClick));
            }
        });
    };

    const handleCellClick = (cell) => {
        if (cell.textContent === "") {
            cell.textContent = turn;
            cell.classList.add(turn);
            checkWin();
            // Switch player turns
            turn = (turn === "x") ? "o" : "x";
        }
    };

    cells.forEach((cell) => {
        cell.addEventListener("click", () => handleCellClick(cell));
    });
});
