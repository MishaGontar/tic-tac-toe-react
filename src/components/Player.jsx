import {useState} from "react";
// eslint-disable-next-line react/prop-types
export default function Player({name, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick() {
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
        setIsEditing(prevState => !prevState)
    }

    function handleChange(e) {
        setPlayerName(e.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing && <input className="player-name" value={playerName} onChange={handleChange}/>}
                {!isEditing && <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}