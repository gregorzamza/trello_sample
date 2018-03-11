import React from "react";
import PropTypes from 'prop-types'
import TodoBoardContainer from "../containers/TodoBoardContainer";

const BoardList = ({boards, onAddTodoBoardClick, onRemoveTodoBoardClick}) => (
  <div>
    <h3 onClick={onAddTodoBoardClick}>Add</h3>
    {boards.map((board) => (
      <div key={board.id}>
        <TodoBoardContainer {...board}
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