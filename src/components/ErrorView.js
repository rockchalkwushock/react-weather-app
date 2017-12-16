import React from 'react'
import PropTypes from 'prop-types'

import rain from '../assets/rain.jpg'

const ErrorView = ({ message, reset }) => (
  <div className="row">
    <div className="col s12">
      <div className="card">
        <div className="card-image">
          <img alt="rain_404" className="responsive-img" src={rain} />
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
