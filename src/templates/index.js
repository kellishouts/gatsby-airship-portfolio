import React from "react"

import Layout from "../components/layout"

import { setBgImage } from '../utils'
// import SEO from "../components/seo"

export default () => {
  return (
    <Layout bodyClass='bodyclass-home'>
      <div>
        {/* <SEO {...content.pageMetadata} /> */}
        <div className="container portfolio-header-container white-container">
          <div className="block portfolio-header-block">
            <h1>Kelli Borgonia</h1>
            <p className="person-role">Product Designer</p>
            <p className="person-description">
            I am an extremely <b>pragmatic designer</b> who is passionate about creating things that are both <b>functional and delightful</b>. I love <b>collaborating with engineers</b> to <b>architect systems</b> that transform ideas into inventive products.
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
                  <p>Designed a team-building and communication game that utilizes both physical components and a digital UI. Case study follows a user-centered design process spanning a 6-week ultra-rapid development cycle from conception to delivery.</p>
                  <a className="button button-solid case-study-button" href="/the-launch">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/the-launch" style={setBgImage('https://kelli.airshipcms.io/assets/images/photo-game-assets.jpg')}>
                  <img src="https://kelli.airshipcms.io/assets/images/photo-game-assets.jpg" alt="TO DO: DESCRIPTION" />
                </a>
              </div>

              <div className="case-study case-study-teal">
                <div className="case-study-text">
                  <h3>Product Owner</h3>
                  <h2>Airship CMS</h2>
                  <p>Designed the UX/UI for all consumer-facing interfaces and managed the engineering team responsible for building this web development platform targeted at frontend web developers. Case study highlights my interests in the technical aspects of UX/UI design and my pragmatic approach to design as it relates to software engineering.</p>
                  <a className="button button-solid case-study-button" href="#">
                    To Do <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="#" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-airshipcms3.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-airshipcms3.png" alt="TO DO: DESCRIPTION" />
                </a>
              </div>

              <div className="case-study case-study-grey">
                <div className="case-study-text">
                  <h3>Data Visualization</h3>
                  <h2>Root + STEM</h2>
                  <p>Designed a community resource platform that generates an interactive, dynamic map of collected data. Worked closely with both the developer and the research team on information architecture to ensure that data was standardized and could be visualized in a meaningful and engaging way.</p>
                  <a className="button button-solid case-study-button" href="#">
                    To Do <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/root-and-stem" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-root-and-stem3.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-root-and-stem3.png" alt="TO DO: DESCRIPTION" />
                </a>
              </div>

              <div className="case-study case-study-grey">
                <div className="case-study-text">
                  <h3>UX</h3>
                  <h2>NDWA Membership Signup Flow</h2>
                  <p>Simplified the member sign up flow from X down to X steps. Increased the website's accessibility by designing a user flow that utilizes test-message authentication in order to target an audience that primarily only has access to mobile phone browsers and text messaging.</p>
                  <a className="button button-solid case-study-button" href="/ndwa">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/ndwa" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-ndwa.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/ndwa.png" alt="TO DO: DESCRIPTION" />
                </a>
              </div>

              <div className="case-study case-study-orange">
                <div className="case-study-text">
                  <h3>UX / UI</h3>
                  <h2>Unicorny Gmail</h2>
                  <p>Identified the UX and UI pain points in Gmail’s user interface, hacked Google Chrome with CSS overrides to fix the problems, published my own Chrome Extension, and documented the process. This blog post was featured on Modus, Medium.com's UX/UI Design blog, and has received over 80k total views.</p>
                  <a className="button button-solid case-study-button" href="/unicorny-gmail">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/unicorny-gmail" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-unicorny-gmail.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-unicorny-gmail.png" alt="A Chrome Extension with custom CSS overrides for Gmail" />
                </a>
              </div>

              <div className="case-study case-study-teal">
                <div className="case-study-text">
                  <h3>UX / UI</h3>
                  <h2>Flight Plan</h2>
                  <p>Designed, illustrated, and fully coded a mobile-responsive UI for an experimental user flow that prioritizes leisure and piece-of-mind over price-sensitivity during online airline booking. Case study highlights my process in taking an experimental product from ideation to execution during a 24-hour sprint.</p>
                  <a className="button button-solid case-study-button" href="/flight-plan">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/flight-plan" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-flight-plan.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-flight-plan.png" alt="Flight Plan: The re-imagined theoretical user experience for an online airline ticketing platform." />
                </a>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}