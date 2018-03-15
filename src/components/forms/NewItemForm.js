import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values[fieldName]) {
    errors[fieldName] = 'Required field'
  }
  return errors;
}

let fieldName;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        (error && <span>{error}</span>)}
    </div>
  </div>
)

let NewItemForm = props => {
  const { handleSubmit, name, label } = props;
  fieldName = name;
  return (
    <form onSubmit={handleSubmit}>
      <div>        
        <Field name={name} component={renderField} type="text" label={label} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

renderField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.any,
  type: PropTypes.any,
  meta: PropTypes.any,
}

NewItemForm.propTypes = {
  handleSubmit : PropTypes.func.isRequired,
  name : PropTypes.string.isRequired,
  label : PropTypes.string,
}

NewItemForm = reduxForm({  
  form: 'newlist',
  validate
})(NewItemForm)

export default NewItemForm