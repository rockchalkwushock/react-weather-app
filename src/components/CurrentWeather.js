import React from 'react'

import { Icon } from './commons'

const CurrentWeather = ({ base, metric, standard, toggle }) => (
  <div>
    <h1>Temperature: {toggle ? `${standard.temp} F` : `${metric.temp} C`}</h1>
    <Icon alt={base.condition} url={base.icon} />
    <p>
      Feels like: {toggle ? `${standard.feelsLike} F` : `${metric.feelsLike} C`}
    </p>
    <h2>
      {base.windCard} {toggle ? `${standard.wind} mph` : `${metric.wind} kph`}
    </h2>
  </div>
)

export default CurrentWeather
