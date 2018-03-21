import React from "react";
import PropTypes from 'prop-types'
import NewItemForm from './NewItemForm'
import { Button } from 'react-bootstrap'

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
    return (
      this.state.showForm ? 
        <NewItemForm onSubmit={(values) => {
          this.onSubmit(values[this.props.name], this.props.id);
          }} onCancelClick={this.onCancelClick} name={this.props.name} label={this.props.label}
        />
        :
        <Button onClick={this.onAddNewClick}>New</Button>
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