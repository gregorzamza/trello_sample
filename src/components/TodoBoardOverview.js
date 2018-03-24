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
        <h3 className="board-overview__remove-button" onClick={this.props.onRemoveTodoBoardClick}>Remove board</h3>
        <p className="board-overview__board-name">{this.props.text}</p>
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