import React, {
    useState,
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useCallback,
} from "react";
import wordList from "../assets/wordList.json";

const GameMessageContext = createContext<null | contextValue>(null);

interface contextValue {
    randomWord: string;
    setRandomWord: React.Dispatch<React.SetStateAction<string>>;
    guessedLetters: string;
    setGuessedLetters: React.Dispatch<React.SetStateAction<string>>;
    mistakes: number;
    setMistakes: React.Dispatch<React.SetStateAction<number>>;
    game: { status: boolean; message: string };
    setGame: React.Dispatch<
        React.SetStateAction<{ status: boolean; message: string }>
    >;
    displayText: string[];
    setDisplayText: React.Dispatch<React.SetStateAction<string[]>>;
    makeGuess: (guess: string) => void;
    refreshWord: () => void;
}

interface GameMessageProviderProps {
    children: ReactNode;
}

const GameMessageProvider: React.FC<GameMessageProviderProps> = ({
    children,
}) => {
    const randomNumber = parseInt(String(Math.random() * 1000));
    const randomIndex = randomNumber % (wordList.length - 1);

    const [randomWord, setRandomWord] = useState(
        wordList[randomIndex].toUpperCase()
    );
    const [guessedLetters, setGuessedLetters] = useState("");
    const [mistakes, setMistakes] = useState(0);
    const [game, setGame] = useState({ status: true, message: "" });
    const [displayText, setDisplayText] = useState(
        Array(randomWord.length).fill("")
    );

    useEffect(() => {
        console.log(randomWord);
    }, [randomWord]);

    useEffect(() => {
        if (displayText.join("") === randomWord)
            setGame({ status: false, message: "You won" });
    }, [displayText]);

    const refreshWord = () => {
        const randomNumber = parseInt(String(Math.random() * 1000));
        const randomIndex = randomNumber % (wordList.length - 1);
        const randWord = wordList[randomIndex].toUpperCase();
        setRandomWord(randWord);
        setGuessedLetters("");
        setMistakes(0);
        setGame({ status: true, message: "" });
        setDisplayText(Array(randWord.length).fill(""));
        //
    };
    const makeGuess = useCallback(
        (guess: string) => {
            guess = guess.toUpperCase();

            if (guess.length !== 1) return;
            if (guess.toUpperCase() === guess.toLowerCase()) return;
            if (guessedLetters.includes(guess)) {
                alert("This letter is already guessed");
                return;
            }
            setGuessedLetters((prev) => {
                return prev + guess;
            });

            if (!randomWord.includes(guess)) {
                setMistakes((prev) => prev + 1);
                if (mistakes >= 5) {
                    setGame({ status: false, message: "You lose" });
                }
                return;
            }

            setDisplayText((prevDisplayText) => {
                const newDisplayText = [...prevDisplayText];
                randomWord.split("").forEach((letter, index) => {
                    if (letter === guess) {
                        newDisplayText[index] = letter;
                    }
                });
                return newDisplayText;
            });
        },
        [guessedLetters]
    );

    const contextValue = {
        randomWord,
        setRandomWord,
        guessedLetters,
        setGuessedLetters,
        mistakes,
        setMistakes,
        game: { status: game.status, message: game.message },
        setGame,
        displayText,
        setDisplayText,
        makeGuess,
        refreshWord,
    };

    return (
        <GameMessageContext.Provider value={contextValue}>
            {children}
        </GameMessageContext.Provider>
    );
};

const useGameMessage = () => {
    const context = useContext(GameMessageContext);
    if (!context) {
        throw new Error("Context not set");
    }
    return context;
};

export default GameMessageProvider;
export { GameMessageContext, useGameMessage };
