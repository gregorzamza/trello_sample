import React from "react";
import PropTypes from 'prop-types'
import Todo from "./Todo";
import NewTodoForm from "./forms/NewTodoForm"

const field = "todo"
const label = "Todo name"

const TodoList = ({todos, text, id, onRemoveTodoListClick, onRemoveTodoClick, onAddTodoClick, onToggleTodoClick}) => (
  <div className='todo-list'>    
      <div className="todo-list__remove-icon-container">
          <span onClick={onRemoveTodoListClick} className="oi todo-list__remove-icon"
            data-glyph="x" title="Remove list" aria-hidden="true"></span>
      </div>
      <div className="todo-list__content-container">
        <div className="todo-list__content-container__list-name-container">
          <p className="todo-list__content-container__list-name">{text}</p>
        </div>
        <div className="todo-list__content-container__todos-container">
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} 
              onToggleClick={() => onToggleTodoClick(todo.id)}
              onRemoveClick={() => onRemoveTodoClick(todo.id)} 
            />
          ))}
          <NewTodoForm 
                onSubmit={(values) => {
                  onAddTodoClick(values[field], id);
                }} 
                id={id}
                name={field} 
                label={label}                  
          />          
        </div>        
      </div>      
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onAddTodoClick: PropTypes.func.isRequired,
  onToggleTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
  onRemoveTodoListClick: PropTypes.func.isRequired,
}

export default TodoList