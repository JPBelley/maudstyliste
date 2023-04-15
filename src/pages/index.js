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
    <section className="columns relative py-40">
      <div className="column">
        <h2 className="text-center md:text-left">À PROPOS</h2>
        <p>Mon intérêt pour tout ce qui touche à la mode, à l’esthétisme, aux vêtements et à l’art de magasiner n’est plus un secret pour personne!  C’est d’ailleurs en tant que styliste de mode personnelle que j’ai choisi de vivre ma passion pour ce domaine.</p>
        <p>J’aime travailler à créer des looks uniques, à partager mes trucs et astuces mode, et ce, en respect de la personnalité de chaque personne, de sa morphologie ainsi que de sa beauté naturelle!  Chaque tenue personnalisée est choisie avec le souci du détail, en respect des besoins et des désirs de mes clients.  Selon moi, le style de chaque personne fait partie de ce qui lui procure son unicité et son authenticité!</p>
        <p className="signature text-center md:text-left">Maud Berthelot</p>
        <p className="text-center md:text-left">styliste personelle</p>
      </div>
      <div className="column">
        <StaticImage
          src="../images/mberthelot.jpeg"
          loading="eager"
          width={540}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Maud Berthelot"
        />
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
