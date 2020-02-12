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
            <h1 className="white-text h1-product">Root + STEM: Data Design</h1>
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
              <p>Prior to developing Root + STEM, only a PDF documented the STEM programs that were available in the state of Hawai’i. Our task was to turn the static resource into a living web app that had the potential to be expanded through community contributions.</p>
              
              <p>In addition to our primary ojective, I made it a personal goal to architect the data to be an example of an optimized content infrastructure for both developers and content managers.</p>

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
              <h3>User Groups</h3>
              <p>People would typically interact with the website in one of four ways:</p>
              <ul>
                <li><b>Community Contributors</b> would submit STEM programs to the database.</li>
                <li><b>Students and Teachers</b> would search for STEM programs.</li>
                <li><b>Website Administrators</b> would approve and publish or request changes to submitted STEM programs.</li>
                <li><b>Casual Users</b> (potentially policy makers and program funders) would search for insights and information.</li>
              </ul>
              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-sketch-users.png" alt="Root + STEM user groups" />
                <p className="caption">Root + STEM user groups</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Data &amp; Infrastructure</h3>

              <p>After examining the team’s original database and reading the initial PDF report on STEM programs, I worked with the research team to define the properties that we would want to start collecting once users had the ability to contribute STEM programs to the web app.</p>
              
              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-spreadsheet-database-values.png" alt="Part of the spreadsheet during the planning period." />
                <p className="caption">A section of the spreadsheet during planning.</p>
              </div>

              <p>Since the web application would house a combination of informational and community-contributed content, I planned to separate all editable content from the web app infrastructure.</p>
                
              <p>Whenever possible, I design infrastructures to be sustainable. I have witnessed so many projects where content change requests end up wasting 80% of a developer's time. To mitigate this inefficieny, I always work with a CMS to ensure that content can be updated independently by content creators and managers, so that developer resources can be reserved for functional code changes.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-sketch-infrastructure.png" alt="My sketch of the general content management infrastructure." />
                <p className="caption">My rough sketch of the content management infrastructure.</p>
              </div>

              <p>I discussed my plan with Jon Borgonia and he translated my sketch to a real infrastructure map:</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-ascii-infrastructure.png" alt="My sketch of the general content management infrastructure." />
                <p className="caption">Developer infrastructure diagram.</p>
              </div>

              {/* <code className="ascii-flowchart">
              +--------------------------+     +--------------------+<br></br>
              | AirshipCMS               |     | Contributor Portal |<br></br>
              |                          |     | Firebase User Auth +-------+<br></br>
              | +----------------------+ |     | CRUD Programs      +-----+ |<br></br>
              | | Contributor Portal   | |  +---&gt;Reads form fields  |     | |<br></br>
              | | Form Fields          | |  |  |   from AirshipCMS  |     | |<br></br>
              | | Program Options      &lt;----+  |                    |     | |<br></br>
              | | API via Headless CMS | |     +--------------------+     | |   +----------+<br></br>
              | |                      | |                                | |   | Firebase |<br></br>
              | +----------------------+ |     +----------------------+   | |   | Users    |<br></br>
              | | Proxy API from       | |     | Programs             |   | +---&gt; Auth     |<br></br>
              | | Programs             &lt;-------&gt; Firebase Reads       &lt;---+-----&gt; Programs |<br></br>
              | |                      | |     |                      |   |     |          |<br></br>
              | +----------------------+ |     +----------------------+   |     +----------+<br></br>
              | | Main Site            | |                                |<br></br>
              | | Content              | |     +----------------------+   |<br></br>
              | | Server Rendered      | |     | Admin Portal         |   |<br></br>
              | | via CMS              | |     | Program review       |   |<br></br>
              | |                      | |     | Program approve/deny +---+<br></br>
              | +----------------------+ |     |                      |<br></br>
              |                          |     +----------------------+<br></br>
              +--------------------------+
              </code> */}
              {/* <p>See <a href="#">Jon Borgonia’s Case Study</a> for more about infrastructure, our experiment using serverless, and our solution to Firebase API rate-limiting.</p> */}
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Programs</h3>
              <p>The Programs section pulled all STEM programs data from Firebase and rendered it as a searchable, filterable list. I studied several similar websites and noticed that they all had overly complex filtering and search capabilities. Since this was the site’s first iteration and there were less than 200 initial programs, I limited the filters to properties that would return the most general results: Program Type, Target Age Group, Industry, and Region.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-programs.png" alt="STEM Programs available in Hawai'i" />
                <p className="caption">STEM Programs available in Hawai'i</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">

              <h3>Contributors</h3>
              <p>I structured the Contributors interface to be simple and straightforward. Users could sign up, add information about their organization, then fill out a 3-step form to submit a STEM Program. Once submitted, the program was set to a “Pending” status to be reviewed by a site administrator.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-sketch-approval-states.png" alt="STEM Program approval flow." />
                <p className="caption">STEM Program approval flow.</p>
              </div>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-contributors.png" alt="STEM Programs available in Hawai'i" />
                <p className="caption">The STEM Contributor Portal was built to be mobile responsive. Mobile screens shown above.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Airship Admin</h3>
              <p>Despite its simple appearance, the Contributors UI was robust under the hood. All form questions in the program submission flow mapped to data fields in Airship CMS. Utilizing a CMS gave me the ability to update the text for the rest of the website as well as the fields and options for all the forms and search functionailty while the developer continued to work on critical web application infrastructure.</p>
              
              <p>Here is an example of form field data and a list of options that can be configured by a technical manager independently from the development cycle:</p>
              
              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-cms-fields.png" alt="All form fields and options could be edited independently by the content team while the developer worked on core logic." />
                <p className="caption">All form fields and options could be edited independently by the content team while the developer worked on core logic.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">

              <h3>Programs Admin</h3>

              <p>The Programs Admin interface allowed admins to log in and review pending STEM programs. After review, admins could then approve and publish, or reject a program with notes for revision.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-programs-admin.png" alt="A very simple admin approval UI for programs." />
                <p className="caption">A very simple admin approval UI for programs.</p>
              </div>

              <p>These interfaces were kept intentionally simple. Instead of building a single large app that could do everything, we intentionally built a minimal interface that could allow admins to perform a single function—approve or reject STEM programs.</p>
            </div>
          </div>
        </div>
        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Map</h3>

              <p>The Map was a representation of all Hawai’i STEM Programs plotted on a roadmap that extended from Pre-K to adulthood. Building it was a collaborative effort between Te Vallee and I. Te translated my very detailed notes on data structure into logic for filters, dynamic captions, sequentially loaded data, and loading animations. I built the CSS Grid structure, custom CSS charts, and designed custom graphics.</p>
                
              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-github-map.png" alt="A very simple admin approval UI for programs" />
                <p className="caption">A small snippet of the spec I wrote for the map logic.</p>
              </div>
                
              <p>Each STEM Program in the database was visualized on the map with a shape and color that correlated to specific criteria. In a separate case study (coming soon), I explain the specifics of this data visualization.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-map.png" alt="Full length map of Hawai'i STEM programs." />
                <p className="caption">Full length map of Hawai'i STEM programs.</p>
              </div>

              <p>View the live map <a href="https://www.rootandstem.org/map" target="_blank">here</a>.</p>
            </div>
          </div>
        </div>
        <div className="container white-container">
          <div className="block">
            <div className="project-section">
              <h3>Dynamic Options</h3>

              <p>I spent a lot of time planning how to display and mange categorical information that contained dynamic options. For example, industry categories are broken down into categories and sub-categories.</p>

              <p>I set up categories and sub-categories in the CMS so they could be managed and edited as needed without the content changes affecting the development timeline. Jon suggested using a "/" notation to indicate drill-down subcategories.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-cms-industries.png" alt="Content management for STEM industry categories and subcategories." />
                <p className="caption">Content management for STEM industry categories and subcategories.</p>
              </div>

              <p>In the Contributors form, industry categories display as a multiselect field. All options entered in the CMS are pulled into the form as options in the multiselect.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-multiselect-options.png" alt="Options from the CMS populated the options in the Contributors form." />
                <p className="caption">Options from the CMS populated the options in the Contributors form.</p>
              </div>

              <p>In the Programs list, the same industry categories list is pulled in from the API.</p>
              
              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-select-programs.png" alt="Selected options added to a list." />
                <p className="caption">Filter options in the Programs list.</p>
              </div>

              <p>In the Map, we filtered out any categories and subcategories that would return a search result of 0.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-screens-select-map.png" alt="Empty categories and subcategories are removed from the map filters." />
                <p className="caption">Empty categories and subcategories are removed from the map filters.</p>
              </div>

              <p>The system was also designed to be extendible, so any type of categorical data could be easily organized. The same system logic was automatically implemented for the STEM program properties for "Target Age Group" and "Region."</p>
            </div>
          </div>
        </div>

        <div className="container very-light-grey-container">
          <div className="block">
            <div className="project-section">
              <h3>Why does this matter?</h3>

              <p>It may all be behind the scenes, though <b>I enjoy designing systems that are maintainable for both managers and developers</b>. As a product owner myself, I don't like to spend maintenance resources paying developers to implement text changes. Similarly, developers don't want to be doing the equivalent of data entry.  I believe that any infrastructure that allows content to be decoupled from code streamlines processes, keeps things sustainable, and most importantly, ensures that everyone on a project team is utilized in the areas of their expertise.</p>

              <h4>A Typical Project Plan</h4>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-chart-without-cms.png" alt="Timeline without a CMS" />
                <p className="caption">Timeline without a CMS</p>
              </div>

              <p>With a typical web app development, initial programming is fast, but there is a long cycle of content revisions prior to launch and incremental revisions post-launch. This plan is perfectly fine, and possibly preferable, for a product that is likely to evolve rapidly, post-launch.</p>

              <h4>This Project Plan</h4>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-chart-with-cms.png" alt="Timeline without a CMS" />
                <p className="caption">Timeline with a CMS</p>
              </div>

              <p>When utilizing a CMS in development, initial programming takes longer and may be more costly, but resources are used more efficiently. 100% of developer time is used for developing features. Content is decoupled from code. Maintenance costs are reduced. This structure makes sense for a product that doesn't have plans to undergo systemic changes in the short to medium term (1 - 2 years), yet needs the flexibility to be extend and configure data within the constraints of the system architecture.</p>

              <div className="image-box image-box-medium">
                <img className="medium-image" src="https://kelli.airshipcms.io/assets/images/root1-chart-comparison.png" alt="Comparison of developer resources." />
                <p className="caption">When using a CMS, developer resources can be 100% utilized to build features instead of content changes.</p>
              </div>

              {/* <p className="centered">* * *</p>
              <p><b>Part 2</b> (coming soon) explains how I add a thematic layer to the project and integrate that theme into a dynamic data visualization.</p> */}
            </div>
          </div>
        </div>

      </div>
    </Layout >
  )
}