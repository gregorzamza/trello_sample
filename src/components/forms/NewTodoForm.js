import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import TextField from './TextField'

const validate = values => {
  const errors = {}
  if (!values[fieldName] || 0 === values[fieldName].length) {
    errors[fieldName] = 'Required field'
  }
  return errors;
}

let fieldName;
let listId;

let NewItemForm = props => {
  const { handleSubmit, name, label, id } = props;
  fieldName = name;
  listId = id;
  return (
    <div className="form-container">
      <form className="item-form" onSubmit={handleSubmit}>      
        <TextField name={name} label={label} />
      </form>
    </div>
  )
}

NewItemForm.propTypes = {
  handleSubmit : PropTypes.func.isRequired,
  name : PropTypes.string.isRequired,
  label : PropTypes.string,
  id: PropTypes.number.isRequired,  
}

NewItemForm = reduxForm({  
  form: 'newtodo'+ listId,
  validate
})(NewItemForm)

export default NewItemForm