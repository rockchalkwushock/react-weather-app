import React from 'react'

import { Container } from './commons'
import logo from '../assets/icon.svg'

const Logo = () => (
  <Container className="row">
    <Container className="col s12 center-align">
      <img alt="Rising Sun Logo" className="responsive-img" src={logo} />
    </Container>
  </Container>
)

export default Logo
