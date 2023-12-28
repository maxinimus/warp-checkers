import React, { useState } from "react";
import "./LobbyScreen.css";

const LobbyScreen: React.FC = () => {
  const [gameCode, setGameCode] = useState("");

  const handleStartGame = () => {
    console.log("Start new game");
  };

  const handleJoinGame = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Join game with code:", gameCode);
    }
  };

  return (
    <div className="lobby">
      <div className="lobby-container">
        <button onClick={handleStartGame} className="start-button">
          Start Game
        </button>
        <span className="or-label">or</span>
        <input
          type="text"
          placeholder="Enter Game Code"
          value={gameCode}
          onChange={(e) => setGameCode(e.target.value)}
          onKeyPress={handleJoinGame}
          className="game-code-input"
        />
      </div>
    </div>
  );
};

export default LobbyScreen;
