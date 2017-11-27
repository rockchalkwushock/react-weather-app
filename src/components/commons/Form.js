import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ children, onSubmit }) => (
  <form className="col s12" onSubmit={onSubmit}>
    {children}
  </form>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form
