import { useGameMessage } from "../context/GameContext";
import "../styles/HangingMan.css";

const HangingMan = () => {
    const { mistakes } = useGameMessage();
    return (
        <div className="hangingman-container">
            <div className="always-block">
                <div className="base"></div>
                <div className="v-stand-1"></div>
                <div className="h-stand"></div>
                <div className="v-stand-2"></div>
            </div>
            <div className="toggles">
                <div
                    className="hangman-head"
                    style={
                        mistakes > 0
                            ? { display: "block" }
                            : { display: "none" }
                    }
                ></div>
                <div
                    className="hangman-body"
                    style={
                        mistakes > 1
                            ? { display: "block" }
                            : { display: "none" }
                    }
                ></div>
                <div
                    className="hangman-left-arm"
                    style={
                        mistakes > 2
                            ? { display: "block" }
                            : { display: "none" }
                    }
                ></div>
                <div
                    className="hangman-right-arm"
                    style={
                        mistakes > 3
                            ? { display: "block" }
                            : { display: "none" }
                    }
                ></div>
                <div
                    className="hangman-left-leg"
                    style={
                        mistakes > 4
                            ? { display: "block" }
                            : { display: "none" }
                    }
                ></div>
                <div
                    className="hangman-right-leg"
                    style={
                        mistakes > 5
                            ? { display: "block" }
                            : { display: "none" }
                    }
                ></div>
            </div>
        </div>
    );
};

export default HangingMan;
