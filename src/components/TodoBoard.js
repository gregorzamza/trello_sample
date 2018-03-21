import React from "react";
import PropTypes from 'prop-types'
import TodoListContainer from "../containers/TodoListContainer";
import NewItemFormHolder from "./forms/NewItemFormHolder.jsx"

const field="listname";
const label="List";

const TodoBoard = ({lists, text, id, onAddTodoListClick, onRemoveTodoListClick}) => (  
  <div>
    {text}
    <NewItemFormHolder onItemAdd={onAddTodoListClick} name={field} label={label} id={id}/>
    {lists.map((list) => (
      <TodoListContainer key={list.id} {...list}
        onRemoveTodoListClick={() => onRemoveTodoListClick(list.id)} 
      />
    ))}
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