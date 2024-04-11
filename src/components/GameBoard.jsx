// eslint-disable-next-line react/prop-types
export default function GameBoard({onSelected, gameBoard}) {
    return (<ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelected(rowIndex, colIndex)}
                                        disabled={playerSymbol}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        )}
                    </ol>
                </li>
            ))}
        < /ol>
    )
}