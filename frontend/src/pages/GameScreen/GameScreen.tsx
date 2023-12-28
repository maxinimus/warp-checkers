import React from "react";
import "./GameScreen.css";

type Piece = {
  color: "black" | "white";
  isKing: boolean;
};

type Cell = Piece | null;

// Function to create the initial board state
const createInitialBoardState = (): Cell[][] => {
  const initialBoardState: Cell[][] = [];
  for (let row = 0; row < 10; row++) {
    initialBoardState[row] = [];
    for (let col = 0; col < 14; col++) {
      initialBoardState[row][col] = null; // All cells are initially empty
    }
  }
  return initialBoardState;
};

// Piece component
const PieceComponent: React.FC<{ piece: Piece }> = ({ piece }) => {
  const pieceClass = `piece ${piece.color} ${piece.isKing ? "king" : ""}`;
  return <div className={pieceClass} />;
};

const Board: React.FC<{ board: Cell[][] }> = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => {
            // Determine if the cell should be dark or light
            const isDarkCell = (rowIndex + colIndex) % 2 === 1;
            const warpCell =
              colIndex == 0 ||
              colIndex == 1 ||
              colIndex == 12 ||
              colIndex == 13;
            return (
              <div
                key={colIndex}
                /*                className={`cell ${
                  colIndex == 0 || colIndex == 13 ? "warp" : ""
                } ${isDarkCell ? "dark" : "light"}`} */
                className={`cell ${warpCell ? "warp" : ""} ${
                  isDarkCell ? "dark" : "light"
                }`}
              >
                {/* Cell content */}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

// GameScreen component
const GameScreen: React.FC = () => {
  const [board, setBoard] = React.useState<Cell[][]>(createInitialBoardState());
  console.log(board);

  return (
    <div className="game">
      <Board board={board} />
    </div>
  );
};

export default GameScreen;
