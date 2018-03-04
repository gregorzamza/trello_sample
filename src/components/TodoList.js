import React from "react";
import PropTypes from 'prop-types'
import Todo from "./Todo";

const TodoList = ({todos, name, onRemoveTodoListClick, onRemoveTodoClick, onAddTodoClick, onToggleTodoClick}) => (
  <ul>
    <h3 onClick={onRemoveTodoListClick}>Delete</h3>
    <h5>{name}</h5>
    <h4 onClick={onAddTodoClick}>Add todo</h4>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} 
        onToggleClick={() => onToggleTodoClick(todo.id)} 
        onRemoveClick={() => onRemoveTodoClick(todo.id)} 
      />
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
  onAddTodoClick: PropTypes.func.isRequired,
  onToggleTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
  onRemoveTodoListClick: PropTypes.func.isRequired,
}

export default TodoList