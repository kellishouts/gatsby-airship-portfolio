import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import { setBgImage } from "../../utils";

export default ({ pageContext: { project } }) => {
  project.fields.map(field => {
    project[field.variable_name] = field.value
    return field
  })
  console.log(project)
  
  let slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    variableWidth: false,
    adaptiveHeight: false,
    ease: 'linear',
    prevArrow: false,
    nextArrow: false,
    speed: 900,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true
  }

  return (
    <Layout bodyClass='project'>
      {/* <SEO {...project.pageMetadata} /> */}
      {project ? <div className="container project-container">
        <div className="block project-block">
          <div className="project-title">
            <div className="project-number">{project.marker}</div>
            <h4>
              <span className="long-title">{project.title}</span>
            </h4>
          </div>
          {project.images ? <Slider className="project-slideshow slick-slideshow" {...slickSettings}>
            {project.images.map((item, i) => (
              <div key={i} className="slick-slide project-slideshow-image" style={setBgImage(item.url)}>
                <div className="slideshow-tint"></div>
                <img src={item.url} alt={item.title} />
              </div>
            ))}
          </Slider> : null}
          <div className="project-details">
            <div className="project-synopsis">
              <h4>{project.title}</h4>
              <p>{project.short_description}</p>
            </div>
            <div className="project-body" dangerouslySetInnerHTML={{ __html: project.body }}></div>
          </div>
        </div>
      </div> : null}
    </Layout>
  )
}
