import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.boardName) {
    errors.boardName = 'Required field'
  }
  return errors;
}

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

let NewListForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>        
        <Field name="listName" component={renderField} type="text" label="List" />
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

NewListForm.propTypes = {
  handleSubmit : PropTypes.func.isRequired,
}

NewListForm = reduxForm({  
  form: 'newlist',
  validate
})(NewListForm)

export default NewListForm