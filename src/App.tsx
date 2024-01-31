import Alphabets from "./components/Alphabets";
import HangingMan from "./components/HangingMan";
import GameTiles from "./components/GameTiles";
import { useGameMessage } from "./context/GameContext";
import GameMessage from "./components/GameMessage";

const App = () => {
    const { game } = useGameMessage();
    return (
        <div className="App">
            {game.status ? (
                <div>
                    <HangingMan />
                    <GameTiles />
                    <Alphabets />
                </div>
            ) : (
                <GameMessage />
            )}
        </div>
    );
};

export default App;
