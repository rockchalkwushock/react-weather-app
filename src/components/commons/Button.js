import React from 'react'
import PropTypes from 'prop-types'

const Buttons = ({ reset, toggle, units }) => (
  <div className="row">
    <div className="col s12">
      <a
        className="waves-effect waves-light btn-flat z-depth-4 yellow lighten-3 left"
        name="toggleUnits"
        onClick={toggle}
      >
        {`Toggle units to: ${units === 'standard' ? 'metric' : 'standard'}`}
      </a>
      <a
        className="waves-effect waves-light btn-flat z-depth-4 yellow lighten-3 right"
        name="searchAgain"
        onClick={reset}
      >
        Search Again
      </a>
    </div>
  </div>
)

Buttons.PropTypes = {
  reset: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired
}

export default Buttons
