import React from 'react'

import './index.css'

const Footer = ({ year }) => (
  <footer className="page-footer light-blue darken-2 z-depth-4">
    <div className="footer-copyright">
      <div className="container">
        <a
          className="grey-text text-lighten-4 left"
          href="https://www.apixu.com/"
        >
          Powered by Apixu
        </a>
        <a
          className="grey-text text-lighten-4 right"
          href="https://rcws-development.com"
        >
          © {year === 2017 ? year : `2017 - ${year}`} RCWS Development
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
