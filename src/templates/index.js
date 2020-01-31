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
            I am an extremely <b>pragmatic designer</b> who is passionate about creating things that are both <b>functional and delightful</b>. I love <b>collaborating with engineers</b> to <b>architect systems</b> that transform ideas into inventive solutions and products.
            </p>
          </div>
        </div>

        <div className="container very-light-grey-container case-studies-container personal-case-studies-container">
          <div className="block case-studies-block personal-case-studies-block">
            <h3>Recent Work</h3>
            <div className="case-studies">

              <div className="case-study case-study-grey">
                <div className="case-study-text">
                  <h3>Product Design</h3>
                  <h2>The Launch</h2>
                  <p>Designed a team-building and communication game that utilizes both physical components and a digital UI. Case study follows a user-centered design process spanning a 6-week ultra-rapid development cycle from conception to delivery.</p>
                  <a className="button button-solid case-study-button" href="/the-launch">
                    Case Study <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/the-launch" style={setBgImage('https://kelli.airshipcms.io/assets/images/photo-game-assets.jpg')}>
                  <img src="https://kelli.airshipcms.io/assets/images/photo-game-assets.jpg" alt="Game cards and mobile interface for The Launch." />
                </a>
              </div>

              {/* <div className="case-study case-study-teal">
                <div className="case-study-text">
                  <h3>Product / System Design</h3>
                  <h2>Airship CMS</h2>
                  <p>Managed the engineering team responsible for building this web development platform and content management toolkit. Case study is an under-the-hood look at extremely technical product design and the pragmatic approach I take when working with and designing for software engineers.</p>
                  <a className="button button-solid case-study-button" href="#">
                    To Do <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="#" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-airshipcms3.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-airshipcms3.png" alt="TO DO: DESCRIPTION" />
                </a>
              </div> */}

              <div className="case-study case-study-teal">
                <div className="case-study-text">
                  <h3>UX / UI</h3>
                  <h2>Airship CMS</h2>
                  <p>Partnered with a UX Designer to improve the on-boarding flow for the developer interface of Airship CMS, our self-built PaaS. Conducted user interviews, [something], and [something]. Redesigned and implemented the UI before the product's official release.</p>
                  <a className="button button-solid case-study-button" href="/airshipcms">
                    To Do <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/airshipcms" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-airshipcms3.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-airshipcms3.png" alt="Redesigned UI for Airship CMS" />
                </a>
              </div>

              <div className="case-study case-study-orange">
                <div className="case-study-text">
                  <h3>UX</h3>
                  <h2>National Domestic Workers Alliance</h2>
                  <p>Simplified and the member sign up flow and increased the website's accessibility by designing a user flow that utilizes SMS authentication in order to target an audience that primarily only has access to mobile phone browsers and text messaging.</p>
                  <a className="button button-solid case-study-button" href="/ndwa">
                    Clean up Images <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/ndwa" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-ndwa.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/ndwa.png" alt="New membership onboarding flow for the National Domestic Workers Alliance." />
                </a>
              </div>

              <div className="case-study case-study-grey">
                <div className="case-study-text">
                  <h3>Info Architecture / Data Viz</h3>
                  <h2>Root + STEM</h2>
                  <p>Designed a community resource platform that generates an interactive, dynamic map of collected data. Worked closely with both the developer and the research team to ensure that information was standardized and could be visualized in a meaningful and engaging way.</p>
                  <a className="button button-solid case-study-button" href="/root-and-stem-part-1">
                    Working <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/root-and-stem-part-1" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-root-and-stem3.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-root-and-stem3.png" alt="Interactive data visualization of Hawai'i STEM resources." />
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
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-unicorny-gmail.png" alt="A Chrome Extension with custom CSS overrides for Gmail." />
                </a>
              </div>

              <div className="case-study case-study-teal">
                <div className="case-study-text">
                  <h3>UX / UI</h3>
                  <h2>Flight Plan</h2>
                  <p>Designed, illustrated, and fully coded a mobile-responsive UI for an experimental user flow that prioritizes leisure and piece-of-mind over price-sensitivity during online airline booking. Case study highlights my process in taking an experimental product from ideation to execution during a 24-hour sprint.</p>
                  <a className="button button-solid case-study-button" href="/flight-plan">
                    To Do <span className="inline-arrow"></span>
                  </a>
                </div>
                <a className="case-study-graphic" href="/flight-plan" style={setBgImage('https://kelli.airshipcms.io/assets/images/portfolio-flight-plan.png')}>
                  <img src="https://kelli.airshipcms.io/assets/images/portfolio-flight-plan.png" alt="A re-imagined theoretical user experience for online airline booking." />
                </a>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}