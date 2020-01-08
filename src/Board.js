import React from 'react';
import './Board.css';

function Board({ size }) {
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
    return rowIndex * colIndex % 2 === 0 ? "snake" : "";
  }
}

export default Board;
