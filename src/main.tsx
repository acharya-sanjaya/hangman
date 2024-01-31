import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GameMessageProvider from "./context/GameContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GameMessageProvider>
            <App />
        </GameMessageProvider>
    </React.StrictMode>
);
