import React from 'react'
import PropTypes from 'prop-types'

import { Container, Link } from '../commons'

const Footer = ({ year }) => (
  <footer
    className="page-footer light-blue darken-2 z-depth-4"
    style={{ paddingTop: 0 }}
  >
    <div className="footer-copyright">
      <Container className="container">
        <Link
          direction="left"
          text="Powered by Apixu"
          url="https://www.apixu.com/"
        />
        <Link
          direction="right"
          text={`© ${year === 2017 ? year : `2017 - ${year}`} RCWS Development`}
          url="https://rcws-development.com"
        />
      </Container>
    </div>
  </footer>
)

Footer.propTypes = {
  year: PropTypes.number.isRequired
}

export default Footer
