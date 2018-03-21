import React from "react";
import PropTypes from 'prop-types'
import TodoBoardOverview from "./TodoBoardOverview";
import NewItemFormHolder from "./forms/NewItemFormHolder.jsx"

const field="boardName";
const label="Board";

const BoardList = ({boards, onAddTodoBoardClick, onRemoveTodoBoardClick}) => (
  <div>
    <NewItemFormHolder onItemAdd={onAddTodoBoardClick} name={field} label={label}/>
    {boards.map((board) => (
      <div key={board.id}>
        <TodoBoardOverview {...board}
          onRemoveTodoBoardClick={() => onRemoveTodoBoardClick(board.id)}
        />
      </div>
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