import React from "react";
import PropTypes from 'prop-types'
import TodoList from "./TodoList";

const TodoBoard = ({lists, name, onListClick}) => (
  lists.map((list) => (
    <div key={list.id}>
      {name}
      <TodoList {...list} onListClick={() => onListClick(list.id)} />
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