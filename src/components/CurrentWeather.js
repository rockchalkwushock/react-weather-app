import React from 'react'

import { Icon } from './commons'

const CurrentWeather = ({ display, ...rest }) => (
  <div className="row">
    <div className="col s12">
      <div className="card z-depth-4">
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">
            {`${rest.city}, ${rest.region}, ${rest.country}`}
          </span>
          <span className="card-title grey-text text-darken-4">
            {rest.currentTime}
          </span>
        </div>
      </div>
    </div>
    <div className="col s12">
      <div className="card z-depth-4">
        <div className="card-content">
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
        </div>
      </div>
    </div>
  </div>
)

export default CurrentWeather
