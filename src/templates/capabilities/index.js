import React from "react"

import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import { setBgImage, setFields } from "../../utils";

export default ({ pageContext: { capabilities } }) => {
  let content = setFields(capabilities)

  return (
    <Layout bodyClass='capabilities'>
      {/* <SEO {...content.pageMetadata} /> */}
      {content ? <div>
        <div className="container feature-container">
          <div className="block feature-block">
            <h3>Our Approach</h3>
            <h1>{content.our_approach}</h1>
            <p>{content.our_approach_content}</p>
          </div>
        </div>

        <div className="container capabilities-container">
          <div className="block capabilities-block">
            <div className="capabilities-list">
              <ol className="capabilities">
                {content.capabilities.map((item, i) => (
                  <li key={i}>
                    <h4>{item.title}</h4>
                    <p>{item.caption}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="container split-container split-graphic-container">
          <div className="block split-block split-graphic-block">
            <div className="split-item split-item-left split-graphic split-graphic-left">
              <h3>Web Development</h3>
              <p>{content.web_development}</p>
              <div className="large-graphic"></div>
            </div>
            <div className="split-item split-item-right split-graphic split-graphic-right">
              <h3>Software Development</h3>
              <p>{content.software_development}</p>
              <div className="large-graphic"></div>
            </div>
          </div>
        </div>

        <div className="container technologies-container">
          <div className="block technologies-block">
            <div className="technologies-column">
              <h3>{content.technologies_header_1}</h3>
              <ul>
                {content.technologies_list_1.map((item, i) => (
                  <li key={i}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="technologies-column">
              <h3>{content.technologies_header_2}</h3>
              <ul>
                {content.technologies_list_2.map((item, i) => (
                  <li key={i}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="technologies-column">
              <h3>{content.technologies_header_3}</h3>
              <ul>
                {content.technologies_list_3.map((item, i) => (
                  <li key={i}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="technologies-column">
              <h3>{content.technologies_header_4}</h3>
              <ul>
                {content.technologies_list_4.map((item, i) => (
                  <li key={i}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="technologies-column">
              <h3>{content.technologies_header_5}</h3>
              <ul>
                {content.technologies_list_5.map((item, i) => (
                  <li key={i}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="technologies-column">
              <h3>{content.technologies_header_6}</h3>
              <ul>
                {content.technologies_list_6.map((item, i) => (
                  <li key={i}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> : null}
    </Layout>
  )
}