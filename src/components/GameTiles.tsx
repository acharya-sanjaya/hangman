import React from "react";
import "../styles/GameTiles.css";
import { useGameMessage } from "../context/GameContext";

const GameTiles = () => {
    const { randomWord, displayText } = useGameMessage();
    const slicedWord = randomWord.split("");

    return (
        <div className="tiles-container">
            {slicedWord.map((_, index) => (
                <GameTile letter={displayText[index]} key={index} />
            ))}
        </div>
    );
};

interface GameTilePropType {
    letter: string;
}

const GameTile: React.FC<GameTilePropType> = ({ letter }) => {
    return <div className="game-tile">{letter}</div>;
};

export default GameTiles;
