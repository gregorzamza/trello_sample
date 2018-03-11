import React from "react";
import PropTypes from 'prop-types'
import TodoListContainer from "../containers/TodoListContainer";

const TodoBoard = ({lists, text, onAddTodoListClick, onRemoveTodoListClick, onRemoveTodoBoardClick}) => (
  <div>
    <h3 onClick={onRemoveTodoBoardClick}>Remove board</h3>
    {text}
    <h4 onClick={onAddTodoListClick}>Add list</h4>
    {lists.map((list) => (
      <div key={list.id}>
        <TodoListContainer {...list}
          onRemoveTodoListClick={() => onRemoveTodoListClick(list.id)} 
        />
      </div>
    ))}
  </div>
)

TodoBoard.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      todos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  text: PropTypes.string.isRequired,
  onAddTodoListClick: PropTypes.func.isRequired,
  onRemoveTodoBoardClick: PropTypes.func.isRequired,
  onRemoveTodoListClick: PropTypes.func.isRequired,
}

export default TodoBoard