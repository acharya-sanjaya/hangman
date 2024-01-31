import { useEffect } from "react";
import { useGameMessage } from "../context/GameContext";
import HangingMan from "./HangingMan";
import WinAnimation from "./WinAnimation";
import "../styles/GameMessage.css";

const GameMessage = () => {
    const { game, refreshWord } = useGameMessage();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === " " && !game.status) {
                refreshWord();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [game.status]);
    const { randomWord } = useGameMessage();
    return (
        <div
            className="game-message-container"
            style={game.status ? { display: "none" } : { display: "block" }}
        >
            <div className="game-finish-pic">
                {game.message === "You won" ? <WinAnimation /> : <HangingMan />}
            </div>
            <div className="greet-container">
                <div className="message">
                    {game.message === "You lose" ? "You lose" : "You win"}
                </div>
                <div>
                    {game.message === "You lose" &&
                        "Correct Word was: " + randomWord}
                </div>
                <div className="replay-btn" onClick={refreshWord}>
                    Play Again
                </div>
            </div>
        </div>
    );
};

export default GameMessage;
