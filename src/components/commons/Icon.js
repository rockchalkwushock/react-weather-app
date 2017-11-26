import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ alt, url }) => (
  <img alt={alt} className="responsive-img" src={url} />
)

Icon.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Icon
