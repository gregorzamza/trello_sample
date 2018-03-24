import React from "react";
import PropTypes from 'prop-types'
import NewItemForm from './NewItemForm'

class NewItemFormHolder extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { showForm: false };
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onAddNewClick = this.onAddNewClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);    
  }

  onCancelClick() {
    this.setState({ showForm: false });
  }

  onAddNewClick() {
    this.setState({ showForm: true });
  }
  
  onSubmit(value, id) {
    this.props.onItemAdd(value, id);
    this.setState({ showForm: false })
  }

  render() {

    const initialView = <p className="board-overview__board-name">Add new {this.props.name}</p>      

    const input =       
        <NewItemForm
          onSubmit={(values) => {
            this.onSubmit(values[this.props.name], this.props.id);
          }}
          onCancelClick={this.onCancelClick} 
          name={this.props.name} 
          label={this.props.label}
        />      

    return (
      <div onClick={this.state.showForm ? null : this.onAddNewClick} 
        className="board-overview board-overview--light board-overview--centered">
        {this.state.showForm ? input : initialView}
      </div>
    )
  }
}

NewItemFormHolder.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  onItemAdd: PropTypes.func.isRequired,  
}

export default NewItemFormHolder