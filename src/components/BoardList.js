import React from "react";
import PropTypes from 'prop-types'
import TodoBoardOverview from "./TodoBoardOverview";
import NewItemFormHolder from "./forms/NewItemFormHolder.jsx"

const field="board";
const label="Board Name";

const BoardList = ({boards, onAddTodoBoardClick, onRemoveTodoBoardClick}) => (
  <div className="board-list">
    <NewItemFormHolder onItemAdd={onAddTodoBoardClick} name={field} label={label}/>    
    {boards.map((board) => (
      <TodoBoardOverview key={board.id} {...board}
        onRemoveTodoBoardClick={() => onRemoveTodoBoardClick(board.id)}
      />
    ))}
  </div>
)

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  onAddTodoBoardClick: PropTypes.func.isRequired,
  onRemoveTodoBoardClick: PropTypes.func.isRequired,
}

export default BoardList