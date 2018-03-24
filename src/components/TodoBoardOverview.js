import React from "react"
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class TodoBoardOverview extends React.Component{    

  constructor(props){
    super(props);
    this.state = {redirect: false};
    this.onContainerClick = this.onContainerClick.bind(this);
  }  

  onContainerClick(){
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect){
      return <Redirect push to={`/board/${this.props.id}`} />
    }

    return (
      <div className="board-overview" onClick={this.onContainerClick}>
        <div className="board-overview__remove-icon-container">
          <span onClick={this.props.onRemoveTodoBoardClick} className="oi board-overview__remove-icon"
            data-glyph="x" title="Remove board" aria-hidden="true"></span>
        </div>
        <div className="board-overview__board-name-container--centered">
          <p className="board-overview__board-name">{this.props.text}</p>
        </div>
      </div>
    )
  }
}

TodoBoardOverview.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRemoveTodoBoardClick: PropTypes.func.isRequired,
}

export default TodoBoardOverview