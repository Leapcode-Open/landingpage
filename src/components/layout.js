/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <main style={{ backgroundImage: `url('/home.bnad.png')`, backgroundSize:'100% auto', backgroundPosition:'50% 0', backgroundRepeat:'repeat-y' }}>{children}</main>
        <footer>
        
        </footer>
   
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
