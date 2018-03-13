import React from "react";
import PropTypes from 'prop-types'
import TodoBoardOverview from "./TodoBoardOverview";

const BoardList = ({boards, onAddTodoBoardClick, onRemoveTodoBoardClick}) => (
  <div>
    <h3 onClick={onAddTodoBoardClick}>Add</h3>
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