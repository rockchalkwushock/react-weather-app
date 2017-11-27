import React from 'react'

import { Container } from '../commons'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => (
  <Container className="light-blue darken-3">
    <Header />
    <Container className="container main">{children}</Container>
    <Footer year={new Date().getFullYear()} />
  </Container>
)

export default Layout
