import React from "react";
import { Route, Routes } from "react-router";

import GameScreen from "./components/GameScreen/GameScreen";
import LobbyScreen from "./components/LobbyScreen/LobbyScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LobbyScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </div>
  );
}

export default App;
