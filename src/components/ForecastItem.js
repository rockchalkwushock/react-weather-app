import React from 'react'

import { Icon } from './commons'

const ForecastItem = ({ base, metric, standard, toggle }) => (
  <div className="item">
    <h3>{base.date}</h3>
    <h3>{base.condition}</h3>
    <Icon alt={base.condition} url={base.icon} />
    <h3>
      {toggle ? `${standard.minTemp} F` : `${metric.minTemp} C`} /{' '}
      {toggle ? `${standard.maxTemp} F` : `${metric.maxTemp} C`}
    </h3>
    <h3>{toggle ? `${standard.precip} in` : `${metric.precip} mm`}</h3>
  </div>
)

export default ForecastItem
