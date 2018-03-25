import React from "react";
import PropTypes from 'prop-types'
import TodoListContainer from "../containers/TodoListContainer";
import NewItemFormHolder from "./forms/NewItemFormHolder.jsx"

const field="list";
const label="List";

const TodoBoard = ({lists, text, id, onAddTodoListClick, onRemoveTodoListClick}) => (  
  <div className="todo-board">
    <div className="todo-board__name-container">      
      <p className="todo-board__board-name">{text}</p>      
    </div>
    <div className="todo-board__content-container">
      <div className="todo-board__lists-row">
        <NewItemFormHolder onItemAdd={onAddTodoListClick} name={field} label={label} id={id}/>
        {lists.map((list) => (
          <TodoListContainer key={list.id} {...list}
            onRemoveTodoListClick={() => onRemoveTodoListClick(list.id)} 
          />
        ))}
      </div>
    </div>
  </div>
)

TodoBoard.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onAddTodoListClick: PropTypes.func.isRequired,  
  onRemoveTodoListClick: PropTypes.func.isRequired,
}

export default TodoBoard