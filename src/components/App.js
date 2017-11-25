import React from 'react'
import { graphql } from 'react-apollo'

import { query } from '../data'

export const App = ({ data }) => {
  const { error, getWeather, loading } = data
  if (loading) {
    return <h1>Loading...</h1>
  } else if (error) {
    return <h1>Error...</h1>
  }
  const { current, location } = getWeather
  const { base, standard } = current
  const { city, country, currentTime, region } = location
  const header = `${city}, ${region}, ${country}`
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{header}</h2>
      <h2>{currentTime}</h2>
      <div>
        <h2>
          Currently: {base.condition} & {standard.temp}F
        </h2>
        <h4>Feels like: {standard.feelsLike}F</h4>
        <div>
          <h3>Change of rain: {standard.precip}%</h3>
          <h3>
            Wind: {base.windCard} {standard.wind}mph
          </h3>
          <h3>Pressure: {standard.pres}in</h3>
          <h3>Visibility: {standard.vis}mi</h3>
        </div>
      </div>
    </div>
  )
}

export default graphql(query)(App)
