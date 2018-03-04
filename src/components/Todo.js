import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onToggleClick, onRemoveClick, completed, text }) => (
  <li>
    <h3 
      onClick={onToggleClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </h3>
    <h5 onClick={onRemoveClick}>
      Remove
    </h5>
  </li>
)

Todo.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo