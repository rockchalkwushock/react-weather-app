import React from 'react'
import PropTypes from 'prop-types'

import { Button, Container } from '../commons'
import CurrentWeather from './CurrentWeather'
import ForecastList from './ForecastList'

const Weather = ({ current, forecast, location, reset, toggle, units }) => {
  const data =
    units === 'standard'
      ? { ...current.base, ...current.standard }
      : { ...current.base, ...current.metric }
  const display = units === 'standard' ? ['F', 'in', 'mph'] : ['C', 'mm', 'kph']
  return (
    <Container>
      <CurrentWeather {...data} {...location} display={display} />
      <Button toggle={toggle} reset={reset} units={units} />
      <ForecastList display={display} forecast={forecast} units={units} />
    </Container>
  )
}

Weather.propTypes = {
  current: PropTypes.object.isRequired,
  forecast: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired
}

export default Weather
