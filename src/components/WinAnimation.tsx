import Confetti from "react-confetti";

const ConfettiComponent = () => {
    return (
        <div>
            <Confetti
                style={{ width: "100%", height: "100%" }}
                numberOfPieces={500}
                recycle={true}
                gravity={0.5}
            />
        </div>
    );
};

export default ConfettiComponent;
