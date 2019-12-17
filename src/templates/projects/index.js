import React from "react"

import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import { setBgImage } from "../../utils";
import { Link } from "gatsby";

export default ({ pageContext: { projects } }) => {
  projects.map(project => {
    project.fields.map(field => project[field.variable_name] = field.value)
    return project
  })

  return (
    <Layout bodyClass='projects'>
      {/* <SEO {...content.pageMetadata} /> */}
      {projects ? <div className="container projects-container">
        <div className="block projects-block">
          <div className="projects-filters">
            <ul className="filters">
              <li className="active"><a href="/">Websites</a></li>
              <li><a href="/">eCommerce</a></li>
              <li><a href="/">Subscriptions</a></li>
              <li><a href="/">Web Apps</a></li>
              <li><a href="/">Mobile Apps</a></li>
            </ul>
          </div>
          <div className="projects-list">

            {projects.map((project, i) => (
              <div key={i} className="projects-list-item">
                <Link to={`/projects/${project.permalink}`}>
                  <div className="projects-list-item-title">
                    <div className="projects-list-item-number">{project.marker}</div>
                    <h4>
                      <span className="long-title">{project.product_title}</span>
                      <span className="short-title">{project.short_title}</span>
                    </h4>
                  </div>
                  <div className="projects-list-item-description">
                    <p className="short-description">{project.short_description}</p>
                    <p className="medium-description">{project.medium_description}</p>
                    <div className="read-more"><span>Read More</span></div>
                  </div>
                  <div className="projects-list-item-image" style={setBgImage(project.images[0].sercure_url)}>
                    <img src={project.images[0].secure_url} alt={project.images[0].title} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div> : null}
    </Layout>
  )
}