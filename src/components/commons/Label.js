import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ label, text }) => (
  <label htmlFor={label} style={{ color: '#ffffff' }}>
    {text}
  </label>
)

Label.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Label
