import React from "react"
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const TodoBoardOverview = ({text, id, onRemoveTodoBoardClick}) => (
  <div>
    <h3 onClick={onRemoveTodoBoardClick}>Remove board</h3>
    <Link to={`/board/${id}`}>{text}</Link>
  </div>
)

TodoBoardOverview.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRemoveTodoBoardClick: PropTypes.func.isRequired,
}

export default TodoBoardOverview