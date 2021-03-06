import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import TextField from './TextField'
import { Button } from 'reactstrap'

const validate = values => {
  const errors = {}
  if (!values[fieldName] || 0 === values[fieldName].length) {
    errors[fieldName] = 'Required field'    
  }
  return errors;
}

let fieldName;

let NewItemForm = props => {
  const { handleSubmit, onCancelClick, name, label } = props;
  fieldName = name;
  return (
    <div className="form-container">
      <form className="item-form" onSubmit={handleSubmit}>      
        <TextField name={name} label={label} />
        <div className="item-form__button-container">
          <Button className="item-form__button" outline color="success" type="submit">Add</Button>
          <Button className="item-form__button" outline color="success" onClick={onCancelClick}>Cancel</Button>
        </div>
      </form>
    </div>
  )
}

NewItemForm.propTypes = {
  handleSubmit : PropTypes.func.isRequired,
  name : PropTypes.string.isRequired,
  label : PropTypes.string,
  onCancelClick : PropTypes.func.isRequired,
}

NewItemForm = reduxForm({  
  form: 'new'+fieldName,
  validate
})(NewItemForm)

export default NewItemForm