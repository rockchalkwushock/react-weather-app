import React from 'react'

import { Container } from './commons'

const Landing = () => (
  <Container className="row">
    <Container className="col s12">
      <Container className="card light-blue darken-2">
        <Container className="card-content">
          <p className="center-align white-text">
            Welcome to The Rising Sun! Your source for up-to-date weather data
            from all over the world. Simply search by city name, zip code, or
            airport code and you will know what it is doing outside.
          </p>
        </Container>
      </Container>
    </Container>
  </Container>
)

export default Landing
