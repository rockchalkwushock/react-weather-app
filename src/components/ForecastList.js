import React from 'react'

import ForecastItem from './ForecastItem'

const ForecastList = ({ display, forecast, units }) => {
  const rows = forecast.map(item => {
    const data =
      units === 'standard'
        ? { ...item.base, ...item.standard }
        : { ...item.base, ...item.metric }
    return <ForecastItem {...data} key={item.base.date} />
  })
  return (
    <table className="striped centered responsive-table z-depth-4">
      <thead>
        <tr>
          <th>Date</th>
          <th>Condition</th>
          <th>Icon</th>
          <th>{`Hi/Lo (${display[0]})`}</th>
          <th>{`Precipitation (${display[1]})`}</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ForecastList
