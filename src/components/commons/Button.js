import React from 'react'
import PropTypes from 'prop-types'

const Buttons = ({ reset, toggle, units }) => (
  <div className="row">
    <div className="col s12 m6 center-align" style={{ marginBottom: '4px' }}>
      <a
        className="waves-effect waves-light btn-flat z-depth-4 yellow lighten-3"
        name="toggleUnits"
        onClick={toggle}
      >
        {`Toggle units to: ${units === 'standard' ? 'metric' : 'standard'}`}
      </a>
    </div>
    <div className="col s12 m6 center-align">
      <a
        className="waves-effect waves-light btn-flat z-depth-4 yellow lighten-3"
        name="searchAgain"
        onClick={reset}
      >
        Search Again
      </a>
    </div>
  </div>
)

Buttons.propTypes = {
  reset: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired
}

export default Buttons
