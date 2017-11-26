import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Container = ({ children, className }) => (
  <div className={className}>{children}</div>
)

Container.propTypes = {
  className: PropTypes.string
}

export default Container
