import React from "react";
import PropTypes from 'prop-types'
import Todo from "./Todo";

const TodoList = ({todos, name, onListClick, onTodoClick}) => (
  <ul>
    <h5 onClick={onListClick}>{name}</h5>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  name: PropTypes.string.isRequired,
  onListClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList