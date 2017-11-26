import React from 'react'
import PropTypes from 'prop-types'

import { Container, Icon } from '../commons'

const CurrentWeather = ({ display, ...rest }) => (
  <Container className="row">
    <Container className="col s12">
      <Container className="card z-depth-4">
        <Container className="card-content">
          <span className="card-title grey-text text-darken-4">
            {`${rest.city}, ${rest.region}, ${rest.country}`}
          </span>
          <span className="card-title grey-text text-darken-4">
            {rest.currentTime}
          </span>
        </Container>
      </Container>
    </Container>
    <Container className="col s12">
      <Container className="card z-depth-4">
        <Container className="card-content">
          <Icon alt={rest.condition} url={rest.icon} />
          <span className="card-title grey-text text-darken-4">
            {`${rest.temp} ${display[0]}`}
          </span>
          <p className="grey-text text-darken-4">
            {`Feels like: ${rest.feelsLike} ${display[0]}`}
          </p>
          <p className="grey-text text-darken-4">
            {`${rest.windCard} ${rest.wind} ${display[2]}`}
          </p>
        </Container>
      </Container>
    </Container>
  </Container>
)

CurrentWeather.propTypes = {
  city: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  currentTime: PropTypes.string.isRequired,
  display: PropTypes.array.isRequired,
  feelsLike: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  windCard: PropTypes.string.isRequired
}

export default CurrentWeather
