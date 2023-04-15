import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <img src="./img/maud-logo.png" width="150" alt="Styliste région de Montréal" />
    </Link>
  </header>
)

export default Header
