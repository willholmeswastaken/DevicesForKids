/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

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
    <div className="h-screen pb-14 bg-right bg-cover" style={{ backgroundImage: "url('bg.svg')" }}>
      <div>
        <div className="text-center flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-12 bg-indigo-100 rounded-md">
          <div className="text-2xl font-semibold">
            <div className="text-gray-900">Luke is on BBC Radio Leicester at 10:30am 11/01/2021</div>
            <div className="text-purple-500">Tune in to hear what the latest is!</div>
          </div>
        </div>
      </div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
      <Footer />
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
