import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import {activeSymbol, deriveGameBoard, deriveWinner, PLAYERS} from "./utils.js";


function App() {
    const [players, setPlayers] = useState(PLAYERS)
    const [gameTurns, setGameTurns] = useState([])
    const symbol = activeSymbol(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns)
    const winner = deriveWinner(gameBoard, players, gameTurns)

    function handleSelectedSquare(rowIndex, colIndex) {
        setGameTurns((prev) => {
            const currentPlayer = activeSymbol(prev)
            return [
                {
                    square: {
                        row: rowIndex,
                        col: colIndex,
                    },
                    player: currentPlayer,
                },
                ...prev
            ];
        })
    }

    function handleRestart() {
        setGameTurns([])
    }

    function handleChangeName(symbol, newName) {
        setPlayers(prevState => {
            return {
                ...prevState,
                [symbol]: newName
            }
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className={"highlight-player"}>
                    <Player
                        name={PLAYERS.X}
                        symbol={"X"}
                        isActive={symbol === 'X'}
                        onChangeName={handleChangeName}
                    />
                    <Player
                        name={PLAYERS.O}
                        symbol={"O"}
                        isActive={symbol === 'O'}
                        onChangeName={handleChangeName}
                    />
                </ol>
                {winner && <GameOver winner={winner} onReset={handleRestart}/>}
                <GameBoard onSelected={handleSelectedSquare} gameBoard={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
