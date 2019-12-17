import React from "react"

import Layout from "../../components/layout"
// import SEO from "../../components/seo"

import launchIllustrationBackground from '../../images/illustration-background.png'
import launchTimelineBoth from '../../images/timeline-centered.png'
import launchSketchesWide from '../../images/launch-sketches-wide.jpg'
import launchFlowchartGameElements from '../../images/flowchart-game-elements.png'
import launchIllustrationInitialScenario from '../../images/illustration-initial-scenario.png'
import launchIllustrationUIMockups from '../../images/illustration-ui-mockups.png'
import launchSpreadsheet from '../../images/spreadsheet-screenshot.png'
import launchPaperMockups from '../../images/paper-mockups.png'
import launchTimeline03Test from '../../images/timeline-03-test.png'
import launchPhotoGroupA1 from '../../images/photo-group-a-1.jpg'
import launchPhotoGroupA2 from '../../images/photo-group-a-2.jpg'
import launchSketchV1 from '../../images/sketch-v1-all-screens-small.png'
import launchTimeline05Test from '../../images/timeline-05-test.png'
import launchPhotoGroupB1 from '../../images/photo-group-b-1.jpg'
import launchPhotoGroupB2 from '../../images/photo-group-b-2.jpg'
import launchPhotoGroupB3 from '../../images/photo-group-b-3.jpg'
import launchSketchV2 from '../../images/sketch-v2-all-screens-small.png'
import launchIllustrationChaosVsCollaboration from '../../images/illustration-chaos-vs-collaboration.png'
import launchTimeline07Test from '../../images/timeline-07-test.png'
import launchPhotoGroupC1 from '../../images/photo-group-c-1.jpg'
import launchPhotoGroupC2 from '../../images/photo-group-c-2.jpg'
import launchTimeline10Launch from '../../images/timeline-10-launch.png'
import launchPhotoConference1 from '../../images/photo-conference-1.jpg'
import launchPhotoConference2 from '../../images/photo-conference-2.jpg'
import launchPhotoConference3 from '../../images/photo-conference-3.jpg'
import launchPhotoGameAssets from '../../images/photo-game-assets.jpg'

export default () => {

  return (
    <Layout bodyClass='bodyclass-resume'>
      <div>

        <div className="container portfolio-header-container white-container">
          <div className="block portfolio-header-block">
            <h1>Kelli Borgonia</h1>
            <p className="person-role">Product Designer</p>
            <div className="social-media-header">
              <a href="mailto:kelli.borgonia@gmail.com" className="social-media-icon email" target="_blank" ><span>kelli.borgonia@gmail.com</span></a>
              <a href="https://www.linkedin.com/in/kelli-borgonia/" className="social-media-icon linkedin" target="_blank" ><span>linkedin.com/in/kelli-borgonia</span></a>
              <a href="#" className="social-media-icon download" target="_blank" ><span>Download Resume</span></a>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container resume-container">
          <div className="block resume-block">
            <section className="resume-section">
                <div className="resume-body row align-center">
                  <div className="resume-main columns large-12">
                    <h3>Experience</h3>
                    <ul className="experience">
                      <li>
                        <h4>Owner &amp; UX/UI Designer</h4>
                        <h5>
                          <span className="highlight">Purely Functional</span><span className="comma">,</span>
                          <span className="date">2011 - Present</span>
                          <span className="pipe">|</span>
                          <span className="location">Seattle, WA</span>
                        </h5>
                        <p>Runs a three-person remote development team in building websites, web applications, and mobile apps. Designs all user flows, prototypes, and high-fidelity layouts, and translates them to fully responsive custom code and styles. Conducts business analyses in order to update existing systems to more efficient content management workflows.</p>
                        <ul className="experience-projects">
                          <li><span className="highlight">Hazel Analytics</span>, built a fully responsive marketing website with custom graphics and CSS animations for a Seattle-based SaaS company. (<a
                            href="https://hazelanalytics.com" target="_blank">https://hazelanalytics.com</a>)</li>
                          <li><span className="highlight">Native Stories</span>, designed the logo, created app prototypes, and
                            managed
                  the frontend development of a Hawaii-based storytelling app. </li>
                          <li><span className="highlight">Root + STEM</span>, designed a responsive web application and built an interactive, living data visualization of Hawaii STEM resources. (<a
                            href="https://www.rootandstem.org/map" target="_blank">https://www.rootandstem.org/map</a>)</li>
                        </ul>
                      </li>

                      <li>
                        <h4>Product Owner &amp; UX/UI Designer</h4>
                        <h5>
                          <span className="highlight">AirshipCMS</span><span className="comma">,</span>
                          <span className="date">2013 - Present</span>
                          <span className="pipe">|</span>
                          <span className="location">Seattle, WA</span>
                        </h5>
                        <p>Manages the overall product, design, and development for all features related to the AirshipCMS SaaS content management system and web deployment platform. Established a design system for the online content management portal and open source modules, designed and built the marketing website, and created and tested user flows for developer tooling, eCommerce, authentication, and content management. Currently managing relationships with 18 clients using the platform. ( <a href="https://airshipcms.io"
                          target="_blank">https://airshipcms.io</a> )</p>
                      </li>

                      <li>
                        <h4>UX/UI Designer</h4>
                        <h5>
                          <span className="highlight">Extreme Arts &amp; Sciences</span><span className="comma">,</span>
                          <span className="date">2018 - 2019</span>
                          <span className="pipe">|</span>
                          <span className="location">Seattle, WA</span>
                        </h5>
                        <p>Designed and coded fully responsive layouts for various small-scale websites to enterprise-scale web applications. </p>
                        <ul className="experience-projects">
                          <li><span className="highlight">Loyalty Program</span>, served as Product Owner for the ideation phase of a loyalty program targeted at a niche market. Pitched to the C-level team of a Credit Union.
                </li>
                          <li><span className="highlight">Credit Union Website</span>, served as an interim Account Manager for the initial six weeks of the project. Produced wireframes and built fully responsive layouts.
                </li>
                          <li><span className="highlight">Sales Playbook</span>, designed the information architecture for an enterprise company’s sales team playbook in order to propose improved UX.
                </li>
                          <li><span className="highlight">Launch</span>, designed a team-building game that is currently being used as a seminar training tool. Conducted extensive user tests and led rapid development sprints in order to ensure effective game mechanics. (<a href="https://launch-game.airshipcms.io/"
                            target="_blank">https://launch-game.airshipcms.io/</a>)</li>
                          <li><span className="highlight">Matchmaking</span>, designed a web application for conference attendees to
                            find others with similar interests and schedule one-on-one meetings. Worked closely with the backend
                  developer to ensure that designs could be built to spec within a constrained time frame.</li>
                        </ul>
                      </li>

                      <li>
                        <h4>Web Designer &amp; Guest Instructor</h4>
                        <h5>
                          <span className="highlight">DevLeague</span><span className="comma">,</span>
                          <span className="date">2013 - 2015</span>
                          <span className="pipe">|</span>
                          <span className="location">Honolulu, HI</span>
                        </h5>
                        <p>Served as a design mentor and guest instructor for DevLeague, Hawaii’s first and only full-stack programming bootcamp. Created curriculum that challenged students to use both older layout techniques and newer styling methodologies for the following topics: responsive web architecture, grid systems, and SCSS. </p>
                      </li>

                      <li>
                        <h4>UX/UI Designer</h4>
                        <h5>
                          <span className="highlight">Sudokrew Solutions</span><span className="comma">,</span>
                          <span className="date">2013 - 2014</span>
                          <span className="pipe">|</span>
                          <span className="location">Honolulu, HI</span>
                        </h5>
                        <p>Contracted as a website and web application designer for this Hawaii-based full-stack software
                development company.</p>
                        <ul className="experience-projects">
                          <li><span className="highlight">High-End Car Leasing Company</span>, created detailed user flows and interactive prototypes for the sales tool, consumer platform, and admin management interface.
                </li>
                          <li><span className="highlight">Comprendio</span>, designed a new UI for a system of dynamic infographics for a mind-mapping / education web platform.
                </li>
                        </ul>
                      </li>

                      <li>
                        <h4>Game Designer, Curriculum Developer, &amp; Instructor</h4>
                        <h5>
                          <span className="highlight">Goma Games</span><span className="comma">,</span>
                          <span className="date">2011 - 2015</span>
                          <span className="pipe">|</span>
                          <span className="location">Honolulu, HI</span>
                        </h5>
                        <p>Led a small team in creating games that teach leadership, game development, and programming skills to a K-12 audience. (<a href="https://gomagames.com">https://gomagames.com</a>)</p>
                        <ul className="experience-projects">
                          <li><span className="highlight">STEM Projects</span>, created an open-source archive of game development tutorials and resources. (<a href="https://stem.gomagames.com">https://stem.gomagames.com</a>)
                </li>
                          <li><span className="highlight">La Pietra Summer Tech Program</span>, developed the curriculum for and instructed a summer tech series in game design, illustration, and programming for four years.</li>
                          <li><span className="highlight">Global Game Jam</span>, organized the Hawaii site for the International Global Game Jam Hackathon for four consecutive years.                </li>
                        </ul>
                      </li>

                      <li>
                        <h4>Graphic Designer</h4>
                        <h5>
                          <span className="highlight">Various Clients / Companies</span><span className="comma">,</span>
                          <span className="date">2008 - 2011</span>
                          <span className="pipe">|</span>
                          <span className="location">Honolulu, HI</span>
                        </h5>
                        <p>Designed logos, created branding systems, produced packaging and print materials, illustrations, and fully-coded website layouts for various clients and agencies including HumanHand, Wall to Wall Studios, and the University of Hawaii Art Gallery.</p>
                        <ul className="experience-projects">
                          <li><span className="highlight">M.A.P. Student Planner</span>, worked with the team from Manoa Alcohol Project to utilize a $20k budget to design, print, and distribute 2,000 copies of a student planner that served as a resource for alcohol awareness.
                </li>
                          <li><span className="highlight">Writing with Thread</span>, worked with the University of Hawaii Art Gallery to design a 300+ page catalogue featuring an extensive collection of Chinese textiles. The book received a Pele Regional ADDY Award for book design in 2010.</li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="resume-skills row align-center">
                  <h3>Skills</h3>
                  <div className="resume-skills-column columns medium-6 xlarge-3">
                    <h4>Visual Design</h4>
                    <ul className="skills">
                      <li>User Interface Design</li>
                      <li>Mobile App Design</li>
                      <li>Responsive Web Design</li>
                      <li>Illustration</li>
                      <li>Character Design</li>
                      <li>Game UI Design</li>
                      <li><span className="highlight">Tools:</span> Illustrator, Sketch, InVision, Photoshop, Animate, Adobe Draw</li>
                    </ul>
                  </div>
                  <div className="resume-skills-column columns medium-6 xlarge-3">
                    <h4>User Experience</h4>
                    <ul className="skills">
                      <li>Wireframing</li>
                      <li>Paper Prototyping</li>
                      <li>Interactive Prototyping</li>
                      <li>User Flows</li>
                      <li>User Personas</li>
                      <li>Test Group Moderation</li>
                      <li>Information Architecture</li>
                      <li><span className="highlight">Tools:</span> Sketch, InVision, Currently learning Zeplin & Principle.</li>
                    </ul>
                  </div>
                  <div className="resume-skills-column columns medium-6 xlarge-3">
                    <h4>Interaction / Development</h4>
                    <ul className="skills">
                      <li>HTML5</li>
                      <li>SCSS/CSS</li>
                      <li>CSS Animation</li>
                      <li>CSS Frameworks
              (Foundation, Bootstrap, Bulma, Semantic UI, etc)</li>
                      <li>Handlebars</li>
                      <li>Basic Gulp/Node Workflows</li>
                      <li><span className="highlight">Tools:</span> Github, VS Code, iTerm, Chrome, Codepen.io</li>
                    </ul>
                  </div>
                  <div className="resume-skills-column columns medium-6 xlarge-3">
                    <h4>Product &amp; Project Management</h4>
                    <ul className="skills">
                      <li>Strategic Planning</li>
                      <li>Feature Roadmapping</li>
                      <li>Client Management</li>
                      <li>User Acceptance Testing</li>
                      <li>Kanban, Agile Workflows</li>
                      <li>Issue Creation &mp; Tracking</li>
                      <li>Technical Writing</li>
                      <li><span className="highlight">Tools:</span> Github Projects, Basecamp, Jira, Asana, Trello</li>
                    </ul>
                  </div>
                </div>
                <div className="resume-other row">
                <h3 className="show-for-medium">Awards &amp; Education</h3>
                <div className="resume-other-column columns medium-6">
                    <h3>Awards</h3>
                    <ul className="awards">
                      <li>
                        <h4>Best Overall</h4>
                        <h5>
                          <span className="highlight">VoterTab</span><span className="comma">,</span> 
                          <span className="event">Civic Hackathon</span><span className="comma">,</span>
                          <span className="date">2019</span>
                        </h5>
                      </li>
                      <li>
                        <h4>Best Overall</h4>
                        <h5>
                          <span className="highlight">SafeWord</span><span className="comma">,</span> 
                          <span className="event">Civic Hackathon</span><span className="comma">,</span> 
                          <span className="date">2017</span>
                        </h5>
                      </li>
                      <li>
                        <h4>Popularity Prize</h4>
                        <h5>
                          <span className="highlight">Unicorns vs. Dragons</span><span className="comma">,</span> 
                          <span className="event">Node Knockout</span><span className="comma">,</span> 
                          <span className="date">2016</span>
                        </h5>
                      </li>
                      <li>
                        <h4>Best Overall</h4>
                        <h5>
                          <span className="highlight">MicroManager</span><span className="comma">,</span> 
                          <span className="event">AT&amp;T Hackathon</span><span className="comma">,</span> 
                          <span className="date">2016</span>
                        </h5>
                      </li>
                      <li>
                        <h4>Pele Regional ADDY Award for Book Design</h4>
                        <h5>
                          <span className="highlight publication">Writing with Thread</span><span className="comma">,</span> 
                          <span className="event">Pele Awards</span><span className="comma">,</span> 
                          <span className="date">2010</span>
                        </h5>
                      </li>
                    </ul>
                  </div>
                  <div className="resume-other-column columns medium-6">
                    <h3>Education</h3>
                    <ul className="education">
                      <li>
                        <h4>University of Hawaii</h4>
                        <h5>
                          <span className="highlight">BFA Graphic Design</span><span className="comma">,</span>
                          <span className="date">2009</span>
                        </h5>
                        <h5>
                          <span className="highlight">BBA Marketing</span><span className="comma">,</span>
                          <span className="date">2009</span>
                        </h5>
                        <ul className="education-details">
                          <li>Suma cum laude</li>
                          <li>Full-tuition scholarship</li>
                          <li>Honored as top Graphic Design student</li>
                        </ul>
                      </li>
                      <li>
                        <h4>Mililani High School</h4>
                        <h5>
                          <span className="date">2004</span>
                        </h5>
                        <ul className="education-details">
                          <li>Valedictorian</li>
                          <li>Editor-in-Chief of <span className="publication">Trojan Times</span></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row social-media-row">
                  <div className="small-12 columns">
                    <h3>Links</h3>
                    <div className="social-media">
                      <a href="https://www.instagram.com/kellishouts/" className="social-media-icon instagram" target="_blank"><span>instagram.com/kellishouts</span></a>
                      <a href="https://github.com/kellishouts" className="social-media-icon github" target="_blank" ><span>github.com/kellishouts</span></a>
                      <a href="https://codepen.io/kellishouts" className="social-media-icon codepen" target="_blank" ><span>codepen.io/kellishouts</span></a>
                      <a href="https://airshipcms.io" className="social-media-icon airship" target="_blank" ><span>airshipcms.io</span></a>
                      <a href="https://github.com/airshipcms" className="social-media-icon github" target="_blank" ><span>github.com/gomagames</span></a>
                      <a href="https://www.instagram.com/airshipcms/" className="social-media-icon instagram" target="_blank"><span>instagram.com/airshipcms</span></a>
                      <a href="https://www.gomagames.com" className="social-media-icon github" target="_blank" ><span>gomagames.com</span></a>
                    </div>
                  </div>
                </div>
            </section>
          </div>
        </div>

      </div>
    </Layout >
  )
}