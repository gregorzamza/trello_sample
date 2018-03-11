import React from "react";
import PropTypes from 'prop-types'
import TodoBoardContainer from "../containers/TodoBoardContainer";

const BoardList = ({boards, onAddTodoBoardClick, onRemoveTodoBoardClick}) => (
  <div>
    <h3 onClick={onAddTodoBoardClick}>Add</h3>
    {boards.map((board) => (
      <div key={board.id}>
        <TodoBoardContainer text = {board.text}
          onRemoveTodoBoardClick={() => onRemoveTodoBoardClick(board.id)} 
        />
      </div>
    ))}
  </div>
)

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      lists: PropTypes.arrayOf(
        PropTypes.shape({
          todos: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              completed: PropTypes.bool.isRequired,
              text: PropTypes.string.isRequired
            }).isRequired
          ).isRequired,
          name: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired
        }).isRequired
      ).isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  onAddTodoBoardClick: PropTypes.func.isRequired,
  onRemoveTodoBoardClick: PropTypes.func.isRequired,
}

export default BoardList