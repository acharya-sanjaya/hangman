import React, { useEffect } from "react";
import "../styles/Alphabets.css";
import { useGameMessage } from "../context/GameContext";

interface AlphabetPropType {
    code: number;
}

const Alphabet: React.FC<AlphabetPropType> = ({ code }) => {
    const { guessedLetters, makeGuess, game } = useGameMessage();
    const alphabet = String.fromCharCode(code);
    return (
        <div
            className={`alphabet ${
                guessedLetters.includes(alphabet) || !game.status
                    ? "disabled-btn"
                    : "enabled-btn"
            }`}
            onClick={() => {
                makeGuess(alphabet);
            }}
        >
            {alphabet}
        </div>
    );
};

const Alphabets: React.FC = () => {
    const { makeGuess } = useGameMessage();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            makeGuess(event.key);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const iterator = Array(26).fill(null);

    return (
        <div className="alphabets-container">
            {iterator.map((_, index) => (
                <Alphabet key={index} code={index + 65} />
            ))}
        </div>
    );
};

export default Alphabets;
