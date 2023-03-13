import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="relative">
      <div className="container hero">
        <StaticImage
          className="bg-img"
          src="../images/single-portfolio-bg-04.jpg"
          loading="eager"
          width={1440}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Styliste région de Montréal"
        />
        <h1>
          La mode une passion
        </h1>
      </div>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
