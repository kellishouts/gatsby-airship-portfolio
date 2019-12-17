import React from "react"

import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import { setBgImage, setFields } from "../../utils";

export default ({ pageContext: { agency } }) => {
  let content = setFields(agency)

  return (
    <Layout bodyClass='agency'>
      {/* <SEO {...content.pageMetadata} /> */}
      {content ? <div>
        <div className="container split-container">
          <div className="block split-block">
            <div className="split-item split-item-left">
              <div className="small-feature-image">
                <img src="https://placehold.it/40x40/" alt="Good Design" />
              </div>
              <h2>{content.good_design[0].title}</h2>
              <p>{content.good_design[0].caption}</p>
            </div>
            {content.good_design.map((item, i) => (
              <div className="split-item split-item-right">
                <div className="small-feature-image">
                  <img src="https://placehold.it/40x40/" alt="Good Design" />
                </div>
                <h2>{content.good_code[0].title}</h2>
                <p>{content.good_code[0].caption}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container team-container">
          <div className="block team-block">
            <h3>Team</h3>
            <div className="team-list">
              {content.team.map((item, i) => (
                <div key={i} className="team-item">
                  <div className="team-image" style={setBgImage(item.url)}>
                    <img src={item.url} alt={item.title} />
                  </div>
                  <h5>{item.title}</h5>
                  <p dangerouslySetInnerHTML={{ __html: item.caption }}></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> : null}
    </Layout>
  )
}