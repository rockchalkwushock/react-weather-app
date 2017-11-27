import React from 'react'

import { Container } from '../commons'

const Header = () => (
  <nav>
    <Container className="nav-wrapper light-blue darken-2">
      <a href="/" className="brand-logo center" style={{ fontSize: '1.2em' }}>
        Rising Sun
      </a>
    </Container>
  </nav>
)

export default Header
