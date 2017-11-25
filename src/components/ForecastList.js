import React from 'react'

import ForecastItem from './ForecastItem'

const ForecastList = ({ forecast, toggle }) => (
  <div className="forecast">
    {forecast.map(item => (
      <ForecastItem {...item} key={item.base.date} toggle={toggle} />
    ))}
  </div>
)

export default ForecastList
