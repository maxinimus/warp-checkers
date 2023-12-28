import React from "react";
import { Route, Routes } from "react-router";

import "./App.css";
import GameScreen from "./pages/GameScreen/GameScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LoginScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </div>
  );
}

export default App;