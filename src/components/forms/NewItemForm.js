import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Popover, PopoverBody, Button } from 'reactstrap'

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
  <div className="item-form__input-container">
    <input id="name-input" className="form-control item-form__input-container__input" 
      {...input} placeholder={label} type={type} 
    />
      {touched &&
        (error && 
        <Popover placement="right" isOpen={true} target="name-input">
          <PopoverBody>Required field</PopoverBody>
        </Popover>)}
  </div>
)

let NewItemForm = props => {
  const { handleSubmit, onCancelClick, name, label } = props;
  fieldName = name;
  return (
    <div className="form-container">
      <form className="item-form" onSubmit={handleSubmit}>      
        <Field name={name} component={renderField} type="text" label={label} />
        <div className="item-form__button-container">
          <Button className="item-form__button" outline color="success" type="submit">Add</Button>
          <Button className="item-form__button" outline color="success" onClick={onCancelClick}>Cancel</Button>
        </div>      
      </form>
    </div>
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
  onCancelClick : PropTypes.func,
}

NewItemForm = reduxForm({  
  form: 'newlist',
  validate
})(NewItemForm)

export default NewItemForm