import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ onChange, type, value }) => (
  <input
    className="validate"
    onChange={onChange}
    style={{ borderBottomColor: '#ffffff', color: '#ffffff' }}
    type={type}
    value={value}
  />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
