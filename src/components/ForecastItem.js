import React from 'react'

import { Icon } from './commons'

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

export default ForecastItem
