import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <StaticImage
        src="../images/maud-logo.png"
        loading="eager"
        width={300}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Styliste région de Montréal"
      />
    </Link>
  </header>
)

export default Header
