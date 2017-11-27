import React from 'react'

import { Container } from './commons'

const Logo = () => (
  <Container className="row">
    <Container className="col s12 center-align">
      <img
        alt="Rising Sun Logo"
        className="responsive-img"
        src="/images/icon.svg"
      />
    </Container>
  </Container>
)

export default Logo
