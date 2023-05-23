import { useState } from "react";
import "./App.css";

const Square = ({
  value,
  onSquareClick
}: {
  value: number;
  onSquareClick?: () => void;
}) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
const Board = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (index: number) => {
    /** slice: create a copy of our squares array */
    if (squares[index]) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "0";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <section className="container">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </section>
  );
};

export default Board;
