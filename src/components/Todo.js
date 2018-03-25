import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onToggleClick, onRemoveClick, completed, text }) => (
  <div className="todo">
    <div className="todo__content-row">
      <div className="todo__task-column">
        <p
          className="todo__todo-text"
          onClick={onToggleClick}
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {text}
        </p>
      </div>
      <div className="todo__remove-icon-column">
        <div className="todo__remove-icon-container">
          <span onClick={onRemoveClick} className="oi todo__remove-icon"
                  data-glyph="x" title="Remove todo" aria-hidden="true"></span>      
        </div>
      </div>
    </div>
  </div>
)

Todo.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo