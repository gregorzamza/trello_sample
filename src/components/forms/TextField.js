import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Popover, PopoverBody} from 'reactstrap'

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

const TextField = ({name, label}) => (
  <Field name={name} component={renderField} type="text" label={label} />
)

renderField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default TextField;