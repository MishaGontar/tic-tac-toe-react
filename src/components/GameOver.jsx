// eslint-disable-next-line react/prop-types
export default function GameOver({winner, onReset}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winner === "draw" ? "It's a draw" : `${winner} won!`}</p>
            <p>
                <button onClick={onReset}>Rematch!</button>
            </p>
        </div>
    )
}