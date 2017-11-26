import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../commons'

const ForecastItem = props => (
  <tr>
    <td>{props.date}</td>
    <td>{props.condition}</td>
    <td>
      <Icon alt={props.condition} url={props.icon} />
    </td>
    <td>{`${props.maxTemp}/${props.minTemp}`}</td>
    <td>{props.precip}</td>
  </tr>
)

ForecastItem.propTypes = {
  condition: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  precip: PropTypes.number.isRequired
}

export default ForecastItem
