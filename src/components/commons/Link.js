import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ direction, text, url }) => (
  <a className={`grey-text text-lighten-4 ${direction}`} href={url}>
    {text}
  </a>
)

Link.propTypes = {
  direction: PropTypes.string,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Link
