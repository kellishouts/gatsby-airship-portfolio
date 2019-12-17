/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import TopBar from './top-bar'
import BodyClassName from 'react-body-classname';
import Helmet from "react-helmet"

const Layout = ({ children, bodyClass }) => {
  let [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleSroll, true)
  }, [])

  const handleSroll = e => {
    if (window.scrollY > 0) {
      setScroll(true)
    }
    if (window.scrollY === 0) {
      setScroll(false)
    }
  }

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/fnq2fjf.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <TopBar />
      <BodyClassName className={scroll ? `${bodyClass} scroll` : bodyClass} />

      <main>{children}</main>
      <div className="container footer-links-container">
        <div className="block footer-links-block">
          <p>Built by Kelli Borgonia <span className="vr">|</span> <a href="https://airshipcms.io">Deployed with AirshipCMS.io</a></p>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
