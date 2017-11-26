import React from 'react'

const Buttons = ({ reset, toggle, units }) => (
  <div className="row">
    <div className="col s12">
      <a
        className="waves-effect waves-light btn-flat z-depth-4 yellow lighten-3 left"
        onClick={toggle}
      >
        {`Toggle units to: ${units === 'standard' ? 'metric' : 'standard'}`}
      </a>
      <a
        className="waves-effect waves-light btn-flat z-depth-4 yellow lighten-3 right"
        onClick={reset}
      >
        Search Again
      </a>
    </div>
  </div>
)

export default Buttons
