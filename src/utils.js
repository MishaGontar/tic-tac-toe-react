import {WINNING_COMBINATIONS} from "./winning-combinations.js";

export const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2',
};

export function activeSymbol(gameTurn) {
    let currentSymbol = 'X'

    if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
        currentSymbol = 'O'
    }
    return currentSymbol;
}

export function deriveWinner(gameBoard, players, gameTurns) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSymbol = gameBoard[combination[2].row][combination[2].column]
        if (firstSymbol && firstSymbol === secondSymbol && secondSymbol === thirdSymbol) {
            winner = players[firstSymbol];
        }
    }
    if (gameTurns.length === 9 && !winner) {
        winner = "draw"
    }
    return winner
}

export function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player
    }
    return gameBoard
}