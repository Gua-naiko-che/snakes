import React from 'react';
import './Board.css';

function Board({ size, snake, food }) {
  const indexes = [...Array(size).keys()];

  return (
    <table className="board">{renderRows()}</table>
  );

  function renderRows() {
    return indexes.map(renderRow);
  }

  function renderRow(rowIndex) {
    const cells = indexes.map(colIndex => renderCell(rowIndex, colIndex));
    return <tr key={rowIndex}>{cells}</tr>;
  }

  function renderCell(rowIndex, colIndex) {
    return <td className={getClass(rowIndex, colIndex)} key={colIndex}></td>;
  }

  function getClass(rowIndex, colIndex) {
    const currentCell = [rowIndex, colIndex];
    const isSnakeCell = snake.some(point => isSamePoint(point, currentCell));
    const isFoodCell = isSamePoint(food, currentCell)

    if (isSnakeCell) {
      return "snake";
    } else if (isFoodCell) {
      return "food";
    } else {
      return "";
    }
  }

  function isSamePoint(p1, p2) {
    return p1[0] === p2[0] && p1[1] === p2[1]
  }
}

export default Board;
