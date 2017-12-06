import React from 'react'
import PropTypes from 'prop-types'

const ErrorView = ({ message, reset }) => (
  <div className="row">
    <div className="col s12">
      <div className="card">
        <div className="card-image">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://res.cloudinary.com/rockchalkwushock/c_scale,f_auto,q_auto:eco,w_700/rain.jpg"
            />
            <source
              media="(min-width: 540px)"
              srcSet="https://res.cloudinary.com/rockchalkwushock/c_scale,f_auto,q_auto:eco,w_425/rain.jpg"
            />
            <img
              alt="rain_404"
              src="https://res.cloudinary.com/rockchalkwushock/c_scale,f_auto,q_auto:eco,w_320/rain.jpg"
            />
          </picture>
          <span className="card-title">
            Oops! Something went wrong, please try again.
          </span>
          <a
            className="btn-floating btn-large halfway-fab waves-effect waves-light red darken-4"
            onClick={reset}
          >
            <i className="material-icons large">home</i>
          </a>
        </div>
        <div className="card-content">
          <p>{message}</p>
        </div>
      </div>
    </div>
  </div>
)

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
}

export default ErrorView
