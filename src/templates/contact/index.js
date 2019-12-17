import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default () => {

  return (
    <Layout bodyClass='contact'>
      {/* <SEO {...content.pageMetadata} /> */}
      <div className="container contact-container">
        <div className="block two-column-block contact-block">
          <h3>Contact</h3>
          <div className="two-column-left">
            <p>Fill out the form below. Fill out the form below.</p>
            <form action="">form</form>
          </div>
          <div className="two-column-right">
            <h4>Support</h4>
            <p>We take support seriously. Working with us means that communication occurs in &lt; 2 hour cycles during business hours, and &lt; 12 hour cycles on off hours.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}