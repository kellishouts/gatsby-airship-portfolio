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
            <h1 className="white-text h1-product">Root + STEM <br></br>Information Architecture</h1>
          </div>
        </div>

        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Background</h3>
              <p>Prior to developing Root + STEM, only a PDF report existed to document STEM programs available in the state of Hawai’i. Our task was to turn the static resource into a living web app that had the potential to expand through community contributions.</p>
              <p>We had two goals:</p>
              <ol>
                <li><b>Build an online portal</b> where community members can submit STEM resources.</li>
                <li><b>Display the data as a searchable archive</b> so that students, teachers, and working professionals can easily navigate those resources.</li>
              </ol>
              <p>This is <b><a href="#part1">Part 1</a></b> of the case study. Here, I focus on information architecture and extremely technical aspects of data design.</p>
              <p><b><a href="/root-and-stem-part-2#part2">Part 2</a></b> is about data visualization and translating information into visual design to make it accessible to a wider audience and merge it with culture, history, and a story.</p>
              <div className="project-section-split">
                <div className="project-section-left">
                  <h4>Our Team</h4>
                  <p>
                    <b>Kelli Borgonia</b>, Lead, UX / UI Designer<br></br>
                    <b>Jon Borgonia</b>, Senior Software Architect<br></br>
                    <b>Te Vallee</b>, Full-Stack Developer
                  </p>
                </div>
                <div className="project-section-right">
                  <h4>My Role</h4>
                  <p>(Project lead, Data Structure, System Design, PM, UX/UI, Visual Design, Styling, CSS Animation).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="part1" className="case-study-divider-marker"></div>
        <div className="container case-study-divider-container">
          <div className="block case-study-divider-block">
            <h3>Part 1: Information Architecture</h3>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Data &amp; Infrastructure</h3>

              <p>After examining the team’s original Airtable database and reading the initial PDF report on STEM programs, I worked with the research team to define the properties that we might want to start collecting when users contribute STEM programs.</p>
              
              <p>PIC - LIST OF PROPERTIES</p>

              <p>Since the web application would house a combination of informational and community-contributed content, I planned to separate all editable content from the web app infrastructure.</p>
                
              <p>Whenever possible, I design projects and infrastructures that are sustainable. I have witnessed so many projects where content change requests end up wasting 80% of a developer's time. To mitigate this inefficieny in the projects that I have control over, I always work with a CMS to ensure that content can be updated independently by content creators and managers, so that developer resources are reserved for functional change requests.</p>

              <p>PIC - ROUGH OUTLINE OF INFRASTRUCTURE</p>

              <p>I discussed my plan with Jon Borgonia and he expanded it to an actual infrastructure that utilized a variety of web technologies:</p>
              <ol>
                <li><b>Airship CMS</b> (our internal product) for webpage hosting and conent management</li>
                <li><b>Firebase</b> for STEM Programs, contributor data, and users</li>
                <li><b>AWS Somethingname</b> for something</li>
                <li><b>AWS Somethingname</b> for hosting contributor images</li>
              </ol>
              <p>PIC - JON'S INFRASTRUCTURE DIAGRAM</p>
              <p>See <a href="#">Jon Borgonia’s Case Study</a> that outlines our experiment using serverless for this project, as well as our encounter with Firebase API rate-limiting and our solution to efficiently work with Firebase’s something cap.</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>User Flows</h3>
              <p>After the web infrastructure was planned, I mapped out the key user flows for website visitors.</p>
              <p>PIC - FLOWCHART ALL USERS, INCLUDE EMAILS, INCLUDE APPROVAL STATES</p>
              <ol>
                <li><b>Community contributors</b> submit STEM programs to the database.</li>
                <li><b>Website admins</b> review and approve contributor submissions.</li>
                <li><b>Students and teachers</b> search for STEM programs.</li>
                <li><b>All others</b> end up at the website leisurely to browse content.</li>
              </ol>
              <p>From a development standpoint, the web app was extremely simple and functional. However, coming from a visual design / product background, I am always thinking about how we can better engage our audience. I pitched the idea of <b>strong infographics</b> as a focal point to attract visitors and gain more traction through the rest of the web application. This would ideally also give those browsing for leisure more of a reason to engage with content.</p>

              <p>PIC - FLOWCHART OF USER DRIVEN BY INFOGRAPHICS FOCAL POINT</p>

              <p>The user flows mapped to the following web components: Programs, Contributors, Programs Admin, and Map. Each component is described below.</p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Programs</h3>
              {/* <p>The user flows mapped to the following web components:</p> */}

              {/* <h4>Programs</h4> */}
              <p>The Programs section pulled all STEM Programs data from Firebase and rendered it as a searchable, filterable list. I studied several similar websites and noticed that they all had very complex filtering and search capabilities. Since this was the site’s first iteration and there were less than 200 initial programs, I limited the filters to properties that would return the most general results: Program Type, Age Group, Industry, and Region.</p>

              <p>PIC - PROGRAMS</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">

              <h3>Contributors</h3>
              <p>I structured the Contributors interface to be a simple and straightforward. Users could sign up, set up an organization, then fill out a 3-step form to submit a STEM Program. Once submitted, the program was set to a “Pending” status to be reviewed by a site administrator.</p>

              <p>PIC - SUBMIT A PROGRAM</p>

              <p>Despite its simple appearance, the Contributors UI was complex and robust under the hood. All form questions in the program submission flow mapped to data fields in Airship CMS. These fields could be modified and new fields could even be added via the CMS, without having to interrupt the developer's workflow.</p>

              <p>PIC - DIAGRAM OF AIRSHIP TO WEB APP FORM FIELDS</p>

              <p>I had designed a complex data structure that mapped form field types to CMS-managed content. This allowed me (and future content admins) the flexibility to update the exact text for fields and options asynchronously from the developer working on the web application infrastructure.</p>

              <p>PIC - ALL DATA TYPES (MAYBE GH TICKET?)</p>
              
              <p>In also meant that we could reduce development time and stack processes that usually need to occur in sequence.</p>

              <p>PIC - GANTT CHART COMPARISON</p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">

              <h3>Programs Admin</h3>

              <p>The Programs Admin interface allowed admins to log in and review pending STEM programs. After review, admins could then approve and publish, or reject the program with notes for revision.</p>

              <p>PIC - ADMIN REVIEW SCREENS</p>

              <p>Email notifications were also sent at key STEM Program state changes.</p>

              <p>PIC - EMAIL USER FLOW</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Map</h3>

              <p>The Map was a representation of all Hawai’i STEM Programs plotted on a roadmap that extended from Pre-K to adulthood. Building it was a collaborative effort between Te Vallee, the developer, and I. When building it, Te followed my very detailed notes on data structure and logic for filters, dynamic captions, and sequentially loaded data. </p>
                
              <p>PIC - DETAILED SPEC</p>
                
              <p>Each STEM Program visualized on the map had a shape and color that correlated to a value representing the STEM Program's Depth or Breath of content, Learner or Diversity Focus, or Geographic location.</p>

              <p>PIC - MAP</p>

              <p>There is much more information about the Map in <b>Part 2</b>. You can also interact with the live map <a href="https://www.rootandstem.org/map" target="_blank">here</a>.</p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Dynamic Options</h3>

              <p>I spend a lot of time considering how to display categorical industry data</p>

              <p>In form, show all categories and subcategories.</p>

              <p>In search, only show itesm that have data.</p>
              
              <p>In terms of program data, if you set a sub category, in search results your items should show if a parent is selected, or your sub category.</p>

              <p>Also wanted it managed via CMS</p>

              <p>PIC - OPTIONS CATEGORIES / SUBCATEGORIES.</p>

              <p>PIC - HOW THOSE CATEGORIES ARE TRANSLATED.</p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Part 2: Data Visualization</h3>

              <p>In <b>Part 2</b>, I explain the project's theme and my visual design choices. I also do a deep-dive to explain how data is visualized in the Map. Head over to <b><a href="/root-and-stem-part-2#part2">Part 2</a></b>.</p>
            </div>
          </div>
        </div>

        
      </div>
    </Layout >
  )
}