import React from "react"

import Layout from "../../components/layout"
// import SEO from "../../components/seo"

export default () => {

  return (
    <Layout bodyClass='bodyclass-case-study'>
      <div>
        <div className="container teal-container product-header-container">
          <div className="block product-header-block">
            <h3>Information Architecture</h3>
            <h1 className="white-text h1-product">Root + STEM</h1>
          </div>
        </div>
        <div id="part1" className="case-study-divider-marker"></div>
        {/* <div className="container case-study-divider-container">
          <div className="block case-study-divider-block">
            <h3>Part 1: Information Architecture</h3>
          </div>
        </div> */}
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Background</h3>
              <p>Prior to developing Root + STEM, only a PDF documented the STEM programs that were available in the state of Hawai’i. Our task was to turn the static resource into a living web app that had the potential to expand through community contributions.</p>
              <p>We had two goals:</p>
              <ol>
                <li><b>Build an online portal</b> where community members can submit STEM resources.</li>
                <li><b>Display the data as a searchable archive</b> so that students, teachers, and working professionals can easily navigate those resources.</li>
              </ol>
              <p><b>Part 1</b> of the case study focuses on information architecture, data design, and infrastructure.</p>
              <p><b>Part 2</b> focuses on data visualization and the translation of information into visual design to make it accessible to a wider audience and merge it with culture, history, and a story.</p>
              <div className="project-section-split">
                <div className="project-section-left">
                  <h4>Our Team</h4>
                  <p>
                    <b>Kelli Borgonia</b>, Project Lead, UI Designer<br></br>
                    <b>Jon Borgonia</b>, Senior Software Architect<br></br>
                    <b>Te Vallee</b>, Full-Stack Developer
                  </p>
                </div>
                <div className="project-section-right">
                  <h4>My Role</h4>
                  <p>I designed the data infrastructure and worked with the developer to ensure that it was implemented to spec. I designed all layouts and hand-coded all CSS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Data &amp; Infrastructure</h3>

              <p>After examining the team’s original database and reading the initial PDF report on STEM programs, I worked with the research team to define the properties that we would want to start collecting once users had the ability to contribute STEM programs to the web app.</p>
              
              <p>PIC - LIST OF PROPERTIES</p>

              <p>Since the web application would house a combination of informational and community-contributed content, I planned to separate all editable content from the web app infrastructure.</p>
                
              <p>Whenever possible, I design infrastructures to be sustainable. I have witnessed so many projects where content change requests end up wasting 80% of a developer's time. To mitigate this inefficieny, I always work with a CMS to ensure that content can be updated independently by content creators and managers, so that developer resources can be reserved for functional code changes.</p>

              <p>PIC - ROUGH OUTLINE OF INFRASTRUCTURE</p>

              <p>I discussed my plan with Jon Borgonia and he expanded it to an actual infrastructure that utilized a variety of web technologies:</p>
              <ol>
                <li><b>Airship CMS</b> for webpage hosting and conent management</li>
                <li><b>Firebase</b> for STEM Programs, contributor data, and users</li>
                <li><b>AWS</b> for hosting the STEM web apps and user-submitted images</li>
              </ol>
              {/* <p>PIC - JON'S INFRASTRUCTURE DIAGRAM</p>
              <p>See <a href="#">Jon Borgonia’s Case Study</a> that outlines our experiment using serverless for this project, as well as our encounter with Firebase API rate-limiting and our solution to efficiently work with Firebase’s something cap.</p> */}
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>User Flows</h3>
              <p>After the web infrastructure was planned, I mapped out the key user flows for website visitors.</p>
              <p>PIC - SIMPLE FLOWCHART ALL USERS</p>
              <ol>
                <li><b>Community contributors</b> submit STEM programs to the database.</li>
                <li><b>Website admins</b> review and approve contributor submissions.</li>
                <li><b>Students and teachers</b> search for STEM programs.</li>
                <li><b>All others</b> end up at the website leisurely to browse content.</li>
              </ol>
              <p>From a development standpoint, the web app was extremely simple and functional. However, coming from a visual design and product background, I am always thinking about how we can better engage our audience. I pitched the idea of <b>utilizing strong infographics</b> as a focal point to attract visitors and gain more traction through the rest of the web application. This would also give those browsing for leisure a stronger reason to engage with content.</p>

              <p>PIC - FLOWCHART OF USER DRIVEN BY INFOGRAPHICS FOCAL POINT</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Programs</h3>
              {/* <p>The user flows mapped to the following web components:</p> */}

              {/* <h4>Programs</h4> */}
              <p>The Programs section pulled all STEM Programs data from Firebase and rendered it as a searchable, filterable list. I studied several similar websites and noticed that they all had overly complex filtering and search capabilities. Since this was the site’s first iteration and there were less than 200 initial programs, I limited the filters to properties that would return the most general results: Program Type, Age Group, Industry, and Region.</p>

              <p>PIC - PROGRAMS</p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">

              <h3>Contributors</h3>
              <p>I structured the Contributors interface to be simple and straightforward. Users could sign up, set up an organization, then fill out a 3-step form to submit a STEM Program. Once submitted, the program was set to a “Pending” status to be reviewed by a site administrator.</p>

              <p>PIC - COMPLEX FLOWCHART CONTRIBUTORS</p>

              <p>PIC - SUBMIT A PROGRAM</p>

              <p>Despite its simple appearance, the Contributors UI was robust under the hood. All form questions in the program submission flow mapped to data fields in Airship CMS. This setup gave me the ability to update the text for fields and options while the developer continued to work on critical web application infrastructure.</p>

              <p>PIC - DIAGRAM OF AIRSHIP TO WEB APP FORM FIELDS</p>
              
              <p>This also reduced the project timeline and allowed us to concurrently complete tasks that would normally need to occur in sequence.</p>

              <p>PIC - GANTT CHART COMPARISON</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">

              <h3>Programs Admin</h3>

              <p>The Programs Admin interface allowed admins to log in and review pending STEM programs. After review, admins could then approve and publish, or reject a program with notes for revision.</p>

              <p>PIC - COMPLEX FLOWCHART ADMINS</p>

              <p>PIC - ADMIN REVIEW SCREENS</p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Map</h3>

              <p>The Map was a representation of all Hawai’i STEM Programs plotted on a roadmap that extended from Pre-K to adulthood. Building it was a collaborative effort between Te Vallee and I. When building it, Te translated my very detailed notes on data structure to logic for filters, dynamic captions, and sequentially loaded data. </p>
                
              <p>PIC - DETAILED SPEC</p>
                
              <p>Each STEM Program was visualized on the map with a shape and color that correlated to a value representing the STEM Program's Depth or Breath of content, Learner or Diversity Focus, or Geographic location.</p>

              <p>PIC - MAP</p>

              <p>View the live map <a href="https://www.rootandstem.org/map" target="_blank">here</a>.</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Dynamic Options</h3>

              <p>I spent a lot of time planning how to display and mange categorical information that contained dynamic options. For example, industry categories are broken down into categories and sub-categories:</p>

              <ul className="categories">
                <li>Life Sciences
                  <ul className="subcategories">
                    <li>Agriculture</li>
                    <li>Biology</li>
                    <li>Medicine</li>
                    <li>Zoology</li>
                  </ul>
                </li>
                <li>Physical Sciences
                  <ul className="subcategories">
                    <li>Astronomy</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                  </ul>
                </li>
              </ul>

              <p>I set up categories and sub-categories in AirshipCMS so they could be managed and edited as needed. Jon suggested using a "/" notation to indicate drill-down subcategories.</p>

              <p>PIC-AIRSHIPCMS CATEGORIES</p>

              <p>In the Contributors form, categories were built as a multiselect field. When a "top level" category was selected by a contributor, all sub-categories were also selected.</p>

              <p>PIC-GIF-SELECT-CATS</p>

              <p>For better usability when users searched for programs in the Programs list, we filtered out any categories and subcategories that would return 0 results.</p>

              <p>PIC-GIF-SELECT-CATS-MAP-OR-PROGRAMS</p>

              <p>The system was also designed to be extendible, so any type of categorical data could be easily organized. The same system was implemented for "Age" and "Region."</p>
            </div>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Why does this matter?</h3>

              <p>Why is this significant? It may all be behind the scenes, though <b>I enjoy designing systems that are maintainable for both managers and developers</b>. As a product owner myself, I wouldn't want to spend resources to pay for text updates that could only be implemented by developers due to technical constraints. Similarly, developers don't want to be doing the equivalent of data entry.  I believe that any infrastructure that allows content to be decoupled from code streamlines processes, keeps things sustainable, and most importantly, ensures that everyone on a project team is utilized in the areas of their expertise.</p>

              <h4>A Typical Project Plan</h4>
              <p>Visualized in a chart, a "typical" project probably looks like this:</p>

              <p>PIC - TIMELINE FOR REGULAR DEV</p>

              <p>The result is lower-cost initial development with a long cycle of content revisions prior to launch and somewhat costly incremental revisions post-launch. This plan is perfectly fine, and possibly preferable, for a product that is likely to undergo systemic changes post-launch. It wouldn't make sense to invest resources in robust management infrastructure.</p>

              <h4>This Project Plan</h4>
              <p>I enjoy designing an infrastructure that is robust and allows for product owners and content creators to maintain their product for a longer period following initial development:</p>

              <p>PIC - TIMELINE FOR AIRSHIP DEV</p>

              <p>The result is more costly initial development, an efficient content update cycle decoupled from code, and a reduction of maintenance costs post-launch. This structure makes sense for a product that doesn't have plans to undergo systemic changes in the short to medium term (1 - 2 years), yet needs the flexibility to be extend and configure data within the constraints of the system architecture.</p>

              <p className="centered">* * *</p>
              <p><b>Part 2</b> (coming soon) explains how I add a thematic layer to the project and integrate that theme into a dynamic data visualization.</p>
            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}