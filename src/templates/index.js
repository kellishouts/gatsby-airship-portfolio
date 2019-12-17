import React, { useEffect, useState } from "react"

import Layout from "../components/layout"

import caseStudyAdminImage from '../images/case-study-admin.png'
import caseStudyDesignImage from '../images/article-iata3.png'


import caseStudyFlightPlan from '../images/portfolio-flight-plan.png'
import caseStudyUnicornyGmail from '../images/portfolio-unicorny-gmail4.png'

import HeaderBg from '../svgs/header-background.svg'
import { setBgImage } from '../utils'
// import SEO from "../components/seo"

export default ({ pageContext: { root, threePartBlock, projects } }) => {
  let [content, setContent] = useState(null)
  let [projectType, setProjectType] = useState('application')
  let [
    graphicClass,
    setGraphicClass
  ] = useState('graphic graphic-plain graphic-plain-ux')

  useEffect(() => {
    startAnimationInterval()
    threePartBlock = formatCollection(threePartBlock)
    let featuredProjects = formatCollection(projects)
    root.fields.map(field => {
      if (field.variable_name === 'three_part_block') {
        field.related_collection = threePartBlock
      }
      if (field.variable_name === 'featured_projects') {
        field.related_collection = featuredProjects
      }
      root[field.variable_name] = field.type === 'related aerostats' ? field : field.value
      return field
    })
    setContent(root)
  }, [])

  const formatCollection = (collection) => {
    return collection.map(item => {
      item.fields.map(field => {
        item[field.variable_name] = field.value
        return item
      })
      return item
    })
  }

  const startAnimationInterval = () => {
    animate()
    setInterval(() => {
      animate()
    }, 22000)
  }

  const animate = () => {
    setTimeout(() => {
      setGraphicClass(`graphic graphic-plain graphic-plain-ux`)
    }, 1500)

    // duration of the above is 1500

    setTimeout(() => {
      setGraphicClass(`graphic graphic-ux`)
    }, 3000)

    // duration of the above is 4000

    setTimeout(() => {
      setGraphicClass(`graphic graphic-plain graphic-ux-plain`)
    }, 7000)

    // duration of the above is 1500

    setTimeout(() => {
      setGraphicClass(`graphic graphic-plain graphic-plain-devex`)
    }, 8500)

    // duration of the above is 1500

    setTimeout(() => {
      setGraphicClass(`graphic graphic-devex`)
    }, 10000)

    // duration of the above is 5000

    setTimeout(() => {
      setGraphicClass(`graphic graphic-plain graphic-devex-plain`)
    }, 15000)

    // duration of the above is 1500

    setTimeout(() => {
      setGraphicClass(`graphic graphic-plain graphic-plain-dev2`)
    }, 16500)

    // duration of the above is 1500

    setTimeout(() => {
      setGraphicClass(`graphic graphic-dev2`)
    }, 18000)

    // duration of the above is 4000

    setTimeout(() => {
      setGraphicClass(`graphic graphic-plain graphic-dev2-plain`)
    }, 22000)
  }

  const getRelatedItem = (item, collection) => collection.find(realtedItem => realtedItem.id === item.id)

  return (
    <Layout bodyClass='bodyclass-home'>
      {content ? <div>
        {/* <SEO {...content.pageMetadata} /> */}
        <div className="container portfolio-header-container white-container">
          <div className="block portfolio-header-block">
            <h1>Kelli Borgonia</h1>
            <p class="person-role">Product Designer</p>
            <p className="person-description">
              <span>Pragmatic Designer + </span> 
              <span>Inventive Problem-Solver</span>
              </p>
          </div>
        </div>

        <div className="container very-light-grey-container case-studies-container personal-case-studies-container">
          <div className="block case-studies-block personal-case-studies-block">
            <h3>Recent Work</h3>
            <div className="case-studies">

              <div className="case-study case-study-orange">
                <div className="case-study-text">
                  <h3>Product Design</h3>
                  <h2>The Launch</h2>
                  <p>Designed a team-building and communication game that utilizes both physical components and a digital UI. Case study features user-centered design process spanning a 6-week rapid development sprint.</p>
                  <a className="button button-solid case-study-button" href="/the-launch">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/the-launch" style={setBgImage(caseStudyDesignImage)}>
                  <img src={caseStudyDesignImage} alt="TO DO: DESCRIPTION" />
                </a>
              </div>

              <div className="case-study case-study-teal">
                <div className="case-study-text">
                  <h3>Product Owner</h3>
                  <h2>Airship CMS</h2>
                  <p>Product Owner and UX/UI Designer for the content management and web development platform currently in the beta release stage. Worked closely with software engineers to design the information architecture of the API as well as the user experience of the platform's developer tooling and workflow.</p>
                  <a className="button button-solid case-study-button" href="#">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="#" style={setBgImage(caseStudyDesignImage)}>
                  <img src={caseStudyDesignImage} alt="TO DO: DESCRIPTION" />
                </a>
              </div>

              <div className="case-study case-study-grey">
                <div className="case-study-text">
                  <h3>Data Visualization</h3>
                  <h2>Root + STEM</h2>
                  <p>Designed a contribution platform in conjunction with an interactive, dynamically generated map of collected data. Worked closely with the team to identify datapoints that could be creatively visualized accross STEM disciplines.</p>
                  <a className="button button-solid case-study-button" href="#">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="#" style={setBgImage(caseStudyDesignImage)}>
                  <img src={caseStudyDesignImage} alt="TO DO: DESCRIPTION" />
                </a>
              </div>
              
              <div className="case-study case-study-orange">
                <div className="case-study-text">
                  <h3>UX / UI</h3>
                  <h2>Unicorny Gmail</h2>
                  <p>A Chrome Extension with custom CSS overrides for Gmail, built to preserve the minimalist appearance of Google's former product "Inbox" and strip out all non-essential elements from Gmail's current UI.</p>
                  <a className="button button-solid case-study-button" href="#">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="#" style={setBgImage(caseStudyUnicornyGmail)}>
                  <img src={caseStudyUnicornyGmail} alt="A Chrome Extension with custom CSS overrides for Gmail" />
                </a>
              </div>

              <div className="case-study case-study-teal">
                <div className="case-study-text">
                  <h3>UX / UI</h3>
                  <h2>Flight Plan</h2>
                  <p>During a 24-hour hackathon, re-imagined and built a theoretical user experience for an online airline ticketing platform. Unlike most contemporary platforms for price-conscious flyers, this project targets users that value peace-of-mind and simplicity over cost.</p>
                  <a className="button button-solid case-study-button" href="#">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="#" style={setBgImage(caseStudyFlightPlan)}>
                  <img src={caseStudyFlightPlan} alt="Flight Plan: The re-imagined theoretical user experience for an online airline ticketing platform." />
                </a>
              </div>

              <div className="social-media">
                <a href="https://www.linkedin.com/in/kelli-borgonia/" className="social-media-icon linkedin" target="_blank" ><span>LinkedIn</span></a>
                <a href="https://github.com/kellishouts" className="social-media-icon github" target="_blank" ><span>GitHub</span></a>
                <a href="https://codepen.io/kellishouts" className="social-media-icon codepen" target="_blank" ><span>Codepen.io</span></a>
                <a href="https://www.instagram.com/kellishouts/" className="social-media-icon instagram" target="_blank"><span>Instagram</span></a>
                <a href="https://airshipcms.io" className="social-media-icon airship" target="_blank" ><span>AirshipCMS.io</span></a>
              </div>
              
            </div>
          </div>
        </div>

      </div> : <div></div>
}
    </Layout >
  )
}