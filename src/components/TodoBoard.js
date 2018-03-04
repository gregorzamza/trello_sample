import React from "react";
import PropTypes from 'prop-types'
import TodoList from "./TodoList";

const TodoBoard = ({lists, name, onAddTodoListClick, onRemoveTodoListClick}) => (
  lists.map((list) => (
    <div key={list.id}>
      <h4 onClick={onAddTodoListClick}>Add list</h4>
      {name}
      <TodoList {...list}
        onRemoveTodoListClick={() => onRemoveTodoListClick(list.id)} 
      />
    </div>
  ))
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
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onListClick: PropTypes.number.isRequired,
}

export default TodoBoard